// @ts-nocheck
'use client';

import { useEffect } from 'react';
import './style.css';

/**
 * PersonalKnowledgeGraph - 支持多层级子节点的版本
 */
class PersonalKnowledgeGraph {
  constructor(containerId, options = {}) {
    this.containerId = containerId;
    this.container = d3.select(`#${containerId}`);

    this.config = {
      width: options.width || 1000,
      height: options.height || 800,
      backgroundColor: options.backgroundColor || '#FFFFFF',
      nodeStrength: options.nodeStrength || -500,
      linkDistance: options.linkDistance || 150,
      chargeStrength: options.chargeStrength || -1000,
      forceXStrength: options.forceXStrength || 0.1,
      forceYStrength: options.forceYStrength || 0.1,
      scale: options.scale || 1  // 手动缩放倍数
    };

    this.data = { nodes: [], links: [] };
    this.simulation = null;
    this.svg = null;
    this.zoomGroup = null;
    this.tooltip = null;

    this.init();
  }

  init() {
    this.container.selectAll('*').remove();

    this.tooltip = d3
      .select('body')
      .append('div')
      .attr('class', 'kg-tooltip')
      .style('position', 'absolute')
      .style('opacity', 0)
      .style('background-color', '#000000')
      .style('color', '#ffffff')
      .style('font-size', '12px')
      .style('padding', '8px')
      .style('border-radius', '4px')
      .style('pointer-events', 'none');

    this.svg = this.container
      .append('svg')
      .attr('width', this.config.width)
      .attr('height', this.config.height)
      .style('background-color', this.config.backgroundColor);

    this.zoomGroup = this.svg.append('g');

    const zoom = d3
      .zoom()
      .scaleExtent([0.5, 2])
      .on('zoom', (event) => {
        this.zoomGroup.attr('transform', event.transform);
      });
 // 🆕 应用初始缩放
    if (this.config.scale !== 1) {
      const initialTransform = d3.zoomIdentity
        .translate(this.config.width / 2, this.config.height / 2)
        .scale(this.config.scale)
        .translate(-this.config.width / 2, -this.config.height / 2);
      
      this.svg.call(zoom.transform, initialTransform);
    }

    this.svg.call(zoom);
    this.createArrowMarkers();
    this.initSimulation();
  }

  createArrowMarkers() {
    const defs = this.zoomGroup.append('defs');
    defs
      .append('marker')
      .attr('id', 'arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 8)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', '#9b9b9b');
  }

  initSimulation() {
    this.simulation = d3
      .forceSimulation()
      .force(
        'link',
        d3
          .forceLink()
          .id((d) => d.id)
          .distance(this.config.linkDistance)
      )
      .force('charge', d3.forceManyBody().strength(this.config.chargeStrength))
      .force(
        'x',
        d3.forceX(this.config.width / 2).strength(this.config.forceXStrength)
      )
      .force(
        'y',
        d3.forceY(this.config.height / 2).strength(this.config.forceYStrength)
      );
  }

  // 支持多层级的个人信息设置
  setPersonalInfo(personalInfo) {
    const { center, categories } = personalInfo;

    this.data.nodes = [];
    this.data.links = [];

    // 中心节点
    const centerNode = {
      id: 0,
      name: center.name,
      r: 34,
      symbol: 'circle',
      nodeType: 'center',
      level: 0,
      label: {
        color: '#ffffff',
        fontSize: 16,
        position: 'inside',
      },
      itemStyle: {
        color: '#f5a623',
        borderWidth: 0,
      },
    };

    this.data.nodes.push(centerNode);

    let nodeId = 1;

    // 分类颜色配置
    const categoryStyles = {
      basic: {
        colors: ['#f8e71c', '#13d6f4', '#5ec645', '#4a90e2'],
        categoryColor: '#ff7875',
      },
      contact: { colors: ['#78afab', '#4210c8'], categoryColor: '#36cfc9' },
      education: { colors: ['#4fda80', '#8cf32c'], categoryColor: '#40a9ff' },
      work: { colors: ['#bf9430'], categoryColor: '#73d13d' },
      hobby: { colors: ['#bd10e0'], categoryColor: '#ffa940' },
      skills: {
        colors: ['#d40731', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'],
        categoryColor: '#b37feb',
      },
    };

    // 处理各个分类
    Object.keys(categories).forEach((categoryKey) => {
      const categoryData = categories[categoryKey];
      const styles = categoryStyles[categoryKey] || {
        colors: ['#69b7ff'],
        categoryColor: '#69b7ff',
      };

      if (Array.isArray(categoryData)) {
        // 简单数组格式 - 直接连接到中心
        this.processSimpleArray(categoryData, categoryKey, styles, nodeId, 0);
        nodeId += categoryData.length;
      } else if (typeof categoryData === 'object') {
        // 复杂对象格式 - 支持多层级
        const result = this.processNestedObject(
          categoryData,
          categoryKey,
          styles,
          nodeId,
          0
        );
        nodeId = result.nextId;
      }
    });

    return this;
  }

  // 处理简单数组
  processSimpleArray(items, categoryKey, styles, startId, parentId) {
    items.forEach((item, index) => {
      const node = {
        id: startId + index,
        name: typeof item === 'string' ? item : item.value,
        r: 20,
        symbol: 'circle',
        nodeType: 'leaf',
        level: 1,
        category: categoryKey,
        label: {
          color: '#666666',
          fontSize: 12,
          position: 'bottom',
        },
        itemStyle: {
          color: styles.colors[index % styles.colors.length],
          borderWidth: 0,
        },
      };

      this.data.nodes.push(node);
      this.data.links.push({
        source: parentId,
        target: node.id,
        relation: typeof item === 'object' ? item.label : categoryKey,
        label: { color: '#9b9b9b', fontSize: 10 },
        lineStyle: { color: '#9b9b9b', width: 1 },
      });
    });
  }

  // 处理嵌套对象（支持技能分类等多层结构）
  processNestedObject(categoryData, categoryKey, styles, startId, parentId) {
    let currentId = startId;

    // 首先创建分类主节点（如"技能"）
    const categoryMainNode = {
      id: currentId++,
      name: this.getCategoryDisplayName(categoryKey),
      r: 25,
      symbol: 'circle',
      nodeType: 'category',
      level: 1,
      category: categoryKey,
      label: {
        color: '#666666',
        fontSize: 12,
        position: 'bottom',
      },
      itemStyle: {
        color: styles.categoryColor,
        borderWidth: 0,
      },
    };

    this.data.nodes.push(categoryMainNode);
    this.data.links.push({
      source: parentId,
      target: categoryMainNode.id,
      relation: this.getCategoryDisplayName(categoryKey),
      label: { color: '#9b9b9b', fontSize: 10 },
      lineStyle: { color: '#9b9b9b', width: 1 },
    });

    // 处理子分类
    Object.keys(categoryData).forEach((subCategoryKey, subIndex) => {
      const subItems = categoryData[subCategoryKey];

      // 创建子分类节点
      const subCategoryNode = {
        id: currentId++,
        name: subCategoryKey,
        r: 22,
        symbol: 'circle',
        nodeType: 'subcategory',
        level: 2,
        category: `${categoryKey}_${subCategoryKey}`,
        label: {
          color: '#000000',
          fontSize: 12,
          position: 'inside',
        },
        itemStyle: {
          color: '#FFFFFF',
          borderWidth: 1,
          borderColor: '#000000',
        },
      };

      this.data.nodes.push(subCategoryNode);
      this.data.links.push({
        source: categoryMainNode.id,
        target: subCategoryNode.id,
        relation: '',
        label: { color: '#000000', fontSize: 12 },
        lineStyle: { color: '#000000', width: 1 },
      });

      // 处理子分类下的具体项目
      subItems.forEach((item, itemIndex) => {
        const rating = item.rating || item.value || 0;
        const itemNode = {
          id: currentId++,
          name: typeof item === 'string' ? item : item.name,
          r: this.calculateNodeSize(rating),
          symbol: 'circle',
          nodeType: 'skill',
          level: 3,
          category: `${categoryKey}_${subCategoryKey}_item`,
          rating: rating,
          desc: rating ? `Ratting: ${'⭐'.repeat(Math.min(rating, 5))}` : null,
          label: {
            color: '#666666',
            fontSize: 12,
            position: 'bottom',
          },
          itemStyle: {
            color: styles.colors[itemIndex % styles.colors.length],
            borderWidth: 0,
          },
        };

        this.data.nodes.push(itemNode);
        this.data.links.push({
          source: subCategoryNode.id,
          target: itemNode.id,
          relation: '',
          label: { color: '#9b9b9b', fontSize: 10 },
          lineStyle: { color: '#9b9b9b', width: 1 },
        });
      });
    });

    return { nextId: currentId };
  }

  // 根据评分计算节点大小
  calculateNodeSize(rating) {
    if (!rating) return 20;
    return Math.max(15, Math.min(35, 15 + rating * 4));
  }

  // 获取分类显示名称
  getCategoryDisplayName(key) {
    const displayNames = {
      basic: '基本信息',
      contact: '联系方式',
      education: '教育背景',
      work: '工作经历',
      hobby: '兴趣爱好',
      skills: '技能',
    };
    return displayNames[key] || key;
  }

  render() {
    this.zoomGroup.selectAll('.links').remove();
    this.zoomGroup.selectAll('.link-texts').remove();
    this.zoomGroup.selectAll('.nodes').remove();

    // 创建连线
    const link = this.zoomGroup
      .append('g')
      .attr('class', 'links')
      .selectAll('path')
      .data(this.data.links)
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('stroke', (d) => d.lineStyle?.color || '#9b9b9b')
      .attr('stroke-width', (d) => d.lineStyle?.width || 1)
      .attr('fill', 'none')
      .attr('marker-end', 'url(#arrow)');

    // 创建连线文本
    const linkText = this.zoomGroup
      .append('g')
      .attr('class', 'link-texts')
      .selectAll('text')
      .data(this.data.links.filter((d) => d.relation))
      .enter()
      .append('text')
      .attr('class', 'link-text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('fill', (d) => d.label?.color || '#9b9b9b')
      .attr('font-size', (d) => d.label?.fontSize || 10)
      .attr('pointer-events', 'none')
      .text((d) => d.relation);

    // 创建节点
    const node = this.zoomGroup
      .append('g')
      .attr('class', 'nodes')
      .selectAll('.node')
      .data(this.data.nodes)
      .enter()
      .append('g')
      .attr('class', 'node')
      .call(this.createDragBehavior());

    // 添加节点形状和文字
    node.each((d, i, nodes) => {
      const nodeGroup = d3.select(nodes[i]);
      const textPosition = d.label?.position || 'bottom';

      // 添加圆形
      nodeGroup
        .append('circle')
        .attr('r', d.r || 25)
        .attr('fill', d.itemStyle?.color || '#69b3a2')
        .attr('stroke', d.itemStyle?.borderColor || '#333')
        .attr('stroke-width', d.itemStyle?.borderWidth || 1);

      // 添加文字
      const text = nodeGroup
        .append('text')
        .attr('text-anchor', 'middle')
        .attr('fill', d.label?.color || '#666')
        .attr('font-size', d.label?.fontSize || 12)
        .attr('font-weight', d.label?.fontWeight || 'normal')
        .attr('pointer-events', 'none')
        .text(d.name);

      // 设置文字位置
      if (textPosition === 'inside') {
        text.attr('dominant-baseline', 'middle').attr('dy', 0);
      } else {
        text.attr('dominant-baseline', 'hanging').attr('dy', (d.r || 25) + 15);
      }
    });

    // 添加交互事件
    node
      .on('mouseover', (event, d) => {
        this.tooltip.transition().duration(200).style('opacity', 0.9);
        this.tooltip
          .html(this.formatter(d))
          .style('left', event.pageX + 10 + 'px')
          .style('top', event.pageY - 28 + 'px');
      })
      .on('mouseout', () => {
        this.tooltip.transition().duration(500).style('opacity', 0);
      });

    // 启动模拟
    this.simulation.nodes(this.data.nodes).on('tick', () => {
      this.updatePositions(link, linkText, node);
    });

    this.simulation.force('link').links(this.data.links);
    this.simulation.alpha(1).restart();

    return this;
  }

  updatePositions(link, linkText, node) {
    link.attr('d', (d) => {
      const sourceNode =
        typeof d.source === 'object'
          ? d.source
          : this.data.nodes.find((n) => n.id === d.source);
      const targetNode =
        typeof d.target === 'object'
          ? d.target
          : this.data.nodes.find((n) => n.id === d.target);
      if (!sourceNode || !targetNode) return '';
      return `M${sourceNode.x},${sourceNode.y} L${targetNode.x},${targetNode.y}`;
    });

    linkText
      .attr('x', (d) => {
        const sourceNode =
          typeof d.source === 'object'
            ? d.source
            : this.data.nodes.find((n) => n.id === d.source);
        const targetNode =
          typeof d.target === 'object'
            ? d.target
            : this.data.nodes.find((n) => n.id === d.target);
        return (sourceNode.x + targetNode.x) / 2;
      })
      .attr('y', (d) => {
        const sourceNode =
          typeof d.source === 'object'
            ? d.source
            : this.data.nodes.find((n) => n.id === d.source);
        const targetNode =
          typeof d.target === 'object'
            ? d.target
            : this.data.nodes.find((n) => n.id === d.target);
        return (sourceNode.y + targetNode.y) / 2;
      });

    node.attr('transform', (d) => `translate(${d.x},${d.y})`);
  }

  createDragBehavior() {
    return d3
      .drag()
      .on('start', (event, d) => {
        if (!event.active) this.simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on('drag', (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on('end', (event, d) => {
        if (!event.active) this.simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });
  }

  formatter(d) {
    let content = `<strong>${d.name}</strong>`;
    if (d.desc) content += `<br/>${d.desc}`;
    if (d.category) content += `<br/>Category: ${d.category}`;
    return content;
  }

  destroy() {
    if (this.simulation) this.simulation.stop();
    if (this.tooltip) this.tooltip.remove();
    this.container.selectAll('*').remove();
  }
}

const personalData = {
  center: {
    name: 'Joney.Sli',
    avatar: null,
  },
  categories: {
    // basicInfo: {
    // },
    // basic: [
    //   { label: 'Birthday', value: '04/21/1999' },
    //   { label: 'Hometown', value: 'SiChuang, China' },
    //   { label: 'Zodiac Sign', value: '金牛座' },
    //   { label: 'IMBT', value: 'INFJ' },
    // ],
    // education: [
    //   { label: 'Education', value: "Bachelor's" },
    //   { label: 'School', value: 'Nankai University' },
    //   { label: 'Major', value: 'CS' },
    // ],
    // contact: [
    //   { label: 'X', value: '@Joney.SLi' },
    //   { label: 'Facebook', value: 'Sli JoneyLi ' },
    //   { label: 'Email', value: 'bmlishizeng@gmail.com' },
    // ],
    skills: {
      Languages: [
        {
          name: 'JavaScript',
          rating: 5,
        },
        {
          name: 'C++',
          rating: 3,
        },
        {
          name: 'C#',
          rating: 4,
        },
        {
          name: 'Python',
          rating: 4,
        },
        {
          name: 'Java',
          rating: 4,
        },
        {
          name: 'OC',
          rating: 3,
        },
        {
          name: 'Golang',
          rating: 3,
        },
        {
          name: 'Swift',
          rating: 3,
        },
      ],
      Frameworks: [
        {
          name: 'React',
          rating: 5,
        },
        {
          name: 'React-Native',
          rating: 5,
        },
        {
          name: 'Nodejs',
          rating: 5,
        },
        {
          name: 'Nestjs',
          rating: 5,
        },
        {
          name: '.NetCore',
          rating: 3,
        },
        {
          name: 'Nextjs',
          rating: 4,
        },
        {
          name: 'WeChat Mini Program',
          rating: 3,
        },
        {
          name: 'DApp',
          rating: 3,
        },
      ],
      GameDevelopment: [
        {
          name: 'Unreal Engine (UE)',
          rating: 3,
        },
        {
          name: 'GoDot',
          rating: 3,
        },
        {
          name: 'Unity',
          rating: 2,
        },
      ],
    },
  },
};

function initPersonalGraph() {
  // 确保在客户端执行
  if (typeof window !== 'undefined') {
    const graph = new PersonalKnowledgeGraph('personal-graph', {
      width: 600,
      height: 500,
      backgroundColor: '#f8f9fa',
      scale: 0.8  // 缩放到60%
    });

    graph.setPersonalInfo(personalData).render();

    return graph;
  }
}

export default function D3Skill() {
  useEffect(() => {
    const graph = initPersonalGraph();

    return () => {
      if (graph) graph.destroy();
    };
  }, []);

  return (
    <div style={{width:600,height:500}}>
      {/* <h1>我的个人知识图谱</h1> */}
      <div id='personal-graph'></div>
    </div>
  );
}

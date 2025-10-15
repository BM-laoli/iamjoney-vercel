'use client';

import React from 'react';
import Link from 'next/link';
import Card from './Card';
import { ProjectDetail } from '@/types/project';
import Footer from './Footer';

interface ProjectDetailPageProps {
  project: ProjectDetail;
  backButtonText?: string;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, backButtonText = '← Back to Previous Page' }) => {
  return (
    <div className="pixel-grid min-h-screen">
      <div className="pixel-container">
        {/* Back Button Card */}
        <Card className="mb-6 w-fit">
          <button 
            onClick={() => window.history.back()} 
            className="pixel-button inline-block"
          >
            {backButtonText}
          </button>
        </Card>

        {/* Project Title Card */}
        <Card title={project.title} className="mb-8 mt-20">
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed pixel-text">
              {project.description}
            </p>
            
            {/* Difficulty and Estimated Time */}
            <div className="flex flex-wrap gap-4">
              {project.difficulty && (
                <div className="pixel-card bg-blue-50 border-blue-400">
                  <span className="pixel-text text-sm font-bold text-blue-800">
                    Difficulty: {project.difficulty === 'beginner' ? 'Beginner' : project.difficulty === 'intermediate' ? 'Intermediate' : 'Advanced'}
                  </span>
                </div>
              )}
              {project.estimatedTime && (
                <div className="pixel-card bg-green-50 border-green-400">
                  <span className="pixel-text text-sm font-bold text-green-800">
                    Estimated Time: {project.estimatedTime}
                  </span>
                </div>
              )}
            </div>

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="space-y-2 mt-20">
                <h3 className="pixel-text font-bold text-gray-800">Tech Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="pixel-card bg-gray-100 border-gray-400 text-xs">
                      <span className="pixel-text text-gray-700">{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Article Link */}
            {project.articleLink && (
              <div>
                <a 
                  href={project.articleLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="pixel-button inline-block mt-20"
                >
                  View Full Article →
                </a>
              </div>
            )}
          </div>
        </Card>

        {/* Content Area - Redesigned with Card Components */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
          {/* Learning Outcomes Card */}
          <Card title="🎯 What You'll Learn" className="h-fit">
            <ul className="space-y-3">
              {project.learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2 font-bold">▶</span>
                  <span className="text-gray-700 pixel-text text-sm">{outcome}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Target Audience Card */}
          <Card title="👥 Who It's For" className="h-fit">
            <ul className="space-y-3">
              {project.targetAudience.map((audience, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">▶</span>
                  <span className="text-gray-700 pixel-text text-sm">{audience}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Expected Outputs Card */}
          <Card title="🚀 What You'll Build" className="h-fit">
            <ul className="space-y-3">
              {project.expectedOutputs.map((output, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-500 mr-2 font-bold">▶</span>
                  <span className="text-gray-700 pixel-text text-sm">{output}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Footer Card */}
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
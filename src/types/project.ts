export interface ProjectDetail {
  title: string;
  description: string;
  articleLink?: string;
  learningOutcomes: string[];
  targetAudience: string[];
  expectedOutputs: string[];
  tags?: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime?: string;
}

export interface ProjectPageProps {
  project: ProjectDetail;
}
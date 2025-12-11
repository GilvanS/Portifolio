export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
  colorClass?: string;
}

export interface SkillItem {
  name: string;
  icon: string;
  color: string;
}

export interface EducationItem {
  year: string;
  title: string;
  institution: string;
  description: string;
}

export interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  language?: 'json' | 'javascript' | 'typescript' | 'python' | 'markdown' | 'css';
  children?: FileNode[];
  icon?: string;
}

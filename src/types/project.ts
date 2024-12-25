export interface Project {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  issues?: Issue[];
}

export interface ProjectMember {
  project_id: string;
  user_id: string;
  role: 'owner' | 'member';
  created_at: string;
}
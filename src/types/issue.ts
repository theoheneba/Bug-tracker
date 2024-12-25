export type Priority = 'low' | 'medium' | 'high';
export type Status = 'open' | 'in-progress' | 'resolved' | 'closed';

export interface Issue {
  id: string;
  title: string;
  description: string;
  assignee: string;
  priority: Priority;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
}
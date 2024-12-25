import React from 'react';
import { Calendar, Users } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  created_at: string;
}

interface ProjectHeaderProps {
  project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h1>
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <div className="flex items-center space-x-6 text-sm text-gray-500">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          Created {new Date(project.created_at).toLocaleDateString()}
        </div>
        <div className="flex items-center">
          <Users className="w-4 h-4 mr-1" />
          {/* Add member count here */}
        </div>
      </div>
    </div>
  );
}
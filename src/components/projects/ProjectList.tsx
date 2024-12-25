import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  created_at: string;
}

interface ProjectListProps {
  projects: Project[];
  filter: string;
}

export function ProjectList({ projects, filter }: ProjectListProps) {
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    // Add more filter conditions as needed
    return true;
  });

  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No projects found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProjects.map((project) => (
        <Link
          key={project.id}
          to={`/projects/${project.id}`}
          className="block bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
        >
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(project.created_at).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {/* Add member count here */}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
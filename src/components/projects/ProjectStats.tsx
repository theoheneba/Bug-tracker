import React from 'react';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';

interface Project {
  issues: Array<{
    status: string;
    priority: string;
  }>;
}

interface ProjectStatsProps {
  project: Project;
}

export function ProjectStats({ project }: ProjectStatsProps) {
  const stats = {
    total: project.issues.length,
    open: project.issues.filter(i => i.status === 'open').length,
    inProgress: project.issues.filter(i => i.status === 'in-progress').length,
    resolved: project.issues.filter(i => i.status === 'resolved').length,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Issues</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stats.total}</p>
          </div>
          <AlertCircle className="w-8 h-8 text-gray-400" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Open</p>
            <p className="text-2xl font-bold text-yellow-600 mt-1">{stats.open}</p>
          </div>
          <AlertCircle className="w-8 h-8 text-yellow-400" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">In Progress</p>
            <p className="text-2xl font-bold text-blue-600 mt-1">{stats.inProgress}</p>
          </div>
          <Clock className="w-8 h-8 text-blue-400" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Resolved</p>
            <p className="text-2xl font-bold text-green-600 mt-1">{stats.resolved}</p>
          </div>
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
      </div>
    </div>
  );
}
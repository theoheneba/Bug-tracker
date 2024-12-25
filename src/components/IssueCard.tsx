import { useState } from 'react';
import { Clock, User } from 'lucide-react';
import { Issue } from '../types/issue';
import { StatusBadge } from './StatusBadge';
import { PriorityBadge } from './PriorityBadge';
import { updateIssueStatus } from '../utils/supabase';

interface IssueCardProps {
  issue: Issue;
  onStatusChange: () => void;
}

export function IssueCard({ issue, onStatusChange }: IssueCardProps) {
  const [isUpdating, setIsUpdating] = useState(false);

  async function handleStatusChange(newStatus: Issue['status']) {
    setIsUpdating(true);
    try {
      await updateIssueStatus(issue.id, newStatus);
      onStatusChange();
    } catch (error) {
      console.error('Error updating issue status:', error);
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{issue.title}</h3>
          <select
            value={issue.status}
            onChange={(e) => handleStatusChange(e.target.value as Issue['status'])}
            disabled={isUpdating}
            className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm bg-gray-50 hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50"
          >
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{issue.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <PriorityBadge priority={issue.priority} />
          <StatusBadge status={issue.status} />
        </div>
      </div>
      
      <div className="border-t border-gray-100 px-6 py-4 bg-gray-50 rounded-b-xl flex justify-between text-sm text-gray-600">
        <div className="flex items-center">
          <User className="w-4 h-4 mr-1.5 text-gray-500" />
          {issue.assignee}
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1.5 text-gray-500" />
          {new Date(issue.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
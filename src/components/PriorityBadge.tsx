import { AlertCircle } from 'lucide-react';
import { Priority } from '../types/issue';

const priorityConfig = {
  low: {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
    label: 'Low'
  },
  medium: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    label: 'Medium'
  },
  high: {
    bg: 'bg-red-100',
    text: 'text-red-800',
    label: 'High'
  }
};

interface PriorityBadgeProps {
  priority: Priority;
}

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  const config = priorityConfig[priority];
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text} inline-flex items-center`}>
      <AlertCircle className="w-4 h-4 mr-1" />
      {config.label}
    </span>
  );
}
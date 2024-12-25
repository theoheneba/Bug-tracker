import { Status } from '../types/issue';

const statusConfig = {
  open: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    label: 'Open'
  },
  'in-progress': {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
    label: 'In Progress'
  },
  resolved: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    label: 'Resolved'
  },
  closed: {
    bg: 'bg-gray-100',
    text: 'text-gray-800',
    label: 'Closed'
  }
};

interface StatusBadgeProps {
  status: Status;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
}
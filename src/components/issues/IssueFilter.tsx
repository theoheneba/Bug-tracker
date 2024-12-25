import React from 'react';
import { Status } from '../../types/issue';

interface IssueFilterProps {
  value: Status;
  onChange: (value: Status) => void;
}

export function IssueFilter({ value, onChange }: IssueFilterProps) {
  return (
    <div className="flex items-center space-x-4">
      <label className="text-sm font-medium text-gray-700">Status</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as Status)}
        className="px-4 py-2 rounded-lg border border-gray-200 text-sm bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="open">Open</option>
        <option value="in-progress">In Progress</option>
        <option value="resolved">Resolved</option>
        <option value="closed">Closed</option>
      </select>
    </div>
  );
}
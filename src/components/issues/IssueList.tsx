import React from 'react';
import { Issue } from '../../types/issue';
import { IssueCard } from '../IssueCard';
import { IssueFilter } from './IssueFilter';
import { IssueForm } from '../IssueForm';

interface IssueListProps {
  issues: Issue[];
  projectId: string;
}

export function IssueList({ issues, projectId }: IssueListProps) {
  if (!issues?.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No issues found</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {issues.map((issue) => (
          <IssueCard
            key={issue.id}
            issue={issue}
            onStatusChange={() => {}}
          />
        ))}
      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Issue } from '../../types/issue';
import { IssueCard } from '../../components/IssueCard';

export function IssueDetails() {
  const { id } = useParams<{ id: string }>();
  const [issue, setIssue] = useState<Issue | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchIssue(id);
    }
  }, [id]);

  async function fetchIssue(issueId: string) {
    try {
      const { data, error } = await supabase
        .from('issues')
        .select('*')
        .eq('id', issueId)
        .single();

      if (error) throw error;
      setIssue(data);
    } catch (error) {
      console.error('Error fetching issue:', error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <div className="text-center py-12">Loading issue...</div>;
  }

  if (!issue) {
    return <div className="text-center py-12">Issue not found</div>;
  }

  return (
    <div className="space-y-6">
      <IssueCard issue={issue} onStatusChange={() => {}} />
    </div>
  );
}
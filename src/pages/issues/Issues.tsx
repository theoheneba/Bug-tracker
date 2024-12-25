import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Issue } from '../../types/issue';
import { IssueList } from '../../components/issues/IssueList';
import { IssueFilter } from '../../components/issues/IssueFilter';

export function Issues() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<Issue['status']>('open');

  useEffect(() => {
    fetchIssues();
  }, [filter]); // Refetch when filter changes

  async function fetchIssues() {
    try {
      const { data, error } = await supabase
        .from('issues')
        .select('*')
        .eq('status', filter);
      
      if (error) throw error;
      setIssues(data || []);
    } catch (error) {
      console.error('Error fetching issues:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Issues</h1>
      </div>

      <IssueFilter value={filter} onChange={setFilter} />
      
      {isLoading ? (
        <div className="text-center">Loading issues...</div>
      ) : (
        <IssueList 
          issues={issues} 
          projectId="" 
          onStatusChange={fetchIssues}
        />
      )}
    </div>
  );
}
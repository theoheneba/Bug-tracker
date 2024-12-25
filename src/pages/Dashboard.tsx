import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function Dashboard() {
  const [stats, setStats] = useState({
    totalIssues: 0,
    openIssues: 0,
    resolvedIssues: 0
  });

  useEffect(() => {
    async function fetchStats() {
      const { data: issues } = await supabase
        .from('issues')
        .select('status');

      if (issues) {
        setStats({
          totalIssues: issues.length,
          openIssues: issues.filter(i => i.status === 'open').length,
          resolvedIssues: issues.filter(i => i.status === 'resolved').length
        });
      }
    }

    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Total Issues</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-2">{stats.totalIssues}</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Open Issues</h3>
          <p className="text-3xl font-bold text-yellow-600 mt-2">{stats.openIssues}</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Resolved Issues</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">{stats.resolvedIssues}</p>
        </div>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { ProjectList } from '../../components/projects/ProjectList';
import { ProjectFilter } from '../../components/projects/ProjectFilter';
import { NewProjectButton } from '../../components/projects/NewProjectButton';

export function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*');
      
      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
        <NewProjectButton onProjectCreated={fetchProjects} />
      </div>

      <ProjectFilter value={filter} onChange={setFilter} />
      
      {isLoading ? (
        <div className="text-center">Loading projects...</div>
      ) : (
        <ProjectList projects={projects} filter={filter} />
      )}
    </div>
  );
}
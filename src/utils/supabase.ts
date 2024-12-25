import { Issue } from '../types/issue';
import { supabase } from '../lib/supabase';

export async function updateIssueStatus(issueId: string, status: Issue['status']) {
  const { error } = await supabase
    .from('issues')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', issueId);

  if (error) throw error;
}

export async function fetchProjectWithIssues(projectId: string) {
  const { data, error } = await supabase
    .from('projects')
    .select(`
      *,
      issues (*)
    `)
    .eq('id', projectId)
    .single();

  if (error) throw error;
  return data;
}

export async function fetchProjectMembers(projectId: string) {
  const { data, error } = await supabase
    .from('project_members')
    .select(`
      *,
      user:users(id, name)
    `)
    .eq('project_id', projectId);

  if (error) throw error;
  return data;
}
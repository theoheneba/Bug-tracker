import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { UserList } from '../../components/admin/UserList';
import { UserFilter } from '../../components/admin/UserFilter';

export function UserManagement() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchUsers();
  }, [filter]);

  async function fetchUsers() {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setUsers(data || []);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
      <UserFilter value={filter} onChange={setFilter} />
      {isLoading ? (
        <div className="text-center">Loading users...</div>
      ) : (
        <UserList users={users} filter={filter} onUserUpdated={fetchUsers} />
      )}
    </div>
  );
}
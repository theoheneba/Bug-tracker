import { useState } from 'react';
import { User } from '../../types/auth';
import { supabase } from '../../lib/supabase';
import { MoreVertical } from 'lucide-react';

interface UserRowProps {
  user: User;
  onUpdated: () => void;
}

export function UserRow({ user, onUpdated }: UserRowProps) {
  const [isUpdating, setIsUpdating] = useState(false);

  async function handleRoleChange(newRole: User['role']) {
    setIsUpdating(true);
    try {
      const { error } = await supabase
        .from('users')
        .update({ role: newRole })
        .eq('id', user.id);

      if (error) throw error;
      onUpdated();
    } catch (error) {
      console.error('Error updating user role:', error);
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div>
            <div className="text-sm font-medium text-gray-900">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {user.role}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(user.createdAt).toLocaleDateString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="relative inline-block text-left">
          <button
            disabled={isUpdating}
            className="text-gray-400 hover:text-gray-600 disabled:opacity-50"
          >
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </td>
    </tr>
  );
}
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Bug, LogOut } from 'lucide-react';

export function TopBar() {
  const { user, signOut } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center">
          <Bug className="w-8 h-8 text-indigo-600" />
          <h1 className="ml-3 text-xl font-semibold text-gray-900">Bug Tracker</h1>
        </div>

        <div className="flex items-center">
          <div className="mr-4">
            <p className="text-sm font-medium text-gray-700">{user?.name}</p>
            <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
          </div>
          <button
            onClick={signOut}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
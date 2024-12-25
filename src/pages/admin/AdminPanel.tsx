import { Routes, Route } from 'react-router-dom';
import { UserManagement } from './UserManagement';
import { Settings } from './Settings';

export function AdminPanel() {
  return (
    <Routes>
      <Route path="users" element={<UserManagement />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
}
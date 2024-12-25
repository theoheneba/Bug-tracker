import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Login } from '../pages/auth/Login';
import { Register } from '../pages/auth/Register';
import { Dashboard } from '../pages/Dashboard';
import { Projects } from '../pages/projects/Projects';
import { ProjectDetails } from '../pages/projects/ProjectDetails';
import { Issues } from '../pages/issues/Issues';
import { IssueDetails } from '../pages/issues/IssueDetails';
import { AdminPanel } from '../pages/admin/AdminPanel';

export function AppRoutes() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />

      {/* Protected routes */}
      <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/projects" element={user ? <Projects /> : <Navigate to="/login" />} />
      <Route path="/projects/:id" element={user ? <ProjectDetails /> : <Navigate to="/login" />} />
      <Route path="/issues" element={user ? <Issues /> : <Navigate to="/login" />} />
      <Route path="/issues/:id" element={user ? <IssueDetails /> : <Navigate to="/login" />} />
      
      {/* Admin routes */}
      <Route 
        path="/admin/*" 
        element={
          user?.role === 'admin' ? <AdminPanel /> : <Navigate to="/" />
        } 
      />
    </Routes>
  );
}
import { Bug } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="bg-white/10 p-3 rounded-lg">
            <Bug className="w-8 h-8 text-white" />
          </div>
          <div className="ml-4">
            <h1 className="text-3xl font-bold text-white">Bug Tracker</h1>
            <p className="text-indigo-100 text-sm">Track and manage issues efficiently</p>
          </div>
        </div>
      </div>
    </header>
  );
}
interface UserFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function UserFilter({ value, onChange }: UserFilterProps) {
  return (
    <div className="flex items-center space-x-4">
      <label className="text-sm font-medium text-gray-700">Filter by Role</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-200 text-sm bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="all">All Users</option>
        <option value="admin">Admins</option>
        <option value="developer">Developers</option>
        <option value="tester">Testers</option>
      </select>
    </div>
  );
}
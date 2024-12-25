interface IssueFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function IssueFilter({ value, onChange }: IssueFilterProps) {
  return (
    <div className="mb-6 flex items-center space-x-4">
      <label className="text-sm font-medium text-gray-700">Filter by Status</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-200 text-sm bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="all">All Issues</option>
        <option value="open">Open</option>
        <option value="in-progress">In Progress</option>
        <option value="resolved">Resolved</option>
        <option value="closed">Closed</option>
      </select>
    </div>
  );
}
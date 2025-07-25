import React from 'react';

interface Props {
  view: 'table' | 'graph';
  setView: (view: 'table' | 'graph') => void;
}


export default function Navbar({ view, setView }: Props) {
  return (
    <nav className="flex space-x-4 mb-6">
      <button
        onClick={() => setView('table')}
        className={`px-4 py-2 rounded-lg ${view === 'table' ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-800'}`}
      >
        📋 Table View
      </button>
      <button
        onClick={() => setView('graph')}
        className={`px-4 py-2 rounded-lg ${view === 'graph' ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-800'}`}
      >
        📊 Investment
      </button>
    </nav>
  );
}

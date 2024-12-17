import React from 'react';
import { Search, MessageSquare, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-80 border-r bg-white flex flex-col">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search chats..."
            className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {/* Chat list will be rendered here */}
      </div>

      <div className="p-4 border-t">
        <button className="w-full flex items-center justify-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
}
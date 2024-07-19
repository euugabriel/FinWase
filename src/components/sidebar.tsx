import React from 'react';
import { Home, Settings, User } from 'lucide-react';

const Sidebar: React.FC = () => (
  <aside className="w-64 h-screen bg-gray-800 text-white fixed">
    <div className="p-6">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <ul className="mt-6">
        <li className="mb-4 flex items-center space-x-2">
          <Home className="h-5 w-5" />
          <a href="#" className="hover:underline">Home</a>
        </li>
        <li className="mb-4 flex items-center space-x-2">
          <Settings className="h-5 w-5" />
          <a href="#" className="hover:underline">Settings</a>
        </li>
        <li className="mb-4 flex items-center space-x-2">
          <User className="h-5 w-5" />
          <a href="#" className="hover:underline">Profile</a>
        </li>
      </ul>
    </div>
  </aside>
  
);

export default Sidebar;

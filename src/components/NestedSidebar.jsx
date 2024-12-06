import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

const NestedSidebar = ({ onCreateProduct }) => {
  const mainNavItems = [
    { id: 'user', icon: '👤', label: 'User name', subtext: 'Company name' },
    { id: 'portfolio', icon: '📊', label: 'Product Portfolio' },
    { id: 'management', icon: '📋', label: 'Project Management' },
    { id: 'analytics', icon: '📈', label: 'Analytics' },
    { id: 'preview', icon: '👁️', label: 'EPD Preview' },
    { id: 'reports', icon: '📑', label: 'Reports', badge: '2' },
  ];

  const toolNavItems = [
    { 
      id: 'fast-lca',
      label: 'Fast LCA',
      description: 'Quick lifecycle assessment',
      icon: '⚡',
      active: false 
    },
    { 
      id: 'intelligent',
      label: 'Intelligent',
      description: 'AI-powered insights',
      icon: '🧠',
      active: false 
    },
    { 
      id: 'epd-builder',
      label: 'EPD Builder',
      description: 'Create detailed EPDs',
      icon: '🏗️',
      active: true 
    },
    { 
      id: 'optimizer-lca',
      label: 'Optimizer LCA',
      description: 'Optimize lifecycle impact',
      icon: '⚙️',
      active: false 
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Primary Sidebar */}
      <div className="w-16 bg-terra-dark flex flex-col items-center py-4 border-r border-terra-blue">
        {mainNavItems.map((item) => (
          <div key={item.id} className="mb-6 relative">
            <button
              className={`w-12 h-12 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-colors
                ${item.id === 'user' ? 'bg-white/10' : ''}`}
            >
              <span className="text-xl">{item.icon}</span>
            </button>
            {item.badge && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-terra-green rounded-full text-xs flex items-center justify-center text-white">
                {item.badge}
              </span>
            )}
          </div>
        ))}
        <div className="mt-auto">
          <button className="w-12 h-12 rounded-lg flex items-center justify-center text-white hover:bg-white/10">
            <span className="text-xl">⬅️</span>
          </button>
        </div>
      </div>

      {/* Secondary Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        {/* User Profile Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-terra-blue/10 flex items-center justify-center">
              <span className="text-lg text-terra-blue">👤</span>
            </div>
            <div>
              <h3 className="text-sm font-medium text-terra-dark">John Doe</h3>
              <p className="text-xs text-gray-500">TerraNEXT Inc.</p>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="p-4">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Tools
          </h2>
          <div className="space-y-2">
            {toolNavItems.map((item) => (
              <button
                key={item.id}
                className={`w-full group relative p-3 rounded-lg transition-all duration-200 ease-in-out
                  ${item.active 
                    ? 'bg-terra-blue text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{item.icon}</span>
                  <div className="text-left">
                    <p className={`text-sm font-medium ${item.active ? 'text-white' : 'text-terra-dark'}`}>
                      {item.label}
                    </p>
                    <p className={`text-xs ${item.active ? 'text-white/80' : 'text-gray-500'}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
                {item.active && (
                  <div className="absolute inset-y-0 left-0 w-1 bg-terra-green rounded-l-lg" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Create Product Button */}
        <button
          onClick={onCreateProduct}
          className="w-full flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-terra-blue rounded-md hover:bg-opacity-90 transition-colors"
        >
          <PlusCircleIcon className="h-5 w-5" />
          <span>Create Product</span>
        </button>

        {/* Quick Actions */}
        {/* <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 bg-white">
          <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 bg-terra-blue/10 text-terra-blue rounded-lg hover:bg-terra-blue/20 transition-colors">
            <span>🔄</span>
            <span className="text-sm font-medium">Switch Project</span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default NestedSidebar;

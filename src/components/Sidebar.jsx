import React from 'react';

const Sidebar = ({ side, children }) => {
  return (
    <div 
      className={`
        w-64 h-screen
        ${side === 'right' 
          ? 'bg-white border-l border-gray-200' 
          : 'bg-terra-dark text-white border-r border-terra-blue'
        }
      `}
    >
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;

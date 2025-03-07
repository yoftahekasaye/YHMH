import React from "react";

const SidebarWidget = ({ title, count, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 shadow rounded-lg flex items-center">
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{count}</p>
      </div>
      <div className="text-gray-400 text-3xl">{icon}</div>
    </div>
  );
};

export default SidebarWidget;

// resources/js/Pages/AdminDashboard.jsx
import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import SidebarWidget from '@/Layouts/SidebarWidget';
import Graph from '@/components/Graph/Graph'; // Import the Graph component

const AdminDashboard = () => {
    return (
        <AdminLayout>
            <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Welcome to the Admin Dashboard
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
                This is the main dashboard area. Use the sidebar to navigate.
            </p>

            {/* Widgets */}
            <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-4">
                <SidebarWidget title="Users" count="1,234" icon="👤" />
                <SidebarWidget title="Revenue" count="$12,345" icon="💰" />
                <SidebarWidget title="Orders" count="56" icon="📦" />
                <SidebarWidget title="Feedback" count="89" icon="💬" />
            </div>

            {/* Graph Section */}
            <div className="mt-8 space-y-8">
                {/* Sales Overview Graph */}
                <div>
                    <Graph 
                        title="Sales Overview" 
                        description="Monthly sales performance for the current year."
                        data={{ /* Add data here */ }} 
                    />
                </div>

                {/* New Graph 1 - Example: Website Traffic */}
                <div>
                    <Graph 
                        title="Website Traffic"
                        description="Number of visitors over the last 6 months."
                        data={{ /* Add data here */ }} 
                    />
                </div>

                {/* New Graph 2 - Example: Conversion Rate */}
                <div>
                    <Graph 
                        title="Conversion Rate"
                        description="Conversion rate from visitors to customers."
                        data={{ /* Add data here */ }} 
                    />
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;

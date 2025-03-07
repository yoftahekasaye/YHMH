import React from "react";
import AdminLayout from "@/Layouts/AdminLayout"; // Corrected import path
import SidebarWidget from "@/Layouts/SidebarWidget"; // Corrected import path

const AdminDashboard = () => {
    return (
        <AdminLayout>
            <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Welcome to the Admin Dashboard
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
                This is the main dashboard area. Use the sidebar to navigate.
            </p>

            <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-4">
                <SidebarWidget title="Users" count="1,234" icon="👤" />
                <SidebarWidget title="Revenue" count="$12,345" icon="💰" />
                <SidebarWidget title="Orders" count="56" icon="📦" />
                <SidebarWidget title="Feedback" count="89" icon="💬" />
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;
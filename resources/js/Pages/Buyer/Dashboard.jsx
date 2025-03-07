import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


export default function BuyerDashboard() {
    return (
        <AuthenticatedLayout>
            <div className="p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold">Buyer Dashboard</h1>
                <p className="text-gray-600">Welcome to your Buyer Dashboard!</p>
            </div>
        </AuthenticatedLayout>
    );
}

import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function OwnerDashboard() {
    return (
        <AuthenticatedLayout>
            <div>
                <h1>OwnerDashboard</h1>
                <p>Welcome to the Owner Dashboard!</p>
            </div>
        </AuthenticatedLayout>
    );
}

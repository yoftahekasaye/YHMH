import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

const UpdateProfile = ({ user }) => {
    const { data, setData, post, processing, errors } = useForm({
        fname: user.fname,
        lname: user.lname,
        email: user.email,
    });

    const submitForm = (e) => {
        e.preventDefault();
        post(route('driver.update'), {
            onSuccess: () => {
                // Handle success (e.g., show a success message)
                console.log('Profile updated successfully!');
            },
            onError: () => {
                // Handle errors (e.g., show an error message)
                console.log('Failed to update profile.');
            },
        });
    };

    return (
        <div className="flex justify-center items-start min-h-screen pt-24 bg-gray-100">
            <div className="max-w-lg w-full bg-white shadow-xl rounded-xl p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Edit Profile</h1>

                <form onSubmit={submitForm} className="space-y-6">
                    {/* First Name */}
                    <div>
                        <label htmlFor="fname" className="block text-sm font-semibold text-gray-600">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="fname"
                            value={data.fname}
                            onChange={(e) => setData('fname', e.target.value)}
                            className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                            placeholder="Enter your first name"
                        />
                        {errors.fname && <p className="text-red-500 text-xs mt-1">{errors.fname}</p>}
                    </div>

                    {/* Last Name */}
                    <div>
                        <label htmlFor="lname" className="block text-sm font-semibold text-gray-600">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lname"
                            value={data.lname}
                            onChange={(e) => setData('lname', e.target.value)}
                            className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                            placeholder="Enter your last name"
                        />
                        {errors.lname && <p className="text-red-500 text-xs mt-1">{errors.lname}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition disabled:bg-gray-300"
                    >
                        {processing ? 'Saving...' : 'Save Changes'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
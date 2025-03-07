import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';

import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            email: data.email.trim(),
            password: data.password.trim(),
            remember: data.remember,
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Left Side: Informational Section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 px-6 py-12">
                    <div className="text-white text-center">
                        <h2 className="text-2xl font-semibold mb-4">Welcome Back!</h2>
                        <p className="text-sm">
                            We are more than just a company. Log in to access your personalized dashboard and explore new opportunities.
                        </p>
                    </div>
                </div>

                {/* Right Side: Login Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
                    <form onSubmit={submit} className="w-full max-w-md p-8 rounded-lg shadow-md space-y-6">
                        {status && (
                            <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
                        )}

                        {/* Email Input */}
                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                                aria-label="Email"
                            />
                            <InputError message={errors.email} className="mt-2 text-sm text-red-600" />
                        </div>

                        {/* Password Input */}
                        <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                                aria-label="Password"
                            />
                            <InputError message={errors.password} className="mt-2 text-sm text-red-600" />
                        </div>

                        {/* Remember Me and Forgot Password */}
                        <div className="flex items-center justify-between">
                            {/* Remember Me Checkbox */}
                            <div className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </div>

                            {/* Forgot Password Link */}
                            {canResetPassword && (
                                <div className="text-sm">
                                    <Link
                                        href={route('password.request')}
                                        className="text-gray-600 underline hover:text-gray-900"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="flex items-center justify-end">
                            <PrimaryButton className="px-6 py-2" disabled={processing}>
                                Log in
                            </PrimaryButton>
                        </div>

                        {/* Register Link */}
                        <div className="text-sm text-center mt-4">
                            <Link
                                href={route('register')}
                                className="text-gray-600 underline hover:text-gray-900"
                            >
                                Don't have an account? Register
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}

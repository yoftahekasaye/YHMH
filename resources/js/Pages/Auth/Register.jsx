import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        fname: '',
        lname: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onSuccess: () => {
                alert('Registration successful! Please check your email for verification.');
                reset();
            },
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Left Side: Informational Section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 px-6 py-12">
                    <div className="text-white text-center">
                        <h2 className="text-2xl font-semibold mb-4">Join Us Today!</h2>
                        <p className="text-sm">Sign up to access your personalized dashboard and explore new opportunities.</p>
                    </div>
                </div>

                {/* Right Side: Registration Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
                    <form onSubmit={submit} className="w-full max-w-md p-8 rounded-lg shadow-md space-y-6">
                        {/* First Name Input */}
                        <div>
                            <InputLabel htmlFor="fname" value="First Name" />
                            <TextInput
                                id="fname"
                                type="text"
                                name="fname"
                                value={data.fname}
                                className="mt-1 block w-full"
                                autoComplete="given-name"
                                isFocused={true}
                                onChange={(e) => setData('fname', e.target.value)}
                                aria-label="First Name"
                            />
                            <InputError message={errors.fname} className="mt-2 text-sm text-red-600" />
                        </div>

                        {/* Last Name Input */}
                        <div>
                            <InputLabel htmlFor="lname" value="Last Name" />
                            <TextInput
                                id="lname"
                                type="text"
                                name="lname"
                                value={data.lname}
                                className="mt-1 block w-full"
                                autoComplete="family-name"
                                onChange={(e) => setData('lname', e.target.value)}
                                aria-label="Last Name"
                            />
                            <InputError message={errors.lname} className="mt-2 text-sm text-red-600" />
                        </div>

                        {/* Email Input */}
                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="email"
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
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                aria-label="Password"
                            />
                            <InputError message={errors.password} className="mt-2 text-sm text-red-600" />
                        </div>

                        {/* Confirm Password Input */}
                        <div>
                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                aria-label="Confirm Password"
                            />
                            <InputError message={errors.password_confirmation} className="mt-2 text-sm text-red-600" />
                        </div>

                        {/* Submit Button */}
                        <div className="flex items-center justify-end">
                            <PrimaryButton className="w-full sm:w-auto" disabled={processing}>
                                Register
                            </PrimaryButton>
                        </div>

                        {/* Already Have an Account? */}
                        <div className="text-sm text-center mt-4">
                            <Link href={route('login')} className="text-gray-600 underline hover:text-gray-900">
                                Already have an account? Log in
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            {/* Main Container with 50% Width & 25% Height */}
            <div className="bg-white px-6 py-4 shadow-md rounded-lg flex flex-col items-center justify-center w-1/2 h-1/4">
                {/* Header with Logo */}
                <div className="text-center">
                    <img className="mx-auto w-20" src="/image/image1.jpg" alt="logo" />
                    <h4 className="mb-6 mt-2 text-xl font-semibold text-gray-900">
                        Yeluchin Machine Hub
                    </h4>
                </div>

                {/* Dynamic Content */}
                {children}
            </div>
        </div>
    );
}

import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterOption, setFilterOption] = useState('all');
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('hidden');
        document.getElementById('docs-card')?.classList.add('row-span-1');
        document.getElementById('docs-card-content')?.classList.add('flex-row');
        document.getElementById('background')?.classList.add('hidden');
    };

    // Function to fetch all data
    const fetchAllItems = async () => {
        try {
            const response = await fetch('/api/items'); // Ensure Laravel has this route
            const data = await response.json();
            setItems(data); // Update state with fetched items
            setFilteredItems(data); // Initialize filtered items
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Fetch data when filter option changes
    useEffect(() => {
        if (filterOption === 'all') {
            fetchAllItems();
        }
    }, [filterOption]);

    // Update filtered items based on search query
    useEffect(() => {
        const results = items.filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredItems(results);
    }, [searchQuery, items]);

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                    onError={handleImageError}
                    alt="Background"
                />
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        {/* Header Section */}
                        <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black shadow-md py-4 px-6 flex items-center justify-between">
                            {/* Logo */}
                            <div className="flex">
                                <svg
                                    className="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]"
                                    viewBox="0 0 62 65"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615..."
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>

{/* Search and Filter Container */}
<div className="flex items-center border-[4px] border-[#0D4D4F] rounded-md overflow-hidden">
    {/* Filter Dropdown */}
    <select
        className="px-3 py-2 bg-gray-100 text-sm focus:outline-none"
        value={filterOption}
        onChange={(e) => setFilterOption(e.target.value)}
    >
        <option value="all">All</option>
        <option value="articles">Articles</option>
        <option value="tutorials">Tutorials</option>
        <option value="videos">Videos</option>
    </select>

    {/* Search Input */}
    <input
        type="text"
        placeholder="Search "
        className="px-4 py-2 w-[650px] text-sm focus:outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
    />
</div>




                            {/* Authentication Links */}
                            <div className="flex">
                                {auth?.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="text-sm text-gray-700 underline"
                                    >
                                        Dashboard
                                    </Link>
                                ) : 
                                (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="text-sm text-gray-700 underline hover:underline focus:underline"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="ml-4 text-sm text-gray-700 underline hover:underline focus:underline"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </header>

                        {/* Main Content */}
                        <main className="text-center">
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                                Welcome to Laravel {laravelVersion}
                            </h1>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                Running on PHP {phpVersion}
                            </p>

                            {/* Display Filtered Items */}
                            {filterOption === 'all' && (
                                <div className="mt-6">
                                    <h2 className="text-xl font-semibold">Search Results</h2>
                                    <ul className="mt-3 space-y-2">
                                        {filteredItems.length > 0 ? (
                                            filteredItems.map((item, index) => (
                                                <li key={index} className="text-gray-700 dark:text-gray-300">
                                                    {item.title}
                                                </li>
                                            ))
                                        ) : (
                                            <p>No items match your search.</p>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}

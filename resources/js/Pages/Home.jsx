import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero_Above/Hero";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import CarList from "../Components/CarList/CarList";
import Testimonial from "../Components/Testimonial/Testimonial";
import AppStoreBanner from "../Components/AppStoreBanner/AppStoreBanner";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

export default function Home({ auth }) {
    // Manage theme state
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    // Function to toggle theme
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    // Apply theme when component mounts
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            document.body.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
            document.body.classList.remove("dark");
        }
    }, [theme]);

    // Initialize AOS animations
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        Aos.refresh();
    }, []);

    return (
        <>
            <Head title="Home" />
            <Navbar auth={auth} theme={theme} setTheme={setTheme} />

            <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <main className="mt-6">
                            <Hero />
                            <About theme={theme} />
                            <Services />
                            <CarList />
                            <Testimonial />
                            <AppStoreBanner />
                            <Contact />
                            <Footer theme={theme} />
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}

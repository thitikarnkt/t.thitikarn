import { Link } from "react-router-dom";

export default function Navbar() {
    return (
            <nav className="flex justify-between items-center px-20 py-5 sticky left-0 top-0 z-1 bg-black text-white">
                <ul>
                    <li className="text-2xl font-bold"><Link to="/">T.</Link></li>
                </ul>
                <ul className="flex justify-end gap-x-10">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/work">Work</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/resume">Resume</Link>
                    </li>
                </ul>
            </nav>
    )
}


/*
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled down
      setIsScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex justify-between items-center py-5 sticky left-0 top-0 z-1 bg-black text-white transition-opacity duration-300">
        <ul>
            <li className={`${isScrolled ? "font-bold text-2xl " : "font-bold text-6xl"}`}><Link to="/">T.</Link></li>
        </ul>
        <ul className={`flex justify-end gap-x-10 ${isScrolled ? "opacity-100 " : "opacity-0 pointer-events-none"}`}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/work">Work</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/resume">Resume</Link>
            </li>
        </ul>
    </nav>
)
};


export default Navbar;
*/
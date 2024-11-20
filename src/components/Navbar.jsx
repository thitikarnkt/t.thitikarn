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
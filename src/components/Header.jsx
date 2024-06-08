import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">
                    <Link to="/" className="hover:text-gray-300">My Website</Link>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link className="hover:text-gray-300" to="/">Home</Link></li>
                        <li><Link className="hover:text-gray-300" to="/contact">Contact</Link></li>
                        <li><Link className="hover:text-gray-300" to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

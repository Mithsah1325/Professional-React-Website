import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 My Website</p>
                <div className="mt-2">
                    <a href="https://facebook.com" className="mx-2 hover:text-gray-400">Facebook</a>
                    <a href="https://twitter.com" className="mx-2 hover:text-gray-400">Twitter</a>
                    <a href="https://instagram.com" className="mx-2 hover:text-gray-400">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

//https://images.pexels.com/photos/17400783/pexels-photo-17400783/free-photo-of-a-bridge-over-a-grassy-field-with-a-city-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1

import React from 'react';

const Home = () => {
    return (
        <div className="container mx-auto p-4 text-center">
            <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('https://images.pexels.com/photos/17400783/pexels-photo-17400783/free-photo-of-a-bridge-over-a-grassy-field-with-a-city-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
                <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-5xl text-white font-serif mb-4">Welcome to My Website</h2>
                        <p className="text-xl text-white mb-4">We offer the best services in the industry.</p>
                        <button className="bg-secondary text-white px-6 py-3 rounded-full hover:bg-yellow-600">Learn More</button>
                    </div>
                </div>
            </div>
            <section className="mt-12">
                <h2 className="text-3xl font-bold mb-6">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img src="https://images.pexels.com/photos/25255204/pexels-photo-25255204/free-photo-of-red-scooter-on-amalfi-coast.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Service 1" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Service 1</h3>
                        <p className="text-gray-700">Description of service 1.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img src="https://images.pexels.com/photos/19936067/pexels-photo-19936067/free-photo-of-woman-sitting-on-rock-with-clouds-below-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Service 2" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Service 2</h3>
                        <p className="text-gray-700">Description of service 2.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img src="https://images.pexels.com/photos/15130402/pexels-photo-15130402/free-photo-of-model-in-a-long-white-evening-dress-sitting-in-a-rock-cut-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Service 3" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Service 3</h3>
                        <p className="text-gray-700">Description of service 3.</p>
                    </div>
                </div>
            </section>
            <section className="mt-12">
                <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-700 mb-4">"This company is amazing! They provided top-notch services and I couldn't be happier."</p>
                        <p className="font-bold">- Happy Customer</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-700 mb-4">"Highly recommended. Professional and reliable, they exceeded my expectations."</p>
                        <p className="font-bold">- Satisfied Client</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

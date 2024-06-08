import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto p-4 text-center">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <div className="mb-4">
                <p>We are a company dedicated to providing the best services in the industry. Our team is composed of experienced professionals who are passionate about their work.</p>
                <div className='flex justify-center'>
                  <img className="mt-4 rounded " src="https://images.pexels.com/photos/20763187/pexels-photo-20763187/free-photo-of-a-photo-of-the-ocean-with-waves-crashing-on-the-rocks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About Us" />
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p>Our mission is to deliver exceptional service and value to our clients through innovative solutions and dedicated teamwork.</p>
            </div>
            <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p>Our vision is to be the leading provider of quality services in the industry, known for our commitment to excellence and customer satisfaction.</p>
            </div>
        </div>
    );
};

export default About;

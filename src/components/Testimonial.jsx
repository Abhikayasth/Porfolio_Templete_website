import React from 'react';
import { Element } from 'react-scroll';
import img from './img/Hero_background.png';

const testimonials = [
    {
        name: 'XYZ',
        testimonial: 'This is a testimonial. ',
        rating: 5,
        image: img // Use the imported img variable
    },
    {
        name: 'ABC',
        testimonial: 'This is another testimonial. ',
        rating: 4,
        image: img // Use the imported img variable
    },
    // Add more testimonials as needed
];

function Testimonial() {
    return (
      <Element name="testimonials">
        <section className="bg-black text-white py-20 pl-3% pr-3% md:px-20 border-t-2 border-b-2 border-green-500 box-border transform transition-all duration-500 hover:scale-105">
            <p className="text-green-500 text-4xl mb-10 hover:underline hover:text-green-500">Testimonial</p>
            <h2 className="text-4xl mb-10 text-yellow-500 hover:underline hover:text-green-500">Happy Words From Happy Customers</h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((item, index) => (
                    <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full mx-auto mb-4"/>
                            <blockquote className="italic mb-2 hover:text-green-500">"{item.testimonial}"</blockquote>
                            <div className="flex justify-center mb-4">
                                {[...Array(item.rating)].map((star, i) => (
                                    <span key={i} className="text-yellow-500">★</span>
                                ))}
                            </div>
                            <p className="font-bold hover:text-green-500">{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
      </Element>
    );
}

export default Testimonial;

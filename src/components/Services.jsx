import React from 'react';
import { Element } from 'react-scroll';

const services = [
    {
        number: '01',
        name: 'Frontend',
        description: 'Making Best Forntend Design',
        detail: 'I provide best frontend design for your website with the use of react.js and also tailwind css...',
    },
    {
        number: '02',
        name: 'Backend',
        description: 'Currently working on backend',
        detail: 'I provide basic backend for your website because still i working on my backend skill,, but i am perfectly able to working with node,express js and also able to working with mongodb.....',
    },
    // Add more services as needed
];

function Services() {
    return (
        <Element name="services">
            <section className="bg-black text-white py-20 px-4 sm:px-10 md:px-20 border-t-2 border-b-2 border-green-500 box-border transform transition-all duration-500 hover:scale-105">
                <h2 className="text-yellow-500 text-4xl mb-10 hover:underline hover:text-green-500">Services That I Provide</h2>
                <h3 className="text-4xl mb-10 hover:underline hover:text-green-500">My Special Service For Your Business Development</h3>
                <div className="flex flex-col space-y-10">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-center justify-between border-b border-green-500 pb-10">
                            <div>
                                <p className="text-yellow-500">{service.number}</p>
                                <h3 className="text-2xl mb-2 hover:underline hover:text-green-500">{service.name}</h3>
                                <p className="text-xl hover:underline hover:text-green-500">{service.description}</p>
                                <p>{service.detail}</p>
                            </div>
                            <svg className="w-6 h-6 text-yellow-500 mt-4 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </div>
                    ))}
                </div>
            </section>
        </Element>
    );
}

export default Services;

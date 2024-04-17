import React from 'react';
import { Element } from 'react-scroll';

const timelineData = [
    {
        year: '2022',
        event: 'Started learning web development',
    },
    {
        year: '2022',
        event: 'At the end of this year i will Built my first full-stack application',
    },
    // Add more timeline events as needed
];

function Timeline() {
    return (
        <Element name="timeline">
            <section className="bg-black text-white py-20 px-4 sm:px-10 md:px-20 border-t-2 border-b-2 border-green-500 box-border transform transition-all duration-500 hover:scale-105">
                <p className="text-green-500 text-4xl mb-10 hover:underline hover:text-green-500">Timeline</p>
                <ul className="space-y-10">
                    {timelineData.map((item, index) => (
                        <li key={index} className="mb-10 border-b border-green-500 pb-10">
                            <h3 className="text-2xl mb-2 hover:underline hover:text-green-500">{item.year}</h3>
                            <p className="hover:underline hover:text-green-500">{item.event}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </Element>
    );
}

export default Timeline;

import React from 'react';
import { Element } from 'react-scroll';

const skills = [
    'Frontend Development',
    'Backend Development',
    'HTML5 & CSS3',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'RESTful APIs',
    'Git & GitHub',
    'Responsive Design',
    'Web Accessibility',
    'SEO',
];

function Skills() {
    return (
        <Element name="skills">
            <section className="bg-black text-white py-20 px-10 md:px-20 relative transition-all duration-500 ease-in-out transform scale-100 hover:scale-105 rounded-md border-t-2 border-b-2 border-green-500">
                <div className="z-10">
                    <h2 className="text-green-500 text-4xl mb-10 hover:underline hover:text-green-500 transition-colors duration-200">Skills</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {skills.map((skill, index) => (
                            <li key={index} className="bg-white text-blue-500 py-2 px-4 rounded transition-all duration-500 ease-in-out transform scale-100 hover:scale-105">
                                <button className="w-full h-full text-left transition-colors duration-200 hover:bg-green-500 hover:text-white">
                                    {skill}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </Element>
    );
}

export default Skills;

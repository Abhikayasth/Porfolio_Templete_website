import React from 'react';
import { Element } from 'react-scroll';
import img from './img/Project1.jpg';
import img2 from './img/Project2.jpg';  

const projects = [
    {
        name: 'Web Application',
        description: 'Educational website',
        imageUrl: img,
        link: 'https://www.educational-website.com',
    },
    {
        name: 'Web Application',
        description: 'Study-Sphere website',
        imageUrl: img2,
        link: 'https://www.study-sphere-website.com',
    },
];

function Projects() {
    return (
        <Element name="projects">
            <section className="bg-black text-white py-20 px-4 sm:px-10 md:px-20 text-left relative transition-all duration-500 ease-in-out transform scale-100 hover:scale-105 rounded-md border-t-2 border-b-2 border-green-500">
                <h1 className="text-green-500 text-4xl mb-10 pl-4 hover:underline hover:text-green-500 transition-colors duration-200">Projects</h1>
                <h2 className="text-yellow-500 text-4xl mb-10 pl-4 hover:underline hover:text-green-500 transition-colors duration-200">Look At My Portfolio And Give Me Your Feedback</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-yellow-500 p-10 transition-all duration-500 ease-in-out transform scale-100 hover:scale-105 rounded-md border-2 border-white hover:border-green-500">
                            <h3 className="text-2xl mb-2 text-black hover:underline hover:text-green-500 transition-colors duration-200">{project.description}</h3>
                            <p className="mb-2 text-black hover:underline hover:text-green-500 transition-colors duration-200">{project.name}</p>
                            <img src={project.imageUrl} alt={project.description} className="mx-auto mb-4 transition-all duration-500 ease-in-out transform scale-100 hover:scale-175"/>
                            <a href={project.link} className="text-black hover:underline">Complete Project</a>
                        </div>
                    ))}
                </div>
                <div className="mb-10 pl-4 bg-transparent text-white py-10 px-10 md:px-20 relative transition-all duration-500 ease-in-out transform scale-100 hover:scale-105 rounded-md border-2 border-white hover:border-green-500">
                    <p className="text-green-500 text-4xl mb-10 hover:underline hover:text-green-500 transition-colors duration-200">Need a Project?</p>
                    <h2 className="text-green-500 text-4xl mb-10 hover:underline hover:text-green-500 transition-colors duration-200">Let's Work Together. Fixed A Meeting</h2>
                    <div className="flex justify-start items-center mt-4">
                        <div className="mr-4">
                            <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2a2 2 0 00-2 2v4h-4V4a2 2 0 00-2-2 2 2 0 00-2 2v4H4a2 2 0 00-2 2v4h16v-4a2 2 0 00-2-2h-4V4a2 2 0 012-2z"></path></svg>
                            <span className="align-middle">xyz123@gmail.com</span>
                        </div>
                        <div>
                            <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A2 2 0 012 15.382V8.618a2 2 0 011.553-1.894L9 4m0 16v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6"></path></svg>
                            <span className="align-middle">India, Gujarat</span>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
}

export default Projects;

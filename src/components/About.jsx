import React, { useState } from 'react';
import { Element } from 'react-scroll';

function About() {
    const [selectedSection, setSelectedSection] = useState('ABOUT');

    const handleButtonClick = (section) => {
        setSelectedSection(section);
    };

    return (
        <Element name="about">
            <section className="bg-black text-white py-20 px-4 sm:px-10 md:px-20 relative transition-all duration-500 ease-in-out transform scale-100 hover:scale-105 rounded-md">
                <div className="z-10">
                    <h2 className="text-green-500 text-4xl mb-10 hover:underline hover:text-green-500 transition-colors duration-200">Abhi Kayasth</h2>
                    <p className="text-xl mb-4 hover:underline hover:text-green-500 transition-colors duration-200">Mern Stack Developer</p>
                
                    <div className="flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
                        <button onClick={() => handleButtonClick('ABOUT')} className="bg-transparent border-2 border-white hover:border-green-500 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200">
                            ABOUT
                        </button>
                        <button onClick={() => handleButtonClick('EXPERIENCE')} className="bg-transparent border-2 border-white hover:border-green-500 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200">
                            EXPERIENCE
                        </button>
                        <button onClick={() => handleButtonClick('EDUCATION')} className="bg-transparent border-2 border-white hover:border-green-500 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200">
                            EDUCATION
                        </button>
                        <button onClick={() => handleButtonClick('SKILLS')} className="bg-transparent border-2 border-white hover:border-green-500 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200">
                            SKILLS
                        </button>
                    </div>
                    <div className="mt-10 transition-all duration-500 ease-in-out transform translate-x-0">
                        {selectedSection === 'ABOUT' && <div className="p-4 bg-transparent border-2 border-white hover:border-green-500 text-white rounded-md transition-colors duration-200"><p>I am a MERN stack developer with a passion for creating web applications that provide a great user experience. I enjoy working with JavaScript, React, Node.js, and MongoDB, and I'm always eager to learn new technologies and improve my skills.</p></div>}
                        {selectedSection === 'EXPERIENCE' && <div className="p-4 bg-transparent border-2 border-white hover:border-green-500 text-white rounded-md transition-colors duration-200"><p>I have worked on several projects, developing full-stack web applications using the MERN stack. I have experience in designing and implementing APIs, managing databases, and developing user interfaces.</p></div>}
                        {selectedSection === 'EDUCATION' && <div className="p-4 bg-transparent border-2 border-white hover:border-green-500 text-white rounded-md transition-colors duration-200"><p>I have a Bachelor's degree in Computer Science and have completed several online courses and certifications in web development and the MERN stack.</p></div>}
                        {selectedSection === 'SKILLS' && <div className="p-4 bg-transparent border-2 border-white hover:border-green-500 text-white rounded-md transition-colors duration-200"><p>I have strong skills in JavaScript, React, Node.js, and MongoDB. I also have experience with Express.js, Redux, HTML, CSS, and Git. I am proficient in developing RESTful APIs and have a good understanding of database management.</p></div>}
                    </div>
                </div>
            </section>
        </Element>
    );
}

export default About;

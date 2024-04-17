import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const navLinks = [
  { name: 'Hero', path: 'hero' },
  { name: 'About', path: 'about' },
  { name: 'Skills', path: 'skills' },
  { name: 'Projects', path: 'projects' },
  { name: 'Services', path: 'services' },
  { name: 'Timeline', path: 'timeline' },
  { name: 'Testimonial', path: 'testimonial' },
  { name: 'Contact', path: 'contact' },
];

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-black text-white py-3 px-4 sm:px-8 md:px-16">
            <nav className="flex justify-between items-center">
                <div className="font-bold text-lg">Abhi</div>
                <div className={` ${isOpen ? 'block' : 'hidden'} sm:block`}>
                    <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-4 md:space-x-8 justify-center">
                        {navLinks.map((link, index) => (
                            <li key={index} className="cursor-pointer relative group">
                                <ScrollLink 
                                    to={link.path} 
                                    smooth={true} 
                                    duration={500}
                                    className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                                >
                                    {link.name}
                                </ScrollLink>
                                <div className="absolute left-0 bottom-0 h-1 w-full bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out"></div>
                            </li>
                        ))}
                    </ul>
                </div>
                <ScrollLink 
                    to="contact" 
                    smooth={true} 
                    duration={500}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                    <span>Let's Talk</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </ScrollLink>
                <div className="sm:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;

import React, { useState, useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import img from './img/Hero_background.png';

function PopupMessage({ showPopup }) {
    if (!showPopup) return null;
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white bg-opacity-20 text-white p-4 w-1/2 h-1/2 flex items-center justify-center rounded-lg">
                <p className="text-2xl font-bold">
                    For a better experience of this site, please open in desktop mode.
                </p>
            </div>
        </div>
    );
}


function Hero() {
    const [showMenu, setShowMenu] = useState(false);
    const [text, setText] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const textRef = useRef();

    const handleButtonClick = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const words = ['Mern Stack Developer'];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';

        (function type() {
            if (count === words.length) {
                count = 0;
            }
            currentText = words[count];
            letter = currentText.slice(0, ++index);

            setText(letter);
            if (letter.length === currentText.length) {
                count++;
                index = 0;
            }
            setTimeout(type, 400);
        })();
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (textRef.current && !textRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [textRef]);

    // Detect if the website is opened on a mobile device
    useEffect(() => {
        if (window.innerWidth <= 768) {
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
            }, 2000);
        }
    }, []);

    return (
        <Element name="hero">
            <PopupMessage showPopup={showPopup} />
            <div className="relative h-screen">
                <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${img})`, filter: 'blur(8px)' }}></div>
                <div className="bg-black bg-opacity-50 text-white h-full flex items-center justify-center text-center" ref={textRef}>
                    <div className="absolute top-0 left-0 p-8">
                        <p className="text-gray-400">Phone No  :-  64485XXXXX6</p>
                    </div>
                    <div className="absolute top-0 right-0 p-8">
                        <button onClick={handleButtonClick} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                            IMPORTANT LINKS
                        </button>
                        {showMenu && (
                            <div className="mt-2 py-2 w-48 bg-gray-800 text-white rounded-lg shadow-xl">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Facebook</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Twitter</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Instagram</a>
                                {/* Add more social media links as needed */}
                            </div>
                        )}
                    </div>
                    <div className="z-10">
                        <h1 className="text-green-500 text-6xl mb-4">{text}</h1>
                        <p className="text-xl">Currently Available For Freelance Worldwide</p>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default Hero;

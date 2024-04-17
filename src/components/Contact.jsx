import React from 'react';
import { Element, animateScroll as scroll } from 'react-scroll';
import axios from 'axios';

function Contact() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const message = e.target.elements.message.value;

        axios.post('http://localhost:3001/send', { name, email, message })
            .then((result) => {
                console.log(result.data);
            }, (error) => {
                console.log(error);
            });
        e.target.reset();
    };

    return (
        <Element name="contact">
            <section className="bg-black text-white py-20 px-4 sm:px-10 md:px-20 border-t-2 border-b-2 border-green-500 box-border transform transition-all duration-500 hover:scale-105">
                <h2 className="text-yellow-500 text-4xl mb-10 hover:underline hover:text-green-500">Get In Touch</h2>
                <form className="space-y-4" onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Name" className="p-2 w-full bg-gray-700 rounded" />
                    <input type="email" name="email" placeholder="Email" className="p-2 w-full bg-gray-700 rounded" />
                    <textarea name="message" placeholder="Message" className="p-2 w-full h-32 bg-gray-700 rounded"></textarea>
                    <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded">Submit</button>
                </form>
            </section>

            {/* Footer Component */}
            <footer className="bg-black text-white p-10 text-center border-t-2 border-green-500">
                <p className="mb-4 hover:text-green-500">Abhi Kayasth  - MERN stack developer</p>
                <p className="mb-4 hover:text-green-500">India, Gujrat</p>
                {/* Social Media Links */}
                {/* ... */}
                <button onClick={scrollToTop} className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded-full fixed bottom-4 right-4">
                    ↑
                </button>
            </footer>
        </Element>
    );
}

export default Contact;

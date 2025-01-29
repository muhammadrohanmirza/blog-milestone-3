import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mypic from '../../../app/public/mypic.jpg';

const About = () => {
  return (
    <div className="about flex flex-col md:flex-row items-center bg-white p-8 md:p-16">
      {/* Left Section for Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image  
        src={mypic}
        width={800} height={500}
       // Replace this with your image path
          alt="Rohan mirza"
          className="rounded-md h-3/4 w-3/4"
        />
      </div>
      {/* Right Section for Content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">ABOUT ME</h1>
        <h2 className="text-xl text-purple-600 font-semibold mb-4">Rohan Mirza - Developer</h2>
        <p className="text-gray-600 mb-6">
        I'm Muhammad Rohan Mirza! I'm a Web Developer & Graphic Desigher based in Pakistan. I'm passionate about creating elegant and efficient solutions that seamlessly integrate user-friendly experiences. I've built websites leveraging cutting-edge technologies to drive innovation and enhance business processes.
        </p>
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <Link href="#">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-behance"></i>
            </div>
          </Link>
          <Link href="#">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-dribbble"></i>
            </div>
          </Link>
          <Link href="#">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-twitter"></i>
            </div>
          </Link>
          <Link href="#">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-instagram"></i>
            </div>
          </Link>
          <Link href="#">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-linkedin"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
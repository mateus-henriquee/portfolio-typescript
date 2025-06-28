import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
import FadeInSection from '@/components/animation/FadeInSection'; 

function AboutSection() {
  return (
    <section className="py-24 px-6 bg-gray-900 text-white" id="about">
      <div className="max-w-4xl mx-auto text-center">

        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Us</h2>
        </FadeInSection>

        <FadeInSection>
          <p className="text-gray-300 mb-10 leading-relaxed">
            Somos desenvolvedores apaixonados por tecnologia apaixonados por tecnologia apaixonados por tecnologia apaixonados por tecnologia apaixonados por tecnologia apaixonados por tecnologia apaixonados por tecnologia apaixonados por tecnologia apaixonados por tecnologia 
            apaixonados por tecnologia apaixonados por tecnologia apaixonados por tecnologia apaixonados por tecnologia apaixonados por tecnologia
          </p>
        </FadeInSection>

        <FadeInSection>
          <h3 className="text-2xl font-semibold mb-6">Skills</h3>
        </FadeInSection>

        <FadeInSection>
          <div className="flex flex-wrap justify-center gap-4 text-blue-300 text-lg">
            <span className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
              <FaHtml5 /> HTML
            </span>
            <span className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
              <FaCss3Alt /> CSS
            </span>
            <span className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
              <FaJs /> JavaScript
            </span>
            <span className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
              <FaReact /> React
            </span>
            <span className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
              <SiTailwindcss /> Tailwind CSS
            </span>
            <span className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
              <FaNodeJs /> Node.js
            </span>
            <span className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
              <FaPython /> Python
            </span>
            <span className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
              <SiMongodb /> MongoDB
            </span>
          </div>
        </FadeInSection>

      </div>
    </section>
  );
}

export default AboutSection;

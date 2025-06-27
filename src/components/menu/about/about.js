import React from 'react';

function AboutSection() {
  return (
    <section className="py-24 px-6 bg-gray-900 text-white" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Us</h2>

        <p className="text-gray-300 mb-10 leading-relaxed">
          Somos desenvolvedores apaixonados por tecnologia apaixonados por tecnologia apaixonados por tecnologia apaixonados por tecnologia apaixonados por tecnologia apaixonados por tecnologia apaixonados por tecnologia apaixonados por tecnologia apaixonados por tecnologia 
          apaixonados por tecnologia apaixonados por tecnologiaapaixonados por tecnologiaapaixonados por tecnologia apaixonados por tecnologia
        </p>

        <h3 className="text-2xl font-semibold mb-6">Skills</h3>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-gray-700 text-sm px-4 py-2 rounded-full">HTML</span>
          <span className="bg-gray-700 text-sm px-4 py-2 rounded-full">CSS</span>
          <span className="bg-gray-700 text-sm px-4 py-2 rounded-full">JavaScript</span>
          <span className="bg-gray-700 text-sm px-4 py-2 rounded-full">React</span>
          <span className="bg-gray-700 text-sm px-4 py-2 rounded-full">Tailwind CSS</span>
          <span className="bg-gray-700 text-sm px-4 py-2 rounded-full">Node.js</span>
          <span className="bg-gray-700 text-sm px-4 py-2 rounded-full">Python</span>
          <span className="bg-gray-700 text-sm px-4 py-2 rounded-full">MongoDB</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import React from 'react';

const PortfolioMain = () => {
  return (
    <main className="py-24 px-8 bg-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl font-bold text-gray-100 mb-4">Mateus Henrique e Leonardo</h1>
          <h2 className="text-2xl font-normal text-gray-400 mb-6">
            Frontend Developer | UI/UX Designer
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Apaixonados por tecnologia Apaixonados por tecnologia Apaixonados por tecnologia Apaixonados por tecnologia Apaixonados por tecnologia Apaixonados por tecnologia Apaixonados por tecnologia 
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
            View My Work
          </button>
        </div>

        <div className="flex-1 flex justify-end">
            <img src="https://www.pngarts.com/files/4/Lightning-McQueen-Disney-Cars-Free-PNG-Image.png" className='w-full max-w-md h-auto rounded-lg shadow-md'></img>
        </div>
      </div>
    </main>
  );
};

export default PortfolioMain;
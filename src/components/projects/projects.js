import React from 'react';
import { FaGithub } from 'react-icons/fa';
import FadeInSection from '../animation/FadeInSection';

const ProjectsSection = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <FadeInSection>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Recent Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out transform group">
            <div className="absolute inset-0 bg-gray-800 bg-opacity-40 backdrop-blur-md border border-gray-400 border-opacity-20 group-hover:border-opacity-40 transition-all duration-300" />
            <div className="relative z-10 h-full flex flex-col">
              <img
                src="https://cdn.prod.website-files.com/6615907cf43a722162c27a58/673664be897ebf44d12e61fb_showing-cart-trolley-shopping-online-sign-graphic.webp"
                alt="E-commerce"
                className="w-full h-40 object-cover border-b border-gray-400 border-opacity-20"
              />
              <div className="p-5 flex-grow">
                <h3 className="text-xl font-semibold text-white mb-3">E-commerce</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-700 bg-opacity-70 text-gray-200 text-xs font-medium rounded-full">React</span>
                  <span className="px-2 py-1 bg-gray-700 bg-opacity-70 text-gray-200 text-xs font-medium rounded-full">Node.js</span>
                  <span className="px-2 py-1 bg-gray-700 bg-opacity-70 text-gray-200 text-xs font-medium rounded-full">MongoDB</span>
                </div>
                <p className="text-gray-300 mb-5 text-sm">Plataforma completa com carrinho, checkout e painel admin.</p>
              </div>
              <div className="px-5 pb-5">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#24292F] text-white rounded-lg hover:bg-[#2d3339] transition-colors text-sm w-full justify-center"
                >
                  <FaGithub className="mr-2" />
                  Ver Código
                </a>
              </div>
            </div>
          </div>

    

          <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out transform group">
            <div className="absolute inset-0 bg-gray-800 bg-opacity-40 backdrop-blur-md border border-gray-400 border-opacity-20 group-hover:border-opacity-40 transition-all duration-300" />
            <div className="relative z-10 h-full flex flex-col">
              <img
                src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero_ToDo_960x615_2x_1_RE3HTxG?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain"
                alt="Task App"
                className="w-full h-40 object-cover border-b border-gray-400 border-opacity-20"
              />
              <div className="p-5 flex-grow">
                <h3 className="text-xl font-semibold text-white mb-3">Task App</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-700 bg-opacity-70 text-gray-200 text-xs font-medium rounded-full">React</span>
                  <span className="px-2 py-1 bg-gray-700 bg-opacity-70 text-gray-200 text-xs font-medium rounded-full">TypeScript</span>
                  <span className="px-2 py-1 bg-gray-700 bg-opacity-70 text-gray-200 text-xs font-medium rounded-full">Firebase</span>
                </div>
                <p className="text-gray-300 mb-5 text-sm">Gerenciador de tarefas com drag-and-drop e notificações.</p>
              </div>
              <div className="px-5 pb-5">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#24292F] text-white rounded-lg hover:bg-[#2d3339] transition-colors text-sm w-full justify-center"
                >
                  <FaGithub className="mr-2" />
                  Ver Código
                </a>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out transform group">
            <div className="absolute inset-0 bg-gray-800 bg-opacity-40 backdrop-blur-md border border-gray-400 border-opacity-20 group-hover:border-opacity-40 transition-all duration-300" />
            <div className="relative z-10 h-full flex flex-col">
              <img
                src="https://cdn.dribbble.com/userupload/9745588/file/original-75ee0ad604cd78d220b32090ce8499e4.png?resize=752x&vertical=center"
                alt="Weather App"
                className="w-full h-40 object-cover border-b border-gray-400 border-opacity-20"
              />
              <div className="p-5 flex-grow">
                <h3 className="text-xl font-semibold text-white mb-3">Weather App</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-700 bg-opacity-70 text-gray-200 text-xs font-medium rounded-full">JavaScript</span>
                  <span className="px-2 py-1 bg-gray-700 bg-opacity-70 text-gray-200 text-xs font-medium rounded-full">CSS</span>
                  <span className="px-2 py-1 bg-gray-700 bg-opacity-70 text-gray-200 text-xs font-medium rounded-full">API REST</span>
                </div>
                <p className="text-gray-300 mb-5 text-sm">Previsão do tempo com API em tempo real e gráficos.</p>
              </div>
              <div className="px-5 pb-5">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#24292F] text-white rounded-lg hover:bg-[#2d3339] transition-colors text-sm w-full justify-center"
                >
                  <FaGithub className="mr-2" />
                  Ver Código
                </a>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out transform group">
            <div className="absolute inset-0 bg-gray-800 bg-opacity-40 backdrop-blur-md border border-gray-400 border-opacity-20 group-hover:border-opacity-40 transition-all duration-300" />
            <div className="relative z-10 h-full flex flex-col">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/young-man-running-outdoors-in-morning-royalty-free-image-1717693611.jpg"
                alt="Fitness Tracker"
                className="w-full h-40 object-cover border-b border-gray-400 border-opacity-20"
              />
              <div className="p-5 flex-grow">
                <h3 className="text-xl font-semibold text-white mb-3">Fitness Tracker</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-700 bg-opacity-70 text-gray-200 text-xs font-medium rounded-full">React Native</span>
                  <span className="px-2 py-1 bg-gray-700 bg-opacity-70 text-gray-200 text-xs font-medium rounded-full">Firebase</span>
                  <span className="px-2 py-1 bg-gray-700 bg-opacity-70 text-gray-200 text-xs font-medium rounded-full">Redux</span>
                </div>
                <p className="text-gray-300 mb-5 text-sm">Acompanhamento de atividades físicas e progresso.</p>
              </div>
              <div className="px-5 pb-5">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#24292F] text-white rounded-lg hover:bg-[#2d3339] transition-colors text-sm w-full justify-center"
                >
                  <FaGithub className="mr-2" />
                  Ver Código
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      </FadeInSection>
    </section>
  );
};

export default ProjectsSection;

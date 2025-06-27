import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce",
      image: "https://cdn.prod.website-files.com/6615907cf43a722162c27a58/673664be897ebf44d12e61fb_showing-cart-trolley-shopping-online-sign-graphic.webp",
      description: "Plataforma completa com carrinho, checkout e painel admin.",
      languages: ["React", "Node.js", "MongoDB"],
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task App",
      image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero_ToDo_960x615_2x_1_RE3HTxG?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain",
      description: "Gerenciador de tarefas com drag-and-drop e notificações.",
      languages: ["React", "TypeScript", "Firebase"],
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather App",
      image: "https://via.placeholder.com/400x250/374151/FFFFFF?text=Weather",
      description: "Previsão do tempo com API em tempo real e gráficos.",
      languages: ["JavaScript", "CSS", "API REST"],
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Fitness Tracker",
      image: "https://via.placeholder.com/400x250/374151/FFFFFF?text=Fitness",
      description: "Acompanhamento de atividades físicas e progresso.",
      languages: ["React Native", "Firebase", "Redux"],
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Projetos Recentes</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out transform group"
            >
        
              <div className="absolute inset-0 bg-gray-800 bg-opacity-40 backdrop-blur-md border border-gray-400 border-opacity-20 group-hover:border-opacity-40 transition-all duration-300" />
              
              <div className="relative z-10 h-full flex flex-col">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-40 object-cover border-b border-gray-400 border-opacity-20"
                />
                
                <div className="p-5 flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.languages.map((lang, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-gray-700 bg-opacity-70 text-gray-200 text-xs font-medium rounded-full"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-5 text-sm">{project.description}</p>
                </div>
                
                <div className="px-5 pb-5">
                  <a
                    href={project.githubUrl}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
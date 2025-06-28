import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import FadeInSection from "@/components/animation/FadeInSection"; 

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <FadeInSection>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Finanças e Gestão Pública</a></li>
              <li><a href="#" className="hover:underline">Assistência Social</a></li>
              <li><a href="#" className="hover:underline">Justiça e Segurança</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Notícias</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Meio Ambiente</a></li>
              <li><a href="#" className="hover:underline">Viagens e Turismo</a></li>
              <li><a href="#" className="hover:underline">Educação e Pesquisa</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Canais</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Cultura e Esportes</a></li>
              <li><a href="#" className="hover:underline">Transporte</a></li>
              <li><a href="#" className="hover:underline">Agricultura</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-300 text-2xl">
                <FaWhatsapp />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-2xl">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          &copy; 2025 Leonardo Yudi e Mateus Henrique. Todos os direitos reservados.
        </div>
      </FadeInSection>
    </footer>
  );
}

import React from "react";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Equipe from "./components/Equipe";
import Servicos from "./components/Servicos";
import Contato from "./components/Contato";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div>
      <Hero />
      <Sobre />
      <Servicos />
      <Equipe />
      <Contato />
      <a
        href="https://wa.me/553191892151"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-black text-white flex items-center px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={24} className="mr-2" />
        Fale conosco
      </a>
    </div>
  );
}

export default App;

import React from "react";
import Teste from "./images/fotoFamilia.png";

const Sobre = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg w-full max-w-4xl mx-8 flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-center p-8">
          <p className="text-black text-4xl font-bold">SOBRE</p>
          <p>Nosso escritório conta com 10 anos de experiência na área cível, atuando nos ramos do Direito de Família, Sucessões, Infância e Juventude, Direito Internacional Privado e Contratual.</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <img className="w-full h-auto" src={Teste} alt="Ícone" />
        </div>
      </div>
    </div>
  );
}

export default Sobre;

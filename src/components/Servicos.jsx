import React from "react";
import Icone1 from "./images/direito-fiduciario-e-imobiliario.png";
import Icone2 from "./images/familia.png";
import Icone3 from "./images/direitos-humanos.png";

const Servicos = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-top bg-no-repeat background-image2 py-8">
      <div className="mb-8">
        <p className="text-black text-4xl font-bold">SERVIÇOS</p>
      </div>
      <div className="container mx-auto p-8 flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="bg-white shadow-lg overflow-hidden max-w-xs w-full md:w-1/3 flex flex-col items-center p-6">
          <img className="w-24 h-24 object-contain mb-4" src={Icone1} alt="Ícone 2" />
          <p className="text-xl font-bold">Direito das sucessões</p>
          <ul className="mt-2 text-gray-600 text-center list-inside">
            <li>Testamentos</li>
            <li>Inventários judiciais e extrajudiciais</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg overflow-hidden max-w-xs w-full md:w-1/3 flex flex-col items-center p-6">
          <img className="w-24 h-24 object-contain mb-4" src={Icone2} alt="Ícone 1" />
          <p className="text-xl font-bold">Direito das famílias</p>
          <ul className="mt-2 text-gray-600 text-center list-inside">
            <li>Divórcio</li>
            <li>Guarda</li>
            <li>Alimentos</li>
            <li>Partilha de Bens</li>
            <li>Reconhecimento e Dissolução de União Estável</li>
            <li>Pacto antenupcial</li>
            <li>Contratos de namoro</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg overflow-hidden max-w-xs w-full md:w-1/3 flex flex-col items-center p-6">
          <img className="w-24 h-24 object-contain mb-4" src={Icone3} alt="Ícone 3" />
          <p className="text-xl font-bold">Direito internacional</p>
          <ul className="mt-2 text-gray-600 text-center list-inside">
            <li>Homologação de sentença estrangeira</li>
            <li>Divórcio envolvendo países distintos</li>
            <li>Abdução/sequestro internacional de crianças</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Servicos;

import React from "react";
import Teste from "./images/fotoadv.png";
import { 
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Contato = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-[#666]">
      <div className="w-full md:w-1/2 flex justify-center">
        <img className="w-full h-auto object-cover" src={Teste} alt="Imagem de Contato" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col p-8 space-y-4">
        <p className="text-[#BDC3D1] text-left text-4xl font-serif">Contate-nos</p>
        <p className="text-white text-left">Envie-nos uma mensagem e entraremos em contato com você em breve.</p>
        <div className="flex md:w-[75%] my-6 text-white">
          <a href="https://www.linkedin.com/in/nath%C3%A1lia-de-campos-valadares-124462113/details/experience/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/matosovaladaresadv?igsh=MTd4cWYyZG1ib3dkdg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://wa.me/553191892151" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} />
          </a>   
        </div>
        <p className="text-white text-left">Email: contato.matosovaladares@gmail.com</p>
      </div>
    </div>
  );
}

export default Contato;

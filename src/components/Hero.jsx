import React from "react";
import Icone from "./images/icone07.jpg";

const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-top bg-no-repeat relative background-image">
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      <div className="absolute bg-white shadow-lg max-w-96 max-h-72 w-4/5 md:w-auto md:h-auto p-8 flex flex-col items-center justify-center">
        <p className="text-[#9b9b9b] text-4xl font-serif">MATOSO</p>
        <p className="text-[#9b9b9b] text-4xl font-serif">VALADARES</p>
        <p className="text-[#ACB0BC]">ADVOCACIA & CONSULTORIA</p>
        <img className="w-[120px]" src={Icone} alt="/" />
      </div>
    </div>
  );
}

export default Hero;

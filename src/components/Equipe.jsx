import React from "react";
import Ana from "./images/fotoAna.jpg";
import Nathalia from "./images/fotoNathalia.jpg";

const Equipe = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8">
      <div className="mb-8 text-center">
        <p className="text-black text-4xl font-bold">EQUIPE</p>
      </div>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 p-8 m-8">
        <div className="bg-white shadow-lg overflow-hidden max-w-xs flex flex-col items-center">
          <img className="w-full h-60 object-cover object-top" src={Ana} alt="Ana Matoso" />
          <div className="p-4">
            <h2 className="text-2xl font-bold">ANA MATOSO MORATO DIAS</h2>
            <p className="mt-2 text-gray-600">
              Bacharel em Direito, Pós-Graduada em Direito de Família, Pós-Graduanda em Direito Civil e Empresarial,
              Certificada em Direito Internacional Comparado pela Universidade Paris Panthèon (Sorbonne), Integrante da
              Comissão Nacional de Adoção e da Comissão Nacional de Direito e Psicanálise do Instituto Brasileiro de
              Direito de Família (IBDFAM) e Membro da Comissão de Direito da Criança e Adolescente da OAB/MG.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg overflow-hidden max-w-xs flex flex-col items-center">
          <img className="w-full h-60 object-cover object-top" src={Nathalia} alt="Nathalia de Campos" />
          <div className="p-4">
            <h2 className="text-2xl font-bold">NATHÁLIA DE CAMPOS VALADARES</h2>
            <p className="mt-2 text-gray-600">
              Bacharel em Direito, Pós-Graduada em Direito Civil, Mestra cum laude em Direito Privado, Coordenadora do
              Curso de Pós-Graduação em Direito de Família e Sucessões do CEDIN, Autora do livro Famílias Coparentais e
              de diversos artigos jurídicos, Associada ao IBDFAM (Instituto Brasileiro de Direito de Família) e
              Integrante da Comissão de Direito e Tecnologia/Alienação Parental e Agronegócio do IBDFAM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Equipe;

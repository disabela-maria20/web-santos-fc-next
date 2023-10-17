/* eslint-disable @next/next/no-img-element */
import { useModal } from "@/context/Modal";
import React from "react";

const Modal = () => {
  const { isModalOpen, closeModal } = useModal();

  return isModalOpen ? (
    <article
      className={`bg-black bg-opacity-40 fixed top-0 px-15  left-0 z-[9999] flex items-center justify-center w-full h-[100vh]
        ${isModalOpen ? "block" : "hidden"}
      `}
    >
      <div className="bg-white rounded-2xl sm:max-w-screen-lg  relative lg:max-h-[600px] ">
        <div className="absolute -top-15 -right-15">
          <div
            className="transition-transform hover:scale-110 cursor-pointer bg-black text-white p-15 rounded-full w-45 h-45 flex justify-center items-center"
            onClick={closeModal}
          >
            X
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-15 items-center overflow-auto">
          <div className="hidden lg:block max-h-full">
            <img
              src="/img/silhueta-cinza.png"
              alt="silhueta"
              className="max-h-[600px]"
            />
          </div>
          <div className="p-15 overflow-y-auto">
            <h4 className="text-black uppercase text-left text-38 font-light lg:text-55 leading-title">
              <strong className="block font-extrabold">Wladimir </strong>
              Mattos
            </h4>
            <div className="max-h-[50vh] lg:max-h-[300px] overflow-y-auto">
              <p className="pt-13">Querido santista,</p>
              <p className="pt-13">Sou Wladimir Mattos, pré-candidato a presidente do nosso Santos Futebol Clube.</p>
              <p className="pt-13">Antes de tudo, quero saudar a todos os torcedores e associados e dizer que faço parte dessa paixão.</p>
              <p className="pt-13">Tenho 58 anos, formado em Administração de Empresas e com licenciatura em História.</p>
              <p className="pt-13">Sou casado, pai de três filhas e um filho. Uma família maravilhosa!</p>
              <p className="pt-13">Como empresário, atuo no setor portuário desde 1980.</p>
              <p className="pt-13">No futebol, atuei como gestor de dois clubes na Baixada, tanto no departamento profissional quanto na base, por meio de uma empresa da qual me retirei para concorrer à presidência do Santos FC.</p>
              <p className="pt-13">Fui duas vezes eleito conselheiro do SFC, nas eleições de 2014 e 2017, mandatos em que tive atuação incisiva na defesa dos interesses de nosso clube.</p>
              <p className="pt-13">Um grupo de santistas me desafiou a liderar um Projeto de Reconstrução do Santos FC. Gente jovem reunida com os mais experientes, o que me deu a certeza de estar em boa companhia.</p>
              <p className="pt-13">Gosto de desafios. Gosto de trabalhar em equipe.</p>
              <p className="pt-13">Nossos objetivos, ideias e premissas se transformaram em Plano de Governo, que mostrarei a seguir no documento Compromissos com o SFC.</p>
              <p className="pt-13">Durante a campanha, que será lançada oficialmente em 23 de outubro, discorreremos e debateremos item por item, de forma profunda e participativa.</p>
              <p className="pt-13">Estou confiante de que, com sua ajuda, vamos recolocar o Santos no caminho das vitórias. Convido a todos vocês para me acompanhar no maior desafio da minha vida.</p>
            </div>
          </div>
          <div className="p-15 grid grid-cols-2 gap-8 md:grid-cols-1">
            <img src="/img/foto1.png" alt="silhueta"/>
            <img src="/img/foto2.png" alt="silhueta" />
          </div>
        </div>
      </div>
    </article>
  ) : null;
};

export default Modal;

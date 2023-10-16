/* eslint-disable @next/next/no-img-element */
import { useModal } from "@/context/Modal";
import React from "react";

const Modal = () => {
  const { isModalOpen, closeModal } = useModal();

  return isModalOpen ? (
    <article
      className={`bg-black bg-opacity-40 fixed top-0 px-15  left-0 z-50 flex items-center justify-center w-full h-[100vh]
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
            <div className=" max-h-[150px] lg:max-h-[300px] overflow-y-auto">
              <p className="mb-13">Permitam que me apresente. </p>

              <p className="mb-13">
                Sou Wladimir Mattos, pré-candidato a presidente do Santos
                Futebol Clube.
              </p>
              <p className="mb-13">
                Antes de tudo, quero saudar todos os torcedores e associados de
                nosso clube e dizer que faço parte dessa paixão.
              </p>
              <p className="mb-13">
                Tenho 58 anos, formado em Administração de Empresas e com
                licenciatura em História.
              </p>
              <p className="mb-13">
                Sou casado, pai de três filhas e um filho. Uma família
                maravilhosa.
              </p>
              <p className="mb-13">
                Como empresário atuo no setor portuário desde 1980.
              </p>
              <p className="mb-13">
                No futebol, atuei como gestor de dois clubes na Baixada
                Santista, tanto no departamento profissional quanto na base,
                através de uma empresa em que me retirei da Sociedade para
                concorrer a presidência do Santos FC.
              </p>
              <p className="mb-13">
                Fui duas vezes eleito conselheiro do SFC nas eleições de 2014 e
                2017, onde tive atuação incisiva na defesa dos interesses de
                nosso clube.
              </p>
              <p className="mb-13">
                Um grupo de santistas me desafiou para liderar um Projeto de
                Reconstrução do Santos FC. Gente jovem reunida com os mais
                experientes, o que me deu a certeza de estar em boa companhia.
              </p>
              <p className="mb-13">
                Gosto de desafios. Sei como trabalhar em equipe.
              </p>
              <p className="mb-13">
                Nossos objetivos, ideias e premissas se transformaram em Plano
                de Governo que mostrarei a seguir através de Compromissos com o
                SFC.
              </p>
              <p className="mb-13">
                Durante a campanha, que será lançada oficialmente em 23 de
                outubro, iremos discorrendo e debatendo item por item nas mais
                diversas formas.
              </p>
              <p className="mb-13">
                Temos quatro grandes assuntos e inúmeros outros não menos
                importantes, para mostrar.
              </p>
            </div>
          </div>
          <div className="p-15 lg:pr-18 ">
            <img src="/img/foto1.png" alt="silhueta" className="mb-18" />
            <img src="/img/foto2.png" alt="silhueta" />
          </div>
        </div>
      </div>
    </article>
  ) : null;
};

export default Modal;

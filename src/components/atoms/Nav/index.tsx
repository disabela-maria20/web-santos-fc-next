import React from "react";
import { INavProps, TypeLink } from "./type";
import Link from "next/link";
import { Modal } from "@/components/molecules";
import { useModal } from "@/context/Modal";

const Nav = ({ open }: INavProps): JSX.Element => {
  const link: TypeLink = [
    { name: "Objetivo", id: "#objetivo" },
    // { name: "Santos", id: "#santos" },
    // { name: "Pilares", id: "#pilares" },
    // { name: "Metodologia", id: "#metodologia" },
    // { name: "Contato", id: "#contato" },
  ];
  const { openModal } = useModal();

  const handleOpenModal = () => {
    const modalContent = <div>Conteúdo do Modal</div>;
    openModal(modalContent);
  };
  return (
    <>
      <nav className="z-50 transition-[all] transform ease-in-out duration-200 left-0 top-79 md:top-0 md:w-auto absolute md:relative w-full">
        <ul
          className={`nav origin-center ${
            open ? "-translate-x-full md:-translate-x-0" : "-translate-x-0"
          }`}
        >
          {link.map(({ name, id }) => (
            <li className="py-22  md:py-0" key={id}>
              <Link href={`/${id}`}>
                <span className="text-white font-bold text-15 xxl:text-18 md:px-26 hover:text-yellow-100 transition-all font-roboto">
                  {name}
                </span>
              </Link>
            </li>
          ))}
          {/*<li className="py-22  md:py-0">
            <Link href="/galeria">
              <span className="text-white font-bold text-15 xxl:text-18 md:px-26 hover:text-yellow-100 transition-all font-roboto">
                Galeria
              </span>
            </Link>
          </li> */}

          <li className="py-22  md:py-0" onClick={handleOpenModal}>
            <span className="text-white font-bold text-15 xxl:text-18 md:px-26 hover:text-yellow-100 transition-all font-roboto">
              Biografia
            </span>
          </li>
          <li className="py-22  md:py-0">
            <Link href="/#contato">
              <span className="text-white font-bold text-15 xxl:text-18 md:px-26 hover:text-yellow-100 transition-all font-roboto">
                Contato
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

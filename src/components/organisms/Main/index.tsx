/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { SvgMetodologia, Title } from "@/components/atoms";
import { Modal, Slide as Pilares } from "@/components/molecules";
import { useModal } from "@/context/Modal";
import { useEffect, useRef, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

type TypeItem = {
  id: number;
  icon?: string;
  title: string;
  paragraph: string;
}[];

const Main = () => {
  const item: TypeItem = [
    {
      id: 0,
      icon: "presentation.png",
      title: "Título 1",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      icon: "layers.png",
      title: "Título 2",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      icon: "to-do-list.png",
      title: "Título 3",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const list: TypeItem = [
    {
      id: 0,
      title: "Título",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. ",
    },
    {
      id: 1,
      title: "Título",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. ",
    },
    {
      id: 2,
      title: "Título",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. ",
    },
  ];
  const listSVG: TypeItem = [
    {
      id: 0,
      title: "Lorem ipsum 1",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      id: 1,
      title: "Lorem ipsum 2",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      id: 2,
      title: "Lorem ipsum 3",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      id: 3,
      title: "Lorem ipsum 4",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      id: 4,
      title: "Lorem ipsum 5",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];

  const [listMetodo, setListMetodo] = useState<any>({
    id: 0,
    title: "Lorem ipsum 1",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  });

  const svg = useRef<SVGAElement | null>(null);

  useEffect(() => {
    const { current } = svg;
    const circles = current?.querySelectorAll("circle");
    function handleClick(svg: SVGCircleElement, index: number) {
      setListMetodo(listSVG[index]);
      circles?.forEach((item) => {
        item.classList.remove("active");
      });
      svg.classList.add("active");
    }

    if (current) {
      circles?.forEach((item, index) => {
        item.addEventListener("click", () => handleClick(item, index));
      });

      return () => {
        circles?.forEach((item, index) => {
          item.removeEventListener("click", () => handleClick(item, index));
        });
      };
    }
  }, []);

  const { openModal } = useModal();

  const handleOpenModal = () => {
    const modalContent = <div>Conteúdo do Modal</div>;
    openModal(modalContent);
  };
  return (
    <>
      <main className="pt-136 overflow-x-hidden">
        <div className="container m-auto px-15" id="objetivo">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-45 mb-45 md:mb-95">
            <div className="lg:col-span-5">
              <>
                <section className="bg-black rounded-3xl relative h-full">
                  <img src="/img/silhueta.png" alt="" className=" w-full h-full object-contain" />

                  <div className="absolute bottom-0 w-full py-38">
                    <h4 className="text-white uppercase text-center text-38 font-light lg:text-45 xxl:text-55 leading-title">
                      <strong className="block font-extrabold">
                        Wladimir{" "}
                      </strong>
                      Mattos
                    </h4>
                    <div className="flex justify-center items-center ">
                      <img
                        src="/img/pointed-star.png"
                        alt="Estrela"
                        className="p-15"
                      />
                      <button
                        onClick={handleOpenModal}
                        className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-black font-semibold px-18 py-8 rounded-2xl uppercase transition-colors  hover:from-yellow-200 hover:to-yellow-100"
                      >
                        Saiba mais
                      </button>
                      <img
                        src="/img/pointed-star.png"
                        alt="Estrela"
                        className="p-15"
                      />
                    </div>
                  </div>
                </section>
              </>
            </div>
            <div className="lg:col-span-7">
              <>
                <Title>objetivo</Title>
                <p className="mt-15 ">
                  No momento em que se aproximam as eleições no Santos Futebol
                  Clube, nós da chapa JUNTOS PELO SANTOS assumimos o compromisso
                  com a transparência, responsabilidade financeira,
                  profissionalismo, vanguarda na gestão e geração de resultados
                  esportivos e, sobretudo com o torcedor e o associado.
                </p>
                <p className="mt-15 ">
                  Este plano surgiu em conversas e reuniões com associados de
                  diversos grupos de santistas que contribuíram com ideias e
                  sugestões, baseadas em experiencias profissionais e também na
                  participação ativa na vida do clube. Elas refletem aquilo que
                  acreditamos, um modelo de gestão baseado em uma estrutura
                  profissional que será responsável pela execução das
                  prioridades estabelecidas e que se traduzam em resultados
                  esportivos que devolvam ao Santos Futebol Clube, a condição de
                  protagonista do futebol brasileiro e mundial, sem comprometer
                  as finanças do clube.
                </p>

                <section>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-38 mt-45 md:mt-66">
                    {item.map(({ id, icon, paragraph, title }) => (
                      <div key={id}>
                        <img
                          src={`/img/${icon}`}
                          alt={title}
                          className="w-full h-95 object-contain mb-22"
                        />
                        <h3 className="text-center lg:text-left">{title}</h3>
                        <p className="text-15">{paragraph}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            </div>
          </div>
        </div>

         {/* <section className='bg-santos bg-cover py-66 lg:py-95'>
        <div className="container m-auto px-15">
          <Title>Santos</Title>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-45'>
            <div className='lg:col-span-5'>
              {list.map(({ id, title, paragraph }) => (
                <div key={id} className='mt-22 square'>
                  <h3 className='relative'>
                    <span></span>  {title}
                  </h3>
                  <p>{paragraph}</p>
                </div>
              ))}
            </div>
            <div className='lg:col-span-7'>
              <img src="/img/grafico.png" alt="Grafico Ilustrativo" className='block m-auto' />
            </div>
          </div>
        </div>
      </section>  */}
         <>
          <section className="overflow-x-hidden" id="pilares">
            <div className="container m-auto px-15 py-66">
              <Title>Pilares</Title>
              <Pilares />
            </div>
          </section>
        </>

        <section id="metodologia" className="overflow-x-hidden">
          <div className="container m-auto px-15">
            <Title>Metodologia</Title>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-45">
              <div className="lg:col-span-6 ">
                <>
                  <SvgMetodologia item={svg} />
                </>
              </div>
              <div className="lg:col-span-6">
                <>
                  <h3>{listMetodo.title}</h3>
                  <p className="mb-66">{listMetodo.paragraph}</p>
                </>
              </div>
            </div>
          </div>
        </section>
        <section className="container m-auto px-15">
          <>
            <Title>
              <div className="text-center mt-38 md:mt-79">instagram</div>
            </Title>
            <div className="grid gap-22 md:grid-cols-5 mt-8 mb-38 md:mb-114">
              <img
                src="/img/elenco-santos-classico-palmeiras.webp"
                alt=""
                className="object-cover h-[250px]"
              />
              <img
                src="/img/elenco-santos-classico-palmeiras.webp"
                alt=""
                className="object-cover h-[250px]"
              />
              <img
                src="/img/elenco-santos-classico-palmeiras.webp"
                alt=""
                className="object-cover h-[250px]"
              />
              <img
                src="/img/elenco-santos-classico-palmeiras.webp"
                alt=""
                className="object-cover h-[250px]"
              />
              <img
                src="/img/elenco-santos-classico-palmeiras.webp"
                alt=""
                className="object-cover h-[250px]"
              />
            </div>
          </>
        </section> 
      </main>
    </>
  );
};

export default Main;

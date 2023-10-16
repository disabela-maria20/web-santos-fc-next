/* eslint-disable @next/next/no-img-element */
import { MarqueeIn } from "@/components/atoms";
import { Menu } from "@/components/molecules";
import { Slide } from "react-awesome-reveal";

const Header = (): JSX.Element => {
  return (
    <>
      <div className="bg-header bg-fixed bg-cover h-[45vh] md:h-[70vh] overflow-hidden">
        <Menu />
        <section className="container m-auto px-15">
          <>
            <div className="grid md:grid-cols-2">
              <h1 className="text-center block uppercase md:mt-38 leading-title text-white text-31 sm:text-45 md:text-55  xxl:text-79 pt-45 md:pt-66">
                <span className="font-bold block">
                  juntos <span className=" font-light">pelo</span>{" "}
                </span>
                <span className="block font-light">santosfc</span>
              </h1>
              <div>
                <img
                  src="/img/WladimirMattos.png"
                  alt="WladimirMattos"
                  className="hidden md:block "
                />
              </div>
            </div>
          </>
        </section>
      </div>
      <MarqueeIn />
      <div className="m-auto relative w-full flex justify-center">
        <img
          src="/img/logo.png"
          alt="logo do santos"
          width={200}
          height={200}
          className="absolute top-[-130px] z-10"
        />
      </div>
    </>
  );
};

export default Header;

import Marquee from "react-fast-marquee";

const MarqueeIn = () => {
  const frase: string = 'O CAMINHO DE VOLTA ÀS CONQUISTAS'
  const divs = [] as any[]

  for (let index = 0; index < 10; index++) {
    divs.push(
      <div key={index} className={`${index % 2 === 0 ? "font-bold" : "font-light"} px-8 inline-block`}>{frase}</div>
    )
  }

  return (
    <Marquee>
      <section className='flex py-10 bg-yellow-100 text-15 whitespace-nowrap overflow-hidden w-full relative'>
        {divs}
      </section>
    </Marquee>

  );
}

export default MarqueeIn

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let scrollContainer = scrollContainerRef.current;
      let section = sectionRef.current;

      gsap.to(scrollContainer, {
        x: () => -(scrollContainer.scrollWidth - section.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section, // O trigger é a própria seção
          start: "top top",
          end: () => `+=${scrollContainer.scrollWidth - section.clientWidth}`, // Define o fim corretamente
          scrub: 1, // Suaviza a rolagem
          pin: true, // Mantém a seção fixa enquanto o usuário rola
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert(); // Limpa a animação ao desmontar
  }, []);

  return (
    <div >
      <section ref={sectionRef} id="portfolio" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute h-screen w-screen bg-[url(/bg_portfolio.svg)] bg-cover bg-no-repeat"/>
        <h4 className="z-10 text-2xl sm:text-3xl lg:text-4xl font-semibold text-light my-8">
          Portfólio
        </h4>

        {/* Container de rolagem horizontal */}
        <div className="z-10 h-full w-full overflow-hidden mb-8">
          <div ref={scrollContainerRef} className="z-10 flex gap-6 h-full w-max">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={`z-10 min-h-[300px] min-w-[400px] bg-amber-200 ${
                    i % 2 === 0 ? "self-start" : "self-end"
                  }`}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;

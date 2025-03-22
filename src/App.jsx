import Button from "./components/button";
import Portfolio from "./container/portfolio";

function App() {
  return (
    <>
      <div
        id="hero"
        className="bg-[url(background/bg_hero.svg)] bg-no-repeat bg-cover lg:bg-contain "
      >
        {/* div para afastamento pois em outro elemento estava afastando o bg */}
        <div className="pb-4" />

        {/* header e nav */}
        <header>
          <div className="container mx-auto flex justify-between items-center h-22.5 px-3 lg:px-6 py-3">
            <div className="hidden xs:flex items-center w-1/3 space-x-2">
              <img src="gif/thomty.gif" alt="thomty pet" width={72} />
            </div>
            <nav className="bg-gray-bg h-full w-full flex justify-center items-center lg:space-x-8 space-x-2 rounded-3xl text-primary-600 p-2">
              <a
                href="#about"
                className="group relative flex justify-center items-center gap-2 hover:text-primary-base transition-all lg:text-base text-sm"
              >
                <span className="opacity-0 right-0 absolute h-3 w-3 border-2 rounded-xs rotate-45 group-hover:opacity-100 group-hover:right-12 transition-all" />
                Sobre
              </a>
              <a
                href="#skills"
                className="group relative flex justify-center items-center gap-2 hover:text-primary-base transition-all lg:text-base text-sm"
              >
                <span className="opacity-0 right-18 absolute h-3 w-3 border-2 rounded-xs rotate-45 group-hover:opacity-100 group-hover:right-29 transition-all" />
                Conhecimentos
              </a>
              <a
                href="#portfolio"
                className="group relative flex justify-center items-center gap-2 hover:text-primary-base transition-all lg:text-base text-sm"
              >
                <span className="opacity-0 right-4 absolute h-3 w-3 border-2 rounded-xs rotate-45 group-hover:opacity-100 group-hover:right-16 transition-all" />
                Projetos
              </a>
              <a
                href="#contact"
                className="group relative flex justify-center items-center gap-2 hover:text-primary-base transition-all lg:text-base text-sm"
              >
                <span className="opacity-0 right-4 absolute h-3 w-3 border-2 rounded-xs rotate-45 group-hover:opacity-100 group-hover:right-16 transition-all" />
                Contato
              </a>
            </nav>
          </div>
        </header>

        {/* Section de introdução */}
        <section
          id="hero"
          className="container mx-auto h-[65vh] md:h-[75vh] px-6 flex flex-col lg:flex-row items-center"
        >
          <div className="flex flex-col justify-end xs:justify-center h-2/3 lg:h-auto lg:w-1/2 text-center lg:text-left">
            <p className="whitespace-nowrap text-3xl md:text-4xl font-semibold text-light mb-2">
              Bem vindo à
            </p>
            <h1 className="whitespace-nowrap text-4xl md:text-7xl font-semibold text-light mb-2">
              Thom Gomes
            </h1>
            <h2 className="whitespace-nowrap text-2xl 2xs:text-3xl md:text-5xl font-semibold text-ots-base mb-6">
              Desenvolvedor Frontend
            </h2>
            <div className="flex flex-col lg:flex-row gap-6 justify-center lg:justify-start">
              <Button text="Download CV ⬇" />
              <Button text="Entrar em contato" type={2} border="2" />
            </div>
          </div>
          <div className="flex lg:justify-center lg:items-center lg:w-1/2 mt-16 sm:mt-0">
            <img
              src="gif/thom_art.gif"
              alt="thom animation art"
              className="rounded-full w-48 sm:w-64 lg:w-80"
            />
          </div>
        </section>
      </div>

      {/* Section de Sobre mim */}
      <section
        id="about"
        className="container mx-auto px-6 my-12 lg:my-6 flex flex-col items-center justify-center min-h-50 gap-6"
      >
        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark">
          Um pouco sobre mim
        </h4>
        <hr className="border-4 w-25 border-secundary-base" />
        <p className="text-lg text-dark md:w-1/2">
          Meu nome é Thomás Gomes, mas pode me chamar de Thom. Atuo como
          freelancer Frontend criando interfaces modernas e eficientes, focadas
          em performance, animações, responsividade e SEO. Atualmente, estou
          cursando Análise e Desenvolvimento de Sistemas.
        </p>
      </section>

      {/* Section de Conhecimentos */}
      <div className="bg-[url(background/bg_conhecimentos.svg)] bg-no-repeat bg-cover">
        <div className="" />
        <section
          id="skills"
          className="container mx-auto px-6 pt-28 pb-6 flex items-stretch justify-center gap-6 "
        >
          <div className="flex flex-col items-center justify-center lg:w-1/2 min-h-full">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-light">
              Conhecimentos
            </h4>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mt-6">
              <Button buttonClass={""} type={3} variant="skills" border={3}>
                <img
                  src="Vector.svg"
                  className="h-20 w-20 group-hover:scale-110 transition-all"
                />
              </Button>
              <Button buttonClass={""} type={3} variant="skills" border={3}>
                <img
                  src="Vector.svg"
                  className="h-20 w-20 group-hover:scale-110 transition-all"
                />
              </Button>
              <Button buttonClass={""} type={3} variant="skills" border={3}>
                <img
                  src="Vector.svg"
                  className="h-20 w-20 group-hover:scale-110 transition-all"
                />
              </Button>
              <Button buttonClass={""} type={3} variant="skills" border={3}>
                <img
                  src="Vector.svg"
                  className="h-20 w-20 group-hover:scale-110 transition-all"
                />
              </Button>
              <Button buttonClass={""} type={3} variant="skills" border={3}>
                <img
                  src="Vector.svg"
                  className="h-20 w-20 group-hover:scale-110 transition-all"
                />
              </Button>
              <Button buttonClass={""} type={3} variant="skills" border={3}>
                <img
                  src="Vector.svg"
                  className="h-20 w-20 group-hover:scale-110 transition-all"
                />
              </Button>
              <Button buttonClass={""} type={3} variant="skills" border={3}>
                <img
                  src="Vector.svg"
                  className="h-20 w-20 group-hover:scale-110 transition-all"
                />
              </Button>
              <Button buttonClass={""} type={3} variant="skills" border={3}>
                <img
                  src="Vector.svg"
                  className="h-20 w-20 group-hover:scale-110 transition-all"
                />
              </Button>
              <Button buttonClass={""} type={3} variant="skills" border={3}>
                <img
                  src="Vector.svg"
                  className="h-20 w-20 group-hover:scale-110 transition-all"
                />
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center w-1/2 min-h-full">
            <p className="text-lg text-light">
              Costumo trabalhar com React e Tailwind como minhas principais
              ferramentas de desenvolvimento, pois valorizo a eficiência, a
              modularidade e a produtividade que oferecem. A sintaxe
              simplificada do Tailwind, combinada à componentização do React, me
              permite criar projetos dinâmicos, elegantes e altamente
              responsivos, garantindo interfaces modernas, performáticas e
              adaptadas a diferentes dispositivos.
            </p>
          </div>
        </section>
      </div>

      {/* Section de Projetos/Portfolio */}
      <Portfolio />

      {/* section de Contato */}
      <section
        id="contact"
        className="container mx-auto my-10 flex flex-col justify-center items-center"
      >
        <p className="text-2xl font-semibold">
          Se interessou pelo meu trabalho?
        </p>
        <p className="text-4xl font-bold bg-gradient-to-b from-primary-base to-secundary-base bg-clip-text text-transparent">
          Entre em Contato Comigo
        </p>
        <div className="flex mt-6 gap-10">
          <a
            href="https://www.instagram.com/thom_gomes/"
            target="_blank"
            className="group flex flex-col justify-center items-center"
          >
            <img
              src="icon/' icon_instagram.svg"
              alt=""
              width={80}
              className="mb-2 group-hover:scale-115 transition-all"
            />
            <h6 className="text-sm text-gray-200 bg-gradient-to-b bg-clip-text group-hover:text-transparent group-hover:from-primary-base group-hover:to-secundary-base transition-all">
              @Thom_Gomes
            </h6>
          </a>
          <a
            href="https://github.com/Thomgomes"
            target="_blank"
            className="group flex flex-col justify-center items-center"
          >
            <img
              src="icon/' icon_github.svg"
              alt=""
              width={90}
              className="mb-2 group-hover:scale-115 transition-all"
            />
            <h6 className="text-sm text-gray-200 bg-gradient-to-b bg-clip-text group-hover:text-transparent group-hover:from-primary-base group-hover:to-secundary-base transition-all">
              Thomgomes
            </h6>
          </a>
          <a
            href="https://www.linkedin.com/in/thomás-gomes-796b8152/"
            target="_blank"
            className="group flex flex-col justify-center items-center"
          >
            <img
              src="icon/' icon_linkedin.svg"
              alt=""
              width={80}
              className="mb-2 group-hover:scale-115 transition-all"
            />
            <h6 className="text-sm text-gray-200 bg-gradient-to-b bg-clip-text group-hover:text-transparent group-hover:from-primary-base group-hover:to-secundary-base transition-all">
              Thomás Gomes
            </h6>
          </a>
        </div>
      </section>

      {/* footer */}
      <footer
        id="footer"
        className="w-screen bg-gradient-to-t from-primary-base to-secundary-base"
      >
        <div className="container mx-auto flex justify-between items-center py-6">
          <p className="text-light">
            Copyright © {new Date().getFullYear()}{" "}
            <a
              href="https://thom-dd-gomes.vercel.app"
              target="_blank"
              className="underline text-ots-base"
            >
              thom-dd-gomes
            </a>{" "}
            .Todos os direitos reservados.
          </p>
          <a href="#hero">
            <img src="gif/thomty.gif" alt="thomty pet" width={72} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;

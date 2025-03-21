import Button from "./components/button";

function App() {
  return (
    <>
      <div
        id="index"
        className="bg-[url(/fundo3.svg)] bg-no-repeat bg-cover lg:bg-contain "
      >
        {/* div para afastamento pois em outro elemento estava afastando o bg */}
        <div className="pb-4" />

        {/* header e nav */}
        <header>
          <div className="container mx-auto flex justify-between items-center h-22.5 px-3 lg:px-6 py-3">
            <div className="hidden xs:flex items-center w-1/3 space-x-2">
              <img src="thomty.gif" alt="thomty pet" width={72} />
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
              src="ThomGif.gif"
              alt="thomty pet"
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
        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark">Um pouco sobre mim</h4>
        <hr className="border-4 w-25 border-secyndary-base" />
        <p className="text-lg text-dark md:w-1/2">
          Meu nome é Thomás Gomes, mas pode me chamar de Thom. Atuo como
          freelancer Frontend criando interfaces modernas e eficientes, focadas
          em performance, animações, responsividade e SEO. Atualmente, estou
          cursando Análise e Desenvolvimento de Sistemas.
        </p>
      </section>
    </>
  );
}

export default App;

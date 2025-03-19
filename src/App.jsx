import Button from "./components/button";

function App() {
  return (
      <div
        id="index"
        className="bg-[url(/fundo3.svg)] bg-no-repeat bg-contain"
      >
        {/* div para afastamento pois em outro elemento estava afastando o bg */}
        <div className="pb-4" />

        {/* header e nav */}
        <header className="">
          <div className="container mx-auto flex justify-between items-center h-22.5 px-6 py-3">
            <div className="flex items-center w-1/3 space-x-2">
              <img src="thomty.gif" alt="thomty pet" width={72} />
            </div>
            <nav className="bg-gray-bg h-full w-full flex justify-center items-center space-x-8 rounded-3xl text-primary-600 ">
              <a
                href="#about"
                className="group relative flex justify-center items-center gap-2 hover:text-primary-base transition-all"
              >
                <span className="opacity-0 right-0 absolute h-3 w-3 border-2 rounded-xs rotate-45 group-hover:opacity-100 group-hover:right-12 transition-all" />
                Sobre
              </a>
              <a
                href="#skills"
                className="group relative flex justify-center items-center gap-2 hover:text-primary-base transition-all"
              >
                <span className="opacity-0 right-18 absolute h-3 w-3 border-2 rounded-xs rotate-45 group-hover:opacity-100 group-hover:right-29 transition-all" />
                Conhecimentos
              </a>
              <a
                href="#portfolio"
                className="group relative flex justify-center items-center gap-2 hover:text-primary-base transition-all"
              >
                <span className="opacity-0 right-4 absolute h-3 w-3 border-2 rounded-xs rotate-45 group-hover:opacity-100 group-hover:right-16 transition-all" />
                Projetos
              </a>
              <a
                href="#contact"
                className="group relative flex justify-center items-center gap-2 hover:text-primary-base transition-all"
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
          className="container mx-auto h-[75vh] py-6 flex flex-row px-6"
        >
          <div className="flex flex-col justify-center w-1/2">
            <p className="text-4xl font-bold text-light mb-2">Bem vindo á</p>
            <h1 className="text-7xl font-bold text-light mb-2">Thom Gomes</h1>
            <h2 className="text-5xl font-bold text-ots-base mb-6">
              Desenvolvedor Frontend
            </h2>
            <div className="flex gap-6 ">
              <Button
                buttonClass="bg-[#EAEAEG] color-red-500"
                text="Download CV ⬇"
              />
              <Button
                buttonClass="bg-[#EAEAEG] color-red-500"
                text="Entrar em contato"
                type={2}
                border="2"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2">
            <img
              src="ThomGif.gif"
              alt="thomty pet"
              className="rounded-full w-80"
            />
          </div>
        </section>
      </div>
  );
}

export default App;

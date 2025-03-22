import React from 'react'

function Portfolio() {
  return (
    <div className="bg-gradient-to-b from-primary-dark-600 via-primary-dark-600  to-secundary-base">
        <section
          id="portfolio"
          className="h-screen  px-6 pt-12 pb-6 flex flex-col items-center justify-center gap-6 "
        >
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-light">
            Portfólio
          </h4>
          <div className="flex h-full gap-6" id="horizontal-scroll">
            <div className="h-140 w-220 bg-amber-200 self-start"></div>
            <div className="h-140 w-220 bg-amber-200 self-end"></div>
            <div className="h-140 w-220 bg-amber-200 self-start"></div>
            <div className="h-140 w-220 bg-amber-200 self-end"></div>
            <div className="h-140 w-220 bg-amber-200 self-start"></div>
            <div className="h-140 w-220 bg-amber-200 self-end"></div>
            <div className="h-140 w-220 bg-amber-200 self-start"></div>
            <div className="h-140 w-220 bg-amber-200 self-end"></div>
            <div className="h-140 w-220 bg-amber-200 self-start"></div>
            <div className="h-140 w-220 bg-amber-200 self-end"></div>
          </div>
        </section>
      </div>
  )
}

export default Portfolio
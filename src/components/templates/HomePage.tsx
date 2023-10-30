"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CTA } from "@/src/components/templates/CTA";
import { Hero } from "@/src/components/templates/Hero";
import { Proposition } from "@/src/components/templates/Proposition";
import { Rating } from "@/src/components/templates/Rating";
import { Services } from "@/src/components/templates/Services";
import { Steps } from "@/src/components/templates/Steps";
import { Thematiques } from "@/src/components/templates/Thematiques";

export function Homepage({
  accueil,
  references,
  evals,
}: {
  accueil: any;
  references: any;
  evals: any;
}) {
  const animation = "zoom-in";

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <main className='w-full flex flex-col h-full'>
      <section
        className='bg-gradient-left border-t-2 border-[#23272F] border-opacity-10 h-screen flex items-center'
        data-aos={animation}
      >
        <Hero accueil={accueil} />
      </section>

      <section
        className='bg-gradient-right border-t-2 border-[#23272F] border-opacity-10 h-screen flex items-center w-full overflow-hidden'
        data-aos={animation}
      >
        <Proposition nosRef={references.results} />
      </section>

      <section
        className='bg-gradient-left border-t-2 border-[#23272F] border-opacity-10 h-screen flex items-center w-full overflow-hidden'
        data-aos={animation}
      >
        <Services />
      </section>

      <section
        className='bg-gradient-right border-t-2 border-[#23272F] border-opacity-10 h-screen flex items-center w-full overflow-hidden'
        data-aos={animation}
      >
        <Steps />
      </section>

      <section
        className='bg-[#2845AD] border-t-2 border-[#23272F] border-opacity-10 h-screen flex items-center w-full overflow-hidden'
        data-aos={animation}
      >
        <Thematiques />
      </section>

      <section
        className='bg-gradient-left border-t-2 border-[#23272F] border-opacity-10 h-screen flex items-center w-full overflow-hidden'
        data-aos={animation}
      >
        <Rating evals={evals.results} />
      </section>

      <section
        className='bg-gradient-right border-t-2 border-[#23272F] border-opacity-10 h-screen flex items-center w-full overflow-hidden'
        data-aos={animation}
      >
        <CTA />
      </section>
    </main>
  );
}

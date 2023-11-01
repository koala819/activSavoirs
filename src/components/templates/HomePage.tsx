"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CTA } from "@/src/components/molecules/CTA";
import { Hero } from "@/src/components/organisms/Hero";
import { Proposition } from "@/src/components/organisms/Proposition";
import { Rating } from "@/src/components/organisms/Rating";
import { Services } from "@/src/components/organisms/Services";
import { Steps } from "@/src/components/molecules/Steps";
import { Thematiques } from "@/src/components/molecules/Thematiques";

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
        className='bg-gradient-left border-t-2 border-[#23272F] border-opacity-10 sm:min-h-screen lg:h-screen'
        data-aos={animation}
      >
        <Hero accueil={accueil} />
      </section>

      <section
        className='bg-gradient-right border-t-2 border-[#23272F] border-opacity-10 sm:h-screen flex items-center w-full overflow-hidden'
        data-aos={animation}
      >
        <Proposition nosRef={references.results} />
      </section>

      <section
        className='bg-gradient-left border-t-2 border-[#23272F] border-opacity-10 sm:h-screen flex items-center w-full overflow-hidden'
        data-aos={animation}
      >
        <Services />
      </section>

      <section
        className='bg-gradient-right border-t-2 border-[#23272F] border-opacity-10 sm:h-screen flex items-center w-full overflow-hidden'
        data-aos={animation}
      >
        <Steps />
      </section>

      <section
        className='bg-blue-bg border-t-2 border-[#23272F] border-opacity-10 sm:min-h-screen flex items-center w-full overflow-hidden'
        data-aos={animation}
      >
        <Thematiques />
      </section>

      <section
        className='bg-gradient-left border-t-2 border-[#23272F] border-opacity-10 sm:h-screen flex items-center w-full overflow-hidden'
        data-aos={animation}
      >
        <Rating evals={evals.results} />
      </section>

      <section
        className='bg-gradient-right border-t-2 border-[#23272F] border-opacity-10 sm:h-screen flex items-center w-full overflow-hidden'
        data-aos={animation}
      >
        <CTA />
      </section>
    </main>
  );
}

"use client";
import { Thematique } from "@/src/components/atoms/Thematique";
import { thematiques } from "@/src/lib/thematiques";
import { useEffect, useState } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

function getWindowSize() {
  if (typeof window !== "undefined") {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
}

export function Thematiques() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      {windowSize && windowSize.innerWidth >= 1024 ? (
        <ParallaxBanner className='hidden lg:block aspect-[2/1]'>
          <ParallaxBannerLayer speed={80} scale={[0, 1, "easeOutBack"]}>
            <div className='absolute inset-0 flex items-center justify-center'>
              <section className='grid sm:grid-cols-3 gap-x-4 gap-y-4 pt-8 px-20 sm:px-8'>
                {thematiques.map((thematique, index) => (
                  <Thematique
                    key={index}
                    title={thematique.name}
                    icon={thematique.icon}
                  />
                ))}
              </section>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      ) : (
        <section className='grid sm:grid-cols-3 gap-x-4 gap-y-4 pt-8 px-20 sm:px-8'>
          {thematiques.map((thematique, index) => (
            <Thematique
              key={index}
              title={thematique.name}
              icon={thematique.icon}
            />
          ))}
        </section>
      )}
    </>
  );
}

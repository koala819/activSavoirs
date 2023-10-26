"use client";
import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Image from "next/image";
// import "@/src/styles/Test.module.css";

export function Test() {
  const parallax = useRef<IParallax>(null!);

  return (
    <div className='overflow-hidden'>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ backgroundColor: "#253237" }}
        />
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        />
        {/* <ParallaxLayer
          offset={3}
          speed={1}
          style={{ backgroundColor: "#000000" }}
        /> */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={`/01.jpg`}
            alt=''
            width={500}
            height={500}
            style={{ width: "20%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={"/02.jpg"}
            alt=''
            width={500}
            height={500}
            style={{ width: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <Image
            src={"/03.jpg"}
            alt=''
            width={500}
            height={500}
            style={{ width: "40%" }}
          />
        </ParallaxLayer>
        {/* <ParallaxLayer
          offset={3}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "end",
            width: "100vw",
            backgroundColor: "dark",
          }}
        >
          <Footer />
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}

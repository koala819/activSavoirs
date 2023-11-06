"use client";
import React, { useEffect } from "react";
import anime from "animejs";
import { Dix31Logo } from "@/src/components/atoms/Dix31Logo";

export function Test() {
  function animation() {
    anime
      .timeline({
        loop: true,
      })
      .add({
        targets: ".chevronGauche",
        opacity: 1,
        translateX: 200,
        translateY: 250,
        easing: "easeInExpo",
      })
      .add({
        targets: ".slash",
        opacity: 1,
        translateX: 205,
        translateY: 248,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "linear",
      })
      .add({
        targets: ".chevronDroite",
        opacity: 1,
        translateX: 242,
        translateY: 250,
        easing: "easeInExpo",
      })
      .add({
        targets: ".chevronDroite",
        translateX: 255,
        easing: "easeInExpo",
      })
      .add(
        {
          targets: ".slash",
          opacity: 0,
        },
        "-=600"
      )
      .add({
        targets: ".pinceau, .pinceauManche, .pinceauBrosse",
        opacity: 1,
        translateX: 111,
        translateY: 120,
        easing: "linear",
      })
      .add({
        targets: ".chevronGauche, .chevronDroite",
        opacity: 0,
      })
      .add(
        {
          targets: ".pinceau",
          scale: 0.4,
          translateX: 350,
          translateY: 200,
          rotate: "1turn",
          easing: "linear",
        },
        "-=600"
      )
      .add({
        targets: ".pinceau",
        translateX: 150,
        translateY: 200,
        easing: "linear",
      })
      .add(
        {
          targets: ".letters",
          translateX: 195,
          translateY: 270,
          scale: [14, 1],
          opacity: [0, 1],
          easing: "easeOutCirc",
        },
        "-=600"
      )
      .add(
        {
          targets: ".pinceau",
          translateX: 110,
          translateY: 225,
          easing: "linear",
        },
        "-=400"
      )
      .add(
        {
          targets: ".pinceau",
          translateX: 8,
          translateY: 225,
          easing: "linear",
        },
        "-=400"
      )
      .add(
        {
          targets: ".ligneBas",
          opacity: 1,
          direction: "reverse",
          delay: 500,
          easing: "linear",
        },
        "-=500"
      )
      .add(
        {
          targets: ".pinceau",
          translateX: 8,
          translateY: 8,
          easing: "linear",
        },
        "-=400"
      )
      .add(
        {
          targets: ".ligneGauche",
          opacity: 1,
          direction: "reverse",
          easing: "linear",
          delay: 500,
        },
        "-=500"
      )
      .add(
        {
          targets: ".pinceau",
          translateX: 353,
          translateY: 8,
          easing: "linear",
        },
        "-=400"
      )
      .add(
        {
          targets: ".ligneHaut",
          opacity: 1,
          delay: 500,
          easing: "linear",
        },
        "-=500"
      )
      .add(
        {
          targets: ".pinceau",
          translateX: 357,
          translateY: 114,
          easing: "linear",
        },
        "-=400"
      )
      .add(
        {
          targets: ".ligneDroite",
          opacity: 1,
          delay: 500,
          easing: "linear",
        },
        "-=500"
      )
      .add(
        {
          targets: ".pinceau",
          opacity: 0,
          easing: "linear",
        },
        "-=400"
      )
      .add(
        {
          targets: ".rectangle",
          opacity: 0.5,
          easing: "linear",
        },
        "-=400"
      )
      .add({
        targets: ".sousTitre",
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
      })
      .add({ duration: 5000 });
  }

  useEffect(() => {
    animation();
  }, []);

  return (
    <div className='flex flex-col w-full'>
      <div className='w-full flex justify-center items-center py-32'>
        <div className='h-[500px] w-[500px]'>
          <Dix31Logo />
        </div>
      </div>
    </div>
  );
}

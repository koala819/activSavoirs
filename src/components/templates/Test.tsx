import React, { useEffect } from "react";
import anime from "animejs";
import { Dix31Logo } from "@/src/components/atoms/Dix31Logo";

export function Test() {
  function animation() {
    anime({
      // targets: ".chevronGauche",
      // opacity: 1,
      // translateY: 50,
      // duration: 2000,
      // easing: "easeInExpo",
    });

    anime
      .timeline({
        duration: 1000,

        loop: false,
      })

      .add({
        targets: ".chevronGauche",
        opacity: 1,
        // duration: 500,
        easing: "easeInExpo",
      })
      .add({
        targets: ".slash",
        opacity: 1,
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: function (el, i) {
          return i * 250;
        },
      })
      .add({
        targets: ".chevronDroite",
        opacity: 1,
        translateX: 35,
        easing: "easeInExpo",
      })
      .add({
        targets: ".slash",
        opacity: 0,
      })
      .add({
        targets: ".chevronGauche",
        translateX: 0,
        translateY: 15,
        easing: "easeInExpo",
      })
      .add({
        targets: ".chevronDroite",
        translateX: 55,
        translateY: 15,
        easing: "easeInExpo",
      })
      .add({
        targets: ".pinceau-1, .pinceau-2",
        opacity: 1,
        strokeDashoffset: [anime.setDashoffset, 0],
        translateX: 25,
        // translateY: -8,
        delay: function (el, i) {
          return i * 250;
        },
      });
    // .add({
    //   targets: ".slash",
    //   translateX: 8,
    //   strokeWidth: "15px",
    // })
    // .add({
    //   targets: ".pointePinceau",
    //   opacity: 1,
    //   translateX: 24,
    //   translateY: 38,
    //   strokeDashoffset: [anime.setDashoffset, 0],
    //   delay: function (el, i) {
    //     return i * 250;
    //   },
    // });
  }

  useEffect(() => {
    animation();
  }, []);

  return (
    <div className='flex flex-col w-full'>
      <div className='w-full bg-blue-200 flex justify-center items-center pt-32'>
        <div className='p-5'>
          <Dix31Logo />
        </div>
      </div>
    </div>
  );
}

"use client";
import { RefProp } from "@/src/types/models";
import styles from "@/src/styles/Caroussel.module.css";
import { useEffect } from "react";

export const CarouselRef = ({ references }: { references: RefProp[] }) => {
  useEffect(() => {
    const logoSlider = document.getElementById("logoSlider");
    if (logoSlider) {
      references.forEach((ref) => {
        const img = document.createElement("img");
        img.src = ref.data.logo.url;
        logoSlider.appendChild(img);
      });
    }
  }, [references]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.logoSlider} id='logoSlider' />
    </div>
  );
};

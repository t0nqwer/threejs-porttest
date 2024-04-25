import gsap from "gsap";
import { create } from "zustand";

export const useAppState = create((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (isMenuOpen) => {
    if (isMenuOpen) {
      set((state) => ({ ...state, isMenuOpen }));
    } else {
      gsap.to("#menuli", {
        y: -50,
        opacity: 0,
        duration: 0.1,
        stagger: 0.1,
        ease: "circ.out",
      });
      gsap
        .to(".menudiv", {
          y: 0,
          opacity: 0,
          delay: 0.5,
          duration: 0.3,
        })
        .then(() => {
          set((state) => ({ ...state, isMenuOpen }));
        });
    }
  },
}));

gsap.from(".introduktion", {
  duration: 2,
  opacity: 0,
});

gsap.from(".introduktion2", {
  duration: 2,
  opacity: 0,
});

gsap.from("nav", {
  x: -1000,
  duration: 1.5,
  opacity: 0,
});

gsap.from(".fravenstre", {
  x: -1000,
  duration: 2.5,
  opacity: 0,
});

gsap.from(".frahøjre", {
  x: 1000,
  duration: 2.5,
  opacity: 0,
});

gsap.from(".fravenstre1", {
  x: -1000,
  duration: 2.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".frahøjre",
    // markers: true,
    toggleActions: "play none none reverse",
    start: "bottom center",
    end: "center 25%",
  },
});

gsap.from(".frahøjre1", {
  x: 1000,
  duration: 2.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".fravenstre1",
    // markers: true,
    toggleActions: "play none none reverse",
    start: "bottom center",
    end: "center 25%",
  },
});

gsap.from(".fravenstre2", {
  x: -1000,
  duration: 2.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".frahøjre1",
    // markers: true,
    toggleActions: "play none none reverse",
    start: "bottom center",
    end: "center 25%",
  },
});

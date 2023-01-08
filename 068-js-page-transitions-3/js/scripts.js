const body = document.querySelector("body");

const wiper = document.createElement("div");
wiper.classList.add("wiper");

const wiperImage = document.createElement("img");
wiperImage.setAttribute("src", "../assets/logo.svg");

const wiperHolder = document.createElement("div");
const wiperText = document.createElement("h2");

wiperHolder.appendChild(wiperText);

wiper.appendChild(wiperImage);
wiper.appendChild(wiperHolder);
body.appendChild(wiper);

barba.init({
  debug: true,
  transitions: [
    {
      name: "next",
      custom({ current, next, trigger }) {
        return trigger.classList && trigger.classList.contains("next");
      },
      leave({ current, next, trigger }) {
        return new Promise((resolve) => {
          const timeline = gsap.timeline({
            defaults: {
              duration: 0.75,
            },
            onComplete() {
              current.container.remove();
              resolve();
            },
          });

          const photos = current.container.querySelector("div.photos");
          const navigation = current.container.querySelectorAll(
            "header, a.next, a.previous"
          );

          timeline
            .fromTo(wiper, { x: "-100%", y: 0 }, { x: "0%" }, 0)
            .fromTo(navigation, { opacity: 1 }, { opacity: 0 }, 0)
            .fromTo(photos, { x: 0, opacity: 1 }, { x: 500, opacity: 0.25 }, 0);
        });
      },
      enter({ current, next, trigger }) {
        return new Promise((resolve) => {
          const photos = next.container.querySelector("div.photos");
          const navigation = next.container.querySelectorAll(
            "header, a.next, a.previous"
          );

          const timeline = gsap.timeline({
            defaults: {
              duration: 0.75,
            },
            onComplete() {
              resolve();
            },
          });

          timeline
            .fromTo(wiper, { x: "0%" }, { x: "100%" }, 0)
            .fromTo(navigation, { opacity: 0 }, { opacity: 1 }, 0)
            .fromTo(
              photos,
              { x: -500, opacity: 0.25 },
              { x: 0, opacity: 1 },
              0
            );
        });
      },
    },
    {
      name: "prev",
      leave({ current, next, trigger }) {
        return new Promise((resolve) => {
          const timeline = gsap.timeline({
            defaults: {
              duration: 0.75,
            },
            onComplete() {
              current.container.remove();
              resolve();
            },
          });

          const photos = current.container.querySelector("div.photos");
          const navigation = current.container.querySelectorAll(
            "header, a.next, a.previous"
          );

          timeline
            .fromTo(wiper, { x: "100%", y: 0 }, { x: "0%" }, 0)
            .fromTo(navigation, { opacity: 1 }, { opacity: 0 }, 0)
            .fromTo(
              photos,
              { x: 0, opacity: 1 },
              { x: -500, opacity: 0.25 },
              0
            );
        });
      },
      enter({ current, next, trigger }) {
        return new Promise((resolve) => {
          const photos = next.container.querySelector("div.photos");
          const navigation = next.container.querySelectorAll(
            "header, a.next, a.previous"
          );

          const timeline = gsap.timeline({
            defaults: {
              duration: 0.75,
            },
            onComplete() {
              resolve();
            },
          });

          timeline
            .fromTo(wiper, { x: "0%" }, { x: "-100%" }, 0)
            .fromTo(navigation, { opacity: 0 }, { opacity: 1 }, 0)
            .fromTo(photos, { x: 500, opacity: 0.25 }, { x: 0, opacity: 1 }, 0);
        });
      },
    },
  ],
});

barba.hooks.beforeEnter(({ current, next, trigger }) => {
  wiperText.innerHTML = next.container.dataset.title;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return new Promise((resolve) => {
    const timeline = gsap.timeline({
      onComplete() {
        resolve();
      },
    });

    timeline
      .to(wiperImage, { opacity: 1 }, 0)
      .to(wiperText, { y: "0%" }, 0)
      .to(wiperImage, { opacity: 0 }, 2)
      .to(wiperText, { y: "100%" }, 2);
  });
});

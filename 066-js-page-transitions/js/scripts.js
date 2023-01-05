const bodyTag = document.querySelector("body");

barba.use(barbaCss);

barba.init({
  // site wide
  transitions: [
    {
      name: "fade",
      once() {},
      beforeEnter({ current, next, trigger }) {
        const headerLinks = document.querySelectorAll("header a");
        const href = next.url.path;

        headerLinks.forEach((link) => {
          if (link.getAttribute("href") === href) {
            link.classList.add("selected");
          } else {
            link.classList.remove("selected");
          }
        });

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
  ],
  // specific part of the site
  views: [
    {
      namespace: "feed",
      beforeEnter() {
        bodyTag.classList.add("feed");
      },
      beforeLeave() {
        bodyTag.classList.remove("feed");
      },
    },
  ],
});

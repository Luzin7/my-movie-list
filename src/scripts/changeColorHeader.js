window.addEventListener("scroll", () => {
  const header = document.querySelector(".header__content");
  let value = window.scrollY;

  if (value > 750) header.setAttribute("id", "bw-color");
  if (value < 750) header.removeAttribute("id", "bw-color");
});


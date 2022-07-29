window.addEventListener("scroll", () => {
  const header = document.querySelector(".header__content");
  let value = window.scrollY;

  if (value > 854) header.setAttribute("id", "bw-color");
  if (value < 855) header.removeAttribute("id", "bw-color");
});

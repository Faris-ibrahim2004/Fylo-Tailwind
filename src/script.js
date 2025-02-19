// Get element
const header = document.querySelector(".header");
// window scroll calc
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.style.backgroundColor = "#0c1524";
    header.style.padding = "20px 0";
  } else {
    header.style.backgroundColor = "";
    header.style.paddingTop = "";
  }
});

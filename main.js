const faqs = document.getElementById("faqs");

Array.from(faqs.children).forEach((element) => {
  element.addEventListener("click", (event) => {
    const prevEl = document.querySelector(".active");
    const currEl = event.target.closest("li");

    if (prevEl === currEl) {
      currEl.classList.toggle("active");
    } else {
      prevEl?.classList.remove("active");
      currEl.classList.add("active");
    }
  });
});

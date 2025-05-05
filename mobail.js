let currentSlide = 0;

const slides = [
  {
    content: document.querySelector(".div8"),
    image: document.querySelector(".div10"),
  },
  {
    content: document.querySelector(".div14"),
    image: document.querySelector(".div17"),
  }
];

const nextBtnList = document.querySelectorAll(".img6");
const prevBtnList = document.querySelectorAll(".img8");

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.content.style.display = "flex";
      slide.image.style.display = "block";
    } else {
      slide.content.style.display = "none";
      slide.image.style.display = "none";
    }
  });
}

nextBtnList.forEach(btn => {
  btn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
});

prevBtnList.forEach(btn => {
  btn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);


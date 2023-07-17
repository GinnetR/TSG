const btnLeft = document.querySelector(".btn-left"),
  btnRight = document.querySelector(".btn-right"),
  sliderCarrusel = document.querySelector("#sliderCarrusel"),
  sliderSection = document.querySelectorAll(".SlidesProducts");

let operation = 0,
  counter = 0,
  widthImg = 100 / sliderSection.length;

btnLeft.addEventListener("click", e => moveToLeft());
btnRight.addEventListener("click", e => moveToRight());

function moveToRight() {
  if (counter >= sliderSection.length - 1) {
    counter = 0;
    operation = 0;
    sliderCarrusel.style.transform = `translate(-${operation}%)`;
    sliderCarrusel.style.transition = "none";
   return }
    counter++;
    operation += widthImg;
    sliderCarrusel.style.transform = `translate(-${operation}%)`;
    sliderCarrusel.style.transition = "transform 0.6s ease";
  }


function moveToLeft() {
  counter--;
  if (counter < 0) {
    counter = sliderSection.length - 1;
    operation = widthImg * (sliderSection.length - 1);
    sliderCarrusel.style.transform = `translate(-${operation}%)`;
    sliderCarrusel.style.transition = "none";
  return; } 
    operation -= widthImg;
    sliderCarrusel.style.transform = `translate(-${operation}%)`;
    sliderCarrusel.style.transition = "transform 0.6s ease";
  }
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





  
function mostrarParte2() {
  document.getElementById("parte1").style.display = "none";
  document.getElementById("parte2").style.display = "block";
}

function mostrarParte3() {
  document.getElementById("parte2").style.display = "none";
  document.getElementById("parte3").style.display = "block";
}



function mostrarParte2Exito(){
  document.getElementById("casos-exito-primera").style.display = "none";
  document.getElementById("casos-exito-segunda").style.display = "block";
}
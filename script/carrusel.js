var product_swiper = new Swiper('.product-swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate:1,
    stretch:90,
    depth: 130,
    modifier: 9,
    slideShadows: false
  },
 
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.product-next',
    prevEl: '.product-prev',
    hideOnClick: true,
  },
});

document.querySelector('.product-prev').addEventListener('click', () => {
  product_swiper.slidePrev();
});

document.querySelector('.product-next').addEventListener('click', () => {
  product_swiper.slideNext();
});


//trabaje con nosotros
function mostrarParte2() {
  document.getElementById("parte1").style.display = "none";
  document.getElementById("parte2").style.display = "block";
}

function mostrarParte3() {
  document.getElementById("parte2").style.display = "none";
  document.getElementById("parte3").style.display = "block";
}


//casos de exito
function mostrarParte2Exito() {
  document.getElementById("casos-exito-primera").style.display = "none";
  document.getElementById("casos-exito-segunda").style.display = "block";
}




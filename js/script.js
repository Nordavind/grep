// navbar mobile fixed luego de scroll
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.nav-bar-wrapper-mobile');
  const heroMainBg = document.querySelector('.hero-main-bg');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navbar.classList.add('prefixed');
        setTimeout(() => {
          navbar.classList.add('fixed');
          navbar.classList.add('show');
        }, 300);

      } else {
        navbar.classList.remove('show');
        setTimeout(() => {
          navbar.classList.remove('fixed');
          navbar.classList.remove('prefixed');
        }, 300);
      }
    });
  }, { threshold: 0 });

  observer.observe(heroMainBg);
});

// counter post-header
new PureCounter({
  selector: '.counter-casos',
  start: 0,
  end: 950,
  duration: 1.5,
  delay: 10,
  once: true,
  repeat: false,
  decimals: 0,
  legacy: true,
  filesizing: false,
  currency: false,
  separator: false,
});

new PureCounter({
  selector: '.counter-proyectos',
  start: 0,
  end: 850,
  duration: 1.5,
  delay: 10,
  once: true,
  repeat: false,
  decimals: 0,
  legacy: true,
  filesizing: false,
  currency: false,
  separator: false,
});

new PureCounter({
  selector: '.counter-empresas',
  start: 0,
  end: 250,
  duration: 1.5,
  delay: 10,
  once: true,
  repeat: false,
  decimals: 0,
  legacy: true,
  filesizing: false,
  currency: false,
  separator: false,
});

new PureCounter({
  selector: '.counter-anos',
  start: 0,
  end: 12,
  duration: 1.5,
  delay: 10,
  once: true,
  repeat: false,
  decimals: 0,
  legacy: true,
  filesizing: false,
  currency: false,
  separator: false,
});

// funcion que pasa direccion al carousel de acuerdo al ancho del viewport
function getDirection() {
  const windowWidth = window.innerWidth;
  const direction = windowWidth <= 700 ? 'vertical' : 'horizontal';
  return direction;
}

// carousel script (swiper)
const swiper = new Swiper('.swiper', {
  direction: getDirection(),
  loop: true,
  allowTouchMove: false,
  slidesPerView: 4,
  slidesPerGroup: 4,

  breakpoints: {
    1280: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
    950: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 5,
    },
    200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 5,
    },
  },

  speed: 800,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.custom-next-button',
    prevEl: '.custom-prev-button',
  },
});

// evento que escucha la ventana para actualizar estado de la funcion getdirection
window.addEventListener('resize', function () {
  swiper.changeDirection(getDirection());
});

// masonryjs
window.onload = function () {
  const elem = document.querySelector('.testimonials-grid');
  const msnry = new Masonry(elem, {
    itemSelector: '.testimonials-grid-item',
    columnWidth: '.testimonials-grid-item',
    percentPosition: true
  });
};

// acordeones
document.addEventListener("DOMContentLoaded", function () {
  // abre el primer acordeon por defecto
  const firstAccordion = document.querySelector(".acordion-item.acordion-active");
  const firstPanel = firstAccordion.nextElementSibling;
  firstPanel.style.maxHeight = firstPanel.scrollHeight + "px";

  // agrega listeners a todos los acordeones
  const accordions = document.getElementsByClassName("acordion-item");
  for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function () {
      // cerrar todos los paneles abiertos
      const activeAccordions = document.querySelectorAll(".acordion-item.acordion-active");
      activeAccordions.forEach(function (item) {
        item.classList.remove("acordion-active");
        const panel = item.nextElementSibling;
        if (panel) {
          panel.style.maxHeight = null;
        }
      });

      // abrir o cerrar el panel clickeado
      this.classList.toggle("acordion-active");
      const panel = this.nextElementSibling;
      if (panel) {
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      }
    });
  }
});

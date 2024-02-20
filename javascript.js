const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelector('.carousel-items');
const items = document.querySelectorAll('.item');

let currentIndex = 0;
const totalItems = items.length;
const itemWidth = items[0].offsetWidth;

carouselItems.style.width = `${totalItems * itemWidth}px`;

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
  console.log(currentIndex)
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

function updateCarousel() {
  // Remove todos os itens do carrossel
  while (carouselItems.firstChild) {
    carouselItems.removeChild(carouselItems.firstChild);
  }

  // Adiciona o item atual ao carrossel
  const currentItem = items[currentIndex].cloneNode(true);
  carouselItems.appendChild(currentItem);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Mostrar o primeiro item inicialmente
updateCarousel();

const carousel2 = document.querySelector('.carousel2');
const carouselItems2 = document.querySelector('.carousel-items2');
const items2 = document.querySelectorAll('.item2');

let currentIndex2 = 0;
const totalItems2 = items2.length;
const itemWidth2 = items2[0].offsetWidth;

carouselItems2.style.width = `${totalItems2 * itemWidth2}px`;

function proximaSlide() {
  currentIndex2 = (currentIndex2 + 1) % totalItems2;
  updateCarousel2();
  console.log(currentIndex2)
}

function antesSlide() {
  currentIndex2 = (currentIndex2 - 1 + totalItems2) % totalItems2;
  updateCarousel2();
}

function updateCarousel2() {
  // Remove todos os itens do carrossel
  while (carouselItems2.firstChild) {
    carouselItems2.removeChild(carouselItems2.firstChild);
  }

  // Adiciona o item atual ao carrossel
  const currentItem2 = items2[currentIndex2].cloneNode(true);
  carouselItems2.appendChild(currentItem2);
}

document.querySelector('.anterior').addEventListener('click', proximaSlide);
document.querySelector('.posterior').addEventListener('click', antesSlide);

// Mostrar o primeiro item inicialmente
updateCarousel2();


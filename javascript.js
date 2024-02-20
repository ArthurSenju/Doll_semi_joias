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

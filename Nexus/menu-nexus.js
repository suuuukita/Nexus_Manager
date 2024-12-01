let carouselIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const carouselImagesContainer = document.querySelector('.carousel-images');

function showSlides() {
    carouselIndex++;
    if (carouselIndex >= images.length) {
        carouselIndex = 0; // Volta para o início após a última imagem
    }
    // Move o carrossel para mostrar a próxima imagem
    carouselImagesContainer.style.transform = `translateX(-${carouselIndex * 100}%)`;
}

// Altere a imagem a cada 3 segundos
setInterval(showSlides, 10000);

// Script para menu hamburguer
const hamburgerButton = document.getElementById('hamburgerButton');
const mobileMenu = document.getElementById('mobileMenu');
const closeButton = document.getElementById('closeButton');

hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});
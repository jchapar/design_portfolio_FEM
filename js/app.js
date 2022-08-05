const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider-img');

leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveRight);

function moveLeft() {
  sliderImages.forEach((img) => {
    img.style.transform = `translateX(-100%)`;
  });
}

function moveRight() {
  slider.style.transform = `translateX(100%)`;
}

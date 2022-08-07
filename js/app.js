const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const img = document.querySelectorAll('#imgs .img');

let index = 0;

function run() {
  index++;
  changeImage();
}
// Change Image
function changeImage() {
  if (index > img.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = img.length - 1;
  }

  imgs.style.transform = `translateX(${-index * 460}px)`;
}

function resetInterval() {
  clearInterval(interval);
}

// Right button functionality
rightBtn.addEventListener('click', () => {
  index++;
  changeImage();
});

// Left button functionality
leftBtn.addEventListener('click', () => {
  index--;
  changeImage();
});

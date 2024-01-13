const btnPrev = document.querySelector('.faq-btn_prev');
const btnNext = document.querySelector('.faq-btn_next');
const carousel = document.querySelector('.faq-list');
const carouselItems = document.querySelectorAll('.faq-item');
const container = document.querySelector('.faq-container');

let position = 0;
let count;
let maxWidth;

switch (true) {
  case window.innerWidth < 668:
    count = 1;
    maxWidth = 282;

    break;

  case window.innerWidth < 974:
    count = 2;
    maxWidth = 588;

    break;

  case window.innerWidth < 1280:
    count = 3;
    maxWidth = 894;

    break;

  default:
    count = 4;
    maxWidth = 1200;
}

const maxCount = count;
container.style.maxWidth = maxWidth + 'px';

const moveLeft = () => {
  count += 1;
  if (count > maxCount) btnPrev.removeAttribute('disabled');
  if (count === carouselItems.length) btnNext.setAttribute('disabled', 'true');
  position -= 306;
  carousel.style.marginLeft = position + 'px';
};

const moveRight = () => {
  count -= 1;
  if (count === maxCount) btnPrev.setAttribute('disabled', 'true');
  if (count < carouselItems.length) btnNext.removeAttribute('disabled');
  position += 306;
  carousel.style.marginLeft = position + 'px';
};

btnNext.addEventListener('click', moveLeft);
btnPrev.addEventListener('click', moveRight);

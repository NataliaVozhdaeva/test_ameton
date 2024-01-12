const btnPrev = document.querySelector('.faq-btn_prev');
const btnNext = document.querySelector('.faq-btn_next');
const carousel = document.querySelector('.faq');
const carouselItems = document.querySelectorAll('.faq-item');

let position = 0;
let count = 4;

const moveLeft = () => {
  count += 1;
  if (count > 4) btnPrev.removeAttribute('disabled');
  if (count === carouselItems.length) btnNext.setAttribute('disabled', 'true');
  position -= 306;
  carousel.style.marginLeft = position + 'px';
};

const moveRight = () => {
  count -= 1;
  if (count === 4 || count < 4) btnPrev.setAttribute('disabled', 'true');
  if (count < carouselItems.length) btnNext.removeAttribute('disabled');
  position += 306;
  carousel.style.marginLeft = position + 'px';
};

btnNext.addEventListener('click', moveLeft);
btnPrev.addEventListener('click', moveRight);

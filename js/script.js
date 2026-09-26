window.addEventListener('load', updateSideNav);
window.addEventListener('resize', updateSideNav);

function updateSideNav() {
  const hero = document.querySelector('.hero');
  const sideNav = document.querySelector('.side-nav');

  if (!hero || !sideNav) return;

  const heroBottom =
    hero.getBoundingClientRect().bottom + window.scrollY;

  sideNav.style.top =
    `${heroBottom - sideNav.offsetHeight}px`;
}



  
  document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('.product-image-main img');
    const thumbs = document.querySelectorAll('.product-thumbs img');
  
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        mainImage.src = thumb.src;
  
        thumbs.forEach(t => t.classList.remove('is-active'));
        thumb.classList.add('is-active');
      });
    });
  
    // 初期状態で1枚目をアクティブに
    if (thumbs.length > 0) {
      thumbs[0].classList.add('is-active');
    }
  });
  
  
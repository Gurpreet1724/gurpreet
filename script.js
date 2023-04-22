const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.style.color = '#ff0000';
  } else {
    header.style.color = '#fff';
  }
});




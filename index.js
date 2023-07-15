document.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.container');

  box.addEventListener('mouseenter', () => {
    box.style.boxShadow = 'none';
  });

  box.addEventListener('mouseleave', () => {
    box.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.3)';
  });
});
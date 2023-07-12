const mobilenavMenu = document.querySelector('.mobilenav-menu');
const mobilenavIcon = document.querySelector('.mobilenav-icon');
const mobilenavCloseIcon = document.querySelector('.mobilenav-close');

mobilenavIcon.addEventListener('click', function () {
  mobilenavCloseIcon.classList.add('open');
  mobilenavIcon.classList.add('close');
  mobilenavMenu.classList.add('open');
  document.body.style.backgroundColor = 'rgba(128, 128, 128, 0.5)';
});

mobilenavCloseIcon.addEventListener('click', function () {
  mobilenavCloseIcon.classList.remove('open');
  mobilenavIcon.classList.remove('close');
  mobilenavMenu.classList.remove('open');
  document.body.style.backgroundColor = 'inherit';
});

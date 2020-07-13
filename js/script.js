let mapOpenButton = document.querySelector('.open-map-button');
let mapCloseButton = document.querySelector('.map-popup-close');
let mapPopup = document.querySelector('.map-popup');

mapOpenButton.addEventListener( 'click', function () {
  mapPopup.style.display = 'block';
});

mapCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.style.display = 'none';
});


let contactUsOpenButton = document.querySelector('.open-contact-us-popup');
let contactUsCloseButton = document.querySelector('.contact-us-popup-close');
let contactUsPopup = document.querySelector('.contact-us-popup');

contactUsOpenButton.addEventListener('click', function () {
  contactUsPopup.style.display = 'block';
});

contactUsCloseButton.addEventListener('click', function () {
  contactUsPopup.style.display = 'none';
});

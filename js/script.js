let popupConstructor = function (popupClass, openButtonClass, ...closeButtonClass) {
  let popup = document.querySelector(popupClass);


  let openButtons = document.querySelectorAll(openButtonClass);

  for (let button of openButtons) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();

      popup.classList.add('active');
    });
  }

  for (let i = 0; i < closeButtonClass.length; i++) {
    let closeButton = document.querySelector(closeButtonClass[i]);

    closeButton.addEventListener('click', function (evt) {
      evt.preventDefault();

      popup.classList.remove('active');
    });
  }
};

let getFileName = function() {
  return location.pathname.split('/').pop();
};

if (getFileName() === 'index.html') {
  popupConstructor(
    '.map-popup',
    '.open-map-button',
    '.map-popup-close'
  );
  popupConstructor(
    '.contact-us-popup',
    '.open-contact-us-popup',
    '.contact-us-popup-close',
  );
}
else if (getFileName() === 'catalog.html') {
  popupConstructor(
    '.added-to-basket-popup',
    '.buy-button',
    '.popup-basket-close-button', '.popup-continue-button'
  );
}

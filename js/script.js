let popupConstructor = function (popupClass, openButtonClass, closeButtonClass, defaultActionList) {
  let popup = document.querySelector(popupClass);
  let openButton = document.querySelector(openButtonClass);
  let closeButton = document.querySelector(closeButtonClass);

  openButton.addEventListener('click', function (evt) {
    if (defaultActionList[0] === true) {
      evt.preventDefault();
    }

    popup.style.display = 'block';
  });

  closeButton.addEventListener('click', function (evt) {
    if (defaultActionList[1] === true) {
      evt.preventDefault();
    }

    popup.style.display = 'none';
  });
};

popupConstructor('.map-popup', '.open-map-button', '.map-popup-close', [true, false]);
popupConstructor('.contact-us-popup', '.open-contact-us-popup', '.contact-us-popup-close', [true, false]);

const SETTINGS = readStorage(SETTINGS_KEY);

const DOM = {
  background: document.getElementById('background')
};

function renderBackground() {
  DOM.background.replaceChildren();
  if (!SETTINGS.transparentBackground) {
    const image = document.createElement('img');
    DOM.background.classList = 'background-wrapper';

    image.classList = 'background-image';
    image.setAttribute('src', `assets/images/tracks/Menu.png`);
    DOM.background.appendChild(image);
  } else {
    DOM.background.classList = 'transparent-background-wrapper';
  }
}

renderBackground();
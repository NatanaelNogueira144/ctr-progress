(function () {
  const settings = readStorage(SETTINGS_KEY) ?? {
    transparentBackground: false,
  };

  const background = document.getElementById('background');
  if (!background) return;

  function renderBackground() {
    background.replaceChildren();

    if (settings.transparentBackground) {
      background.className = 'transparent-background-wrapper';
      return;
    }

    background.className = 'background-wrapper';

    const image = document.createElement('img');
    image.className = 'background-image';
    image.src = 'assets/images/tracks/Menu.png';
    image.alt = '';

    background.appendChild(image);
  }

  renderBackground();
})();
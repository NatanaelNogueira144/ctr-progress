(function () {
  const settings = readStorage(SETTINGS_KEY) ?? {
    background: 'static',
  };

  const background = document.getElementById('background');
  if (!background) return;

  function renderBackground() {
    background.replaceChildren();

    if (settings.background === 'transparent') {
      background.className = 'transparent-background-wrapper';
      return;
    }

    background.className = 'background-wrapper';

    const image = document.createElement('img');
    image.className = 'background-image';
    image.src = background.getAttribute('initial-src');
    image.alt = '';

    background.appendChild(image);
  }

  renderBackground();
})();
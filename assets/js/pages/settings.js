(function () {
  const DEFAULT_STATE = {
    transparentBackground: false,
    milestonesTable: {
      showPersonalBests: true,
      showGoals: true,
      showWorldRecords: true,
    },
    grindTable: {
      showBestCourse: true,
      showBestLap: true,
      showBestLapInCourse: true,
      showBestSL: true,
      showBestPace: true,
    },
  };

  const SETTINGS_FIELDS = [
    ['transparentBackground', 'Show transparent background'],
    ['milestonesTable.showPersonalBests', 'Show personal bests'],
    ['milestonesTable.showGoals', 'Show goals'],
    ['milestonesTable.showWorldRecords', 'Show world records'],
    ['grindTable.showBestCourse', 'Show grind best course'],
    ['grindTable.showBestLap', 'Show grind best lap'],
    ['grindTable.showBestLapInCourse', 'Show grind best lap in course'],
    ['grindTable.showBestSL', 'Show grind best SL'],
    ['grindTable.showBestPace', 'Show grind best pace'],
  ];

  const state = readStorage(SETTINGS_KEY, DEFAULT_STATE);

  const dom = {
    settingsCard: document.getElementById('settings-card'),
  };

  if (!dom.settingsCard) return;

  function saveState() {
    writeStorage(SETTINGS_KEY, state);
  }

  function createTextSpan(text) {
    const span = document.createElement('span');
    span.className = 'white';
    span.textContent = text;
    return span;
  }

  function createCheckboxItem(path, label) {
    const wrapper = document.createElement('div');
    wrapper.className = 'checkbox-group';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = getNestedValue(state, path);

    input.addEventListener('change', function () {
      setNestedValue(state, path, input.checked);
      saveState();
    });

    wrapper.append(input, createTextSpan(label));
    return wrapper;
  }

  function renderSettings() {
    const items = SETTINGS_FIELDS.map(([path, label]) =>
      createCheckboxItem(path, label)
    );

    dom.settingsCard.replaceChildren(...items);
  }

  function render() {
    renderSettings();
  }

  render();
})();
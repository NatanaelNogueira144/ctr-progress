const STATE = readStorage(SETTINGS_KEY, {
  transparentBackground: false,
  milestonesTable: {
    showPersonalBests: true,
    showGoals: true,
    showWorldRecords: true
  },
  grindTable: {
    showBestCourse: true,
    showBestLap: true,
    showBestLapInCourse: true,
    showBestSL: true,
    showBestPace: true
  }
});

const DOM = {
  background: document.getElementById('background'),
  settingsCard: document.getElementById('settings-card')
};

function saveState() {
  writeStorage(SETTINGS_KEY, {
    transparentBackground: STATE.transparentBackground,
    milestonesTable: STATE.milestonesTable,
    grindTable: STATE.grindTable
  });
}

function commit() {
  saveState();
  render();
}

function renderBackground() {
  DOM.background.replaceChildren();
  if (!STATE.transparentBackground) {
    const image = document.createElement('img');
    DOM.background.classList = 'background-wrapper';

    image.classList = 'background-image';
    image.setAttribute('src', `../assets/images/tracks/Menu.png`);
    DOM.background.appendChild(image);
  } else {
    DOM.background.classList = 'transparent-background-wrapper';
  }
}

function createSpan(className, text) {
  const span = document.createElement('span');
  span.classList = className;
  span.textContent = text;
  return span;
}

function createCheckboxItem(key, label) {
  const div = document.createElement('div');
  const input = document.createElement('input');

  div.classList = 'checkbox-group';

  input.setAttribute('type', 'checkbox');
  input.checked = getNestedValue(STATE, key);

  input.onchange = () => {
    setNestedValue(STATE, key, input.checked);
    commit();
  };

  div.append(input, createSpan('white', label));
  return div;
}

function renderCheckboxItemsList() {
  DOM.settingsCard.replaceChildren();
  DOM.settingsCard.append(...[
    createCheckboxItem(
      'transparentBackground', 
      'Show transparent background'
    ),
    createCheckboxItem(
      'milestonesTable.showPersonalBests', 
      'Show personal bests'
    ),
    createCheckboxItem(
      'milestonesTable.showGoals', 
      'Show goals'
    ),
    createCheckboxItem(
      'milestonesTable.showWorldRecords', 
      'Show world records'
    ),
    createCheckboxItem(
      'grindTable.showBestCourse', 
      'Show grind best course'
    ),
    createCheckboxItem(
      'grindTable.showBestLap', 
      'Show grind best lap'
    ),
    createCheckboxItem(
      'grindTable.showBestLapInCourse', 
      'Show grind best lap in course'
    ),
    createCheckboxItem(
      'grindTable.showBestSL', 
      'Show grind best SL'
    ),
    createCheckboxItem(
      'grindTable.showBestPace', 
      'Show grind best pace'
    ),
  ]);
}

function render() {
  renderBackground();
  renderCheckboxItemsList();
}

function loadData() {
  render();
}

loadData();
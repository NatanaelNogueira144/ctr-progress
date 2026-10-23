
(function () {
  const DEFAULT_STATE = {
    background: 'static',
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
    {
      path: 'background',
      label: 'Background Style',
      type: 'select',
      options: [
        { value: 'transparent', label: 'Transparent' },
        { value: 'static', label: 'Static' },
        { value: 'animated', label: 'Animated' },
      ],
    },
    {
      path: 'milestonesTable.showPersonalBests',
      label: 'Show personal bests',
      type: 'checkbox',
    },
    {
      path: 'milestonesTable.showGoals',
      label: 'Show goals',
      type: 'checkbox',
    },
    {
      path: 'milestonesTable.showWorldRecords',
      label: 'Show world records',
      type: 'checkbox',
    },
    {
      path: 'grindTable.showBestCourse',
      label: 'Show grind best course',
      type: 'checkbox',
    },
    {
      path: 'grindTable.showBestLap',
      label: 'Show grind best lap',
      type: 'checkbox',
    },
    {
      path: 'grindTable.showBestLapInCourse',
      label: 'Show grind best in course',
      type: 'checkbox',
    },
    {
      path: 'grindTable.showBestSL',
      label: 'Show grind best SL',
      type: 'checkbox',
    },
    {
      path: 'grindTable.showBestPace',
      label: 'Show grind best pace',
      type: 'checkbox',
    },
  ];

  const state = readStorage(SETTINGS_KEY, DEFAULT_STATE);

  const dom = {
    settingsCard: document.getElementById('settings-card'),
    eraseAllDataButton: document.getElementById(
      'erase-all-data-button'
    ),
  };

  if (!dom.settingsCard) return;

  function saveState() {
    writeStorage(SETTINGS_KEY, state);
  }

  function createButton(text, className) {
    const button = document.createElement('button');
    button.className = 'block';

    const span = document.createElement('span');
    span.className = className;
    span.textContent = text;

    button.appendChild(span);

    return { button, span };
  }

  function createToggleItem({ path, label }) {
    const { button, span } = createButton('', '');

    function updateLabel() {
      const enabled = getNestedValue(state, path);

      span.className = enabled ? 'text-green' : 'text-red';
      span.textContent = `${label}: ${enabled ? 'On' : 'Off'}`;
    }

    button.addEventListener('click', () => {
      const enabled = !getNestedValue(state, path);

      setNestedValue(state, path, enabled);
      updateLabel();
      saveState();
    });

    updateLabel();

    return button;
  }

  function createSelectItem({ path, label, options }) {
    const { button, span } = createButton('', 'text-orange');

    function getCurrentOption() {
      const value = getNestedValue(state, path);

      return options.find(option => option.value === value)
        ?? options[0];
    }

    function updateLabel() {
      const currentOption = getCurrentOption();

      span.textContent = `${label}: ${currentOption.label}`;
    }

    button.addEventListener('click', () => {
      const currentOption = getCurrentOption();
      const currentIndex = options.indexOf(currentOption);
      const nextIndex = (currentIndex + 1) % options.length;
      const nextOption = options[nextIndex];

      setNestedValue(state, path, nextOption.value);
      updateLabel();
      saveState();
    });

    updateLabel();

    return button;
  }

  function createSettingItem(setting) {
    switch (setting.type) {
      case 'select':
        return createSelectItem(setting);

      case 'checkbox':
      default:
        return createToggleItem(setting);
    }
  }

  function renderSettings() {
    const items = SETTINGS_FIELDS.map(createSettingItem);

    dom.settingsCard.replaceChildren(...items);
  }

  function eraseAllData() {
    const confirmed = confirm(
      'Are you sure about erasing all your data? This cannot be reverted!'
    );

    if (!confirmed) return;

    writeStorage(DATA_KEY, {});
    alert('All your data was deleted successfully.');
  }

  function initialize() {
    renderSettings();

    dom.eraseAllDataButton?.addEventListener(
      'click',
      eraseAllData
    );
  }

  initialize();
})();

const CATEGORY_TIME_TYPES = ['personalBest', 'worldRecord', 'goal'];
const GRIND_TIME_TYPES = ['bestCourse', 'bestLap', 'bestLapInCourse', 'bestSL', 'bestPace'];

const SELECTED = readStorage(STORAGE_KEY);
const DATA = readStorage(DATA_KEY);

const STATE = {
  selectedMode: SELECTED.mode ?? Mode.TimeTrial,
  selectedTrack: SELECTED.track ?? Track.CrashCove,
  selectedRestriction: SELECTED.restriction ?? Restriction.NoRestriction,
  selectedEngine: SELECTED.engine ?? Engine.GrindBest,
};

const DOM = {
  mode: document.getElementById('mode'),
  track: document.getElementById('track'),
  restriction: document.getElementById('restriction'),
  engine: document.getElementById('engine'),
  background: document.getElementById('background'),
  categories: document.getElementById('categories'),
  grindCategories: document.getElementById('grindCategories'),
  pbs: document.getElementById('pbs'),
  wrs: document.getElementById('wrs'),
  goals: document.getElementById('goals'),
};

function saveState() {
  writeStorage(STORAGE_KEY, {
    mode: STATE.selectedMode,
    track: STATE.selectedTrack,
    restriction: STATE.selectedRestriction,
    engine: STATE.selectedEngine,
  });
}

function commit() {
  saveState();
  render();
}

function getCurrentModeData() {
  return CHARTS[STATE.selectedMode];
}

function getCurrentTrackData() {
  return getCurrentModeData()[STATE.selectedTrack];
}

function getCurrentRestrictionData() {
  return getCurrentTrackData()[STATE.selectedRestriction];
}

function getCurrentModes() {
  return Object.keys(CHARTS);
}

function getCurrentTracks() {
  return Object.keys(getCurrentModeData());
}

function getCurrentRestrictions() {
  return Object.keys(getCurrentTrackData());
}

function getCurrentEngines() {
  return Object.keys(getCurrentRestrictionData());
}

function getCurrentCategories() {
  return getCurrentRestrictionData()[STATE.selectedEngine];
}

function getCurrentMetrics() {
  return DATA?.[STATE.selectedMode]?.[STATE.selectedTrack]?.[STATE.selectedRestriction]?.[STATE.selectedEngine];
}

function getLastGrind(grinds = []) {
  return grinds.length > 0 ? grinds[grinds.length - 1] : null;
}

function cycleSelection(key, values) {
  STATE[key] = getNextElement(values, STATE[key]);
  commit();
}

function resetRestrictionAndEngine() {
  STATE.selectedRestriction = Restriction.NoRestriction;
  STATE.selectedEngine = Engine.GrindBest;
}

function loadEvents() {
  DOM.mode.onclick = () => {
    cycleSelection('selectedMode', getCurrentModes());
    resetRestrictionAndEngine();
    commit();
  };

  DOM.track.onclick = () => {
    cycleSelection('selectedTrack', getCurrentTracks());
    resetRestrictionAndEngine();
    commit();
  };

  DOM.restriction.onclick = () => {
    STATE.selectedRestriction = getNextElement(getCurrentRestrictions(), STATE.selectedRestriction);
    STATE.selectedEngine = getCurrentEngines()[0];
    commit();
  };

  DOM.engine.onclick = () => {
    cycleSelection('selectedEngine', getCurrentEngines());
  };
}

function renderHeader() {
  DOM.mode.textContent = STATE.selectedMode;
  DOM.track.textContent = STATE.selectedTrack;
  DOM.restriction.textContent = STATE.selectedRestriction;
  DOM.engine.textContent = STATE.selectedEngine;
  DOM.background.setAttribute('src', `assets/images/tracks/${STATE.selectedTrack}.png`);
}

function ensureMetricsRoot(data, mode, track, restriction, engine) {
  if (!data[mode]) {
    data[mode] = {};
  }

  if (!data[mode][track]) {
    data[mode][track] = {};
  }

  if (!data[mode][track][restriction]) {
    data[mode][track][restriction] = {};
  }

  if (!data[mode][track][restriction][engine]) {
    data[mode][track][restriction][engine] = {
      categories: {},
      grinds: [],
    };
  }

  return data[mode][track][restriction][engine];
}

function ensureLastGrind(metrics) {
  if (!metrics.grinds.at(-1)) {
    metrics.grinds.push({
      bestCourse: null,
      bestLap: null,
      bestLapInCourse: null,
      bestSL: null,
      bestPace: null,
    });
  }

  return metrics.grinds.at(-1);
}

function saveTime(data = {
  mode: STATE.selectedMode,
  track: STATE.selectedTrack,
  restriction: STATE.selectedRestriction,
  engine: STATE.selectedEngine,
  category: null,
  type,
  time,
}) {
  const { mode, track, restriction, engine, category, type, time } = data;
  const currentData = readStorage(DATA_KEY);
  const metrics = ensureMetricsRoot(currentData, mode, track, restriction, engine);

  if (CATEGORY_TIME_TYPES.includes(type)) {
    if (!metrics.categories[category]) {
      metrics.categories[category] = {};
    }

    metrics.categories[category][type] = time;
  }

  if (GRIND_TIME_TYPES.includes(type)) {
    const lastGrind = ensureLastGrind(metrics);
    lastGrind[type] = time;
  }

  writeStorage(DATA_KEY, currentData);
}

function closeActiveEdits() {
  document.querySelectorAll('td').forEach((el) => {
    const toggleButton = el.querySelector('button');
    const editDiv = el.querySelector('div');

    if (!toggleButton || !editDiv) {
      return;
    }

    editDiv.style.display = 'none';
    toggleButton.style.display = 'block';
  });
}

function createSpan(className, text) {
  const span = document.createElement('span');
  span.classList = className;
  span.textContent = text;
  return span;
}

function createTimeInput(value) {
  const input = document.createElement('input');
  const masked = formatTimeMask(value);

  input.setAttribute('type', 'ctrtime');
  input.value = masked;
  input.maxLength = masked[0] === '-' ? 8 : 7;

  input.onkeydown = (e) => {
    const nextMasked = formatTimeMask(e.target.value);
    input.value = nextMasked;
    input.maxLength = nextMasked[0] === '-' ? 8 : 7;
  };

  return input;
}

function createActionButton(text, className, onclick) {
  const button = document.createElement('button');
  const span = createSpan(className, text);

  button.onclick = onclick;
  button.appendChild(span);

  return button;
}

function createEditableTimeCell({
  displayValue,
  inputValues,
  onSave,
  isGoalAchieved = false,
}) {
  const td = document.createElement('td');
  const toggleButton = document.createElement('button');
  const toggleButtonSpan = document.createElement('span');
  const editDiv = document.createElement('div');
  const inputs = inputValues.map(createTimeInput);

  toggleButton.classList = 'block';
  toggleButtonSpan.textContent = displayValue;

  if (isGoalAchieved) {
    toggleButtonSpan.classList = 'green';
  }

  toggleButton.onclick = () => {
    closeActiveEdits();

    inputs.forEach((input, index) => {
      input.value = formatTimeMask(inputValues[index]);
      input.maxLength = input.value[0] === '-' ? 8 : 7;
    });

    toggleButton.style.display = 'none';
    editDiv.style.display = 'flex';
  };

  editDiv.style.display = 'none';
  editDiv.style.justifyContent = 'center';

  const saveButton = createActionButton('S', 'green', () => onSave({
    td,
    toggleButton,
    toggleButtonSpan,
    editDiv,
    inputs,
  }));

  const cancelButton = createActionButton('X', 'red', () => {
    toggleButton.style.display = 'block';
    editDiv.style.display = 'none';
  });

  editDiv.append(...inputs, saveButton, cancelButton);
  toggleButton.appendChild(toggleButtonSpan);
  td.append(toggleButton, editDiv);

  return td;
}

function renderGrindTable(mode, grind) {
  function createGrindRow(title, type, time) {
    const formattedTime = type === 'bestPace'
      ? formatPace(time)
      : formatOptionalTime(time);

    const tr = document.createElement('tr');
    const titleTd = document.createElement('td');
    const timeTd = createEditableTimeCell({
      displayValue: formattedTime,
      inputValues: type === 'bestPace'
        ? formattedTime.split(' + ')
        : [formattedTime],
      onSave: ({ toggleButton, toggleButtonSpan, editDiv, inputs }) => {
        const parsedTime = parseTimeInput(inputs[0].value);
        const parsedTime2 = parseTimeInput(inputs[1]?.value);

        if ((type === 'bestPace' && parsedTime2 === 0) || parsedTime === 0) {
          return;
        }

        saveTime({
          mode: STATE.selectedMode,
          track: STATE.selectedTrack,
          restriction: STATE.selectedRestriction,
          engine: STATE.selectedEngine,
          type,
          time: type === 'bestPace' ? [parsedTime, parsedTime2] : parsedTime,
        });

        toggleButtonSpan.textContent = type === 'bestPace'
          ? formatPace([parsedTime, parsedTime2])
          : inputs[0].value;

        toggleButton.style.display = 'block';
        editDiv.style.display = 'none';
      },
    });

    titleTd.appendChild(createSpan('orange', title));
    tr.append(titleTd, timeTd);

    return tr;
  }

  DOM.grindCategories.replaceChildren();

  DOM.grindCategories.appendChild(
    createGrindRow('Best Course', 'bestCourse', grind?.bestCourse)
  );

  if (mode === Mode.TimeTrial) {
    DOM.grindCategories.append(
      createGrindRow('Best Lap', 'bestLap', grind?.bestLap),
      createGrindRow('Best in Course', 'bestLapInCourse', grind?.bestLapInCourse),
      createGrindRow('Best SL', 'bestSL', grind?.bestSL),
      createGrindRow('Best Pace', 'bestPace', grind?.bestPace)
    );
  }
}

function createCategoryHeaderCell(title) {
  const th = document.createElement('th');
  th.appendChild(createSpan('orange', title));
  return th;
}

function createTypeCell(title) {
  const td = document.createElement('td');
  td.appendChild(createSpan('orange', title));
  return td;
}

function createCategoryTimeCell(category, type, time, isGoalAchieved = false) {
  const formattedTime = formatOptionalTime(time);

  return createEditableTimeCell({
    displayValue: formattedTime,
    inputValues: [formattedTime],
    isGoalAchieved: type === 'goal' && isGoalAchieved,
    onSave: ({ toggleButton, toggleButtonSpan, editDiv, inputs }) => {
      const parsedTime = parseTimeInput(inputs[0].value);

      if (parsedTime === 0) {
        return;
      }

      saveTime({
        mode: STATE.selectedMode,
        track: STATE.selectedTrack,
        restriction: STATE.selectedRestriction,
        engine: STATE.selectedEngine,
        category,
        type,
        time: parsedTime,
      });

      toggleButtonSpan.textContent = inputs[0].value;
      toggleButton.style.display = 'block';
      editDiv.style.display = 'none';
    },
  });
}

function renderCategoriesTable(categories) {
  const headerCells = [document.createElement('th')];
  const pbCells = [createTypeCell('PB')];
  const wrCells = [createTypeCell('WR')];
  const goalCells = [createTypeCell('Goal')];

  getCurrentCategories().forEach((category) => {
    const data = categories?.[category];
    const pbTime = data?.personalBest;
    const wrTime = data?.worldRecord;
    const goalTime = data?.goal;
    const isGoalAchieved = Boolean(pbTime && goalTime && pbTime < goalTime);

    headerCells.push(createCategoryHeaderCell(category));
    pbCells.push(createCategoryTimeCell(category, 'personalBest', pbTime));
    wrCells.push(createCategoryTimeCell(category, 'worldRecord', wrTime));
    goalCells.push(createCategoryTimeCell(category, 'goal', goalTime, isGoalAchieved));
  });

  DOM.categories.replaceChildren();
  DOM.pbs.replaceChildren();
  DOM.wrs.replaceChildren();
  DOM.goals.replaceChildren();

  DOM.categories.append(...headerCells);
  DOM.pbs.append(...pbCells);
  DOM.wrs.append(...wrCells);
  DOM.goals.append(...goalCells);
}

function render() {
  const metrics = getCurrentMetrics();
  const grind = metrics ? getLastGrind(metrics.grinds) : null;

  renderHeader();
  renderGrindTable(STATE.selectedMode, grind);
  renderCategoriesTable(metrics?.categories);
}

function loadData() {
  loadEvents();
  render();
}

loadData();
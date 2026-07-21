const DATA = readStorage(DATA_KEY);

const DOM = {
  all: {
    emptyBar: document.getElementById('all-goals-empty-bar'),
    filledBar: document.getElementById('all-goals-filled-bar'),
  },
  grindBest: {
    emptyBar: document.getElementById('grind-best-goals-empty-bar'),
    filledBar: document.getElementById('grind-best-goals-filled-bar'),
  },
  relicRace: {
    emptyBar: document.getElementById('relic-race-goals-empty-bar'),
    filledBar: document.getElementById('relic-race-goals-filled-bar'),
  },
  speed: {
    emptyBar: document.getElementById('speed-char-goals-empty-bar'),
    filledBar: document.getElementById('speed-char-goals-filled-bar'),
  },
  accel: {
    emptyBar: document.getElementById('accel-char-goals-empty-bar'),
    filledBar: document.getElementById('accel-char-goals-filled-bar'),
  },
  balanced: {
    emptyBar: document.getElementById('balanced-char-goals-empty-bar'),
    filledBar: document.getElementById('balanced-char-goals-filled-bar'),
  },
  turn: {
    emptyBar: document.getElementById('turn-char-goals-empty-bar'),
    filledBar: document.getElementById('turn-char-goals-filled-bar'),
  },
  skipless: {
    emptyBar: document.getElementById('skipless-goals-empty-bar'),
    filledBar: document.getElementById('skipless-goals-filled-bar'),
  },
  classic: {
    emptyBar: document.getElementById('classic-goals-empty-bar'),
    filledBar: document.getElementById('classic-goals-filled-bar'),
  },
};

const createMetric = () => ({ total: 0, beaten: 0 });

function createMetrics() {
  return {
    all: createMetric(),
    grindBest: createMetric(),
    relicRace: createMetric(),
    speed: createMetric(),
    accel: createMetric(),
    balanced: createMetric(),
    turn: createMetric(),
    skipless: createMetric(),
    classic: createMetric(),
  };
}

function getMetricKey(mode, restriction, engine) {
  if (mode === Mode.RelicRace) {
    return 'relicRace';
  }

  if (mode !== Mode.TimeTrial) {
    return null;
  }

  if (restriction === Restriction.Skipless) {
    return 'skipless';
  }

  if (restriction === Restriction.Classic) {
    return 'classic';
  }

  const engineMap = {
    [Engine.GrindBest]: 'grindBest',
    [Engine.Speed]: 'speed',
    [Engine.Acceleration]: 'accel',
    [Engine.Balanced]: 'balanced',
    [Engine.Turn]: 'turn',
  };

  return engineMap[engine] ?? null;
}

function isGoalBeaten(personalBest, goal) {
  return Boolean(personalBest) && (!goal || personalBest < goal);
}

function updateMetric(metric, beaten) {
  metric.total += 1;

  if (beaten) {
    metric.beaten += 1;
  }
}

function getPercentage(beaten, total) {
  if (total === 0) return '0.00';
  return ((beaten * 100) / total).toFixed(2);
}

function renderProgressBar({ emptyBar, filledBar }, metric) {
  const percentage = getPercentage(metric.beaten, metric.total);

  filledBar.style.width = `${percentage}%`;
  emptyBar.querySelector("span").textContent = `${percentage}% - ${metric.beaten}/${metric.total}`;
}

function render() {
  const metrics = createMetrics();

  for (const [mode, tracks] of Object.entries(CHARTS)) {
    for (const [track, restrictions] of Object.entries(tracks)) {
      for (const [restriction, engines] of Object.entries(restrictions)) {
        for (const [engine, categories] of Object.entries(engines)) {
          for (const [_, category] of Object.entries(categories)) {
            const data = DATA?.[mode]?.[track]?.[restriction]?.[engine]?.categories?.[category];
            const beaten = isGoalBeaten(data?.personalBest, data?.goal);
            const metricKey = getMetricKey(mode, restriction, engine);

            updateMetric(metrics.all, beaten);

            if (metricKey) {
              updateMetric(metrics[metricKey], beaten);
            }
          }
        }
      }
    }
  }

  Object.entries(DOM).forEach(([key, elements]) => {
    renderProgressBar(elements, metrics[key]);
  });
}

function loadData() {
  render();
}

loadData();
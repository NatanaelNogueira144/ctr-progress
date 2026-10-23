const CHARTS = Object.values(Mode).reduce((modeAcc, mode) => {
  modeAcc[mode] = Object.values(Track).reduce((trackAcc, track) => {
    trackAcc[track] = TRACK_CATEGORIES[track].reduce((categoryAcc, category) => {
      categoryAcc[category] = Object.values(Engine).reduce((engineAcc, engine) => {
        engineAcc[engine] = Object.values(RunType);

        return engineAcc;
      }, {});

      return categoryAcc;
    }, {});

    return trackAcc;
  }, {});

  return modeAcc;
}, {});
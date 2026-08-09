const CHARTS = Object.values(Mode).reduce((modeAcc, mode) => {
  modeAcc[mode] = Object.values(Track).reduce((trackAcc, track) => {
    trackAcc[track] = TRACK_RESTRICTIONS[track].reduce((restrictionAcc, restriction) => {
      restrictionAcc[restriction] = Object.values(Engine).reduce((engineAcc, engine) => {
        engineAcc[engine] = Object.values(Category);

        return engineAcc;
      }, {});

      return restrictionAcc;
    }, {});

    return trackAcc;
  }, {});

  return modeAcc;
}, {});
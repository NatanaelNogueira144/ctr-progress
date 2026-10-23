(function () {
  const CURRENT_VERSION = '0.1.3';

  const STORAGE_KEYS = {
    settings: SETTINGS_KEY,
    data: DATA_KEY,
    selected: STORAGE_KEY,
    version: VERSION_KEY,
  };

  function renameKeys(value, renames) {
    if (Array.isArray(value)) {
      return value.map(item => renameKeys(item, renames));
    }

    if (value === null || typeof value !== 'object') {
      return value;
    }

    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        renames[key] ?? key,
        renameKeys(item, renames),
      ])
    );
  }

  function migrateSettings(settings) {
    const {
      transparentBackground,
      ...rest
    } = settings;

    return {
      background: transparentBackground
        ? 'transparent'
        : 'animated',
      ...rest,
    };
  }

  function migrateData(data) {
    const skiplessTracks = new Set([
      "Roo's Tubes",
      'Tiger Temple',
      'Coco Park',
      'Mystery Caves',
      'Sewer Speedway',
      'Dingo Canyon',
      'Dragon Mines',
      'Cortex Castle',
      'N. Gin Labs',
      'Turbo Track',
    ]);

    const classicSkipsTracks = new Set([
      'Blizzard Bluff',
      'Polar Pass',
    ]);

    const renames = {
      'No Restriction': 'All Skips',
      'Grind Best': 'All Engines',
      categories: 'runTypes',
      Classic: 'Classic Skips',
    };

    const migratedData = {};

    for (const [mode, tracks] of Object.entries(data ?? {})) {
      migratedData[mode] = {};

      for (const [track, restrictions] of Object.entries(tracks ?? {})) {
        const migratedRestrictions = {};

        for (const [restriction, engines] of Object.entries(
          restrictions ?? {}
        )) {
          let newRestriction = restriction;

          if (skiplessTracks.has(track)) {
            if (
              restriction === 'No Restriction' ||
              restriction === 'All Skips'
            ) {
              newRestriction = 'Skipless';
            }
          } else if (track === 'Crash Cove') {
            if (
              restriction === 'Classic' ||
              restriction === 'Classic Skips'
            ) {
              newRestriction = 'All Skips';
            }
          } else if (classicSkipsTracks.has(track)) {
            if (
              restriction === 'No Restriction' ||
              restriction === 'All Skips'
            ) {
              newRestriction = 'Classic Skips';
            }
          }

          const renamedEngines = renameKeys(engines, renames);

          migratedRestrictions[newRestriction] = {
            ...(migratedRestrictions[newRestriction] ?? {}),
            ...renamedEngines,
          };
        }

        migratedData[mode][track] = migratedRestrictions;
      }
    }

    return migratedData;
  }

  function migrateSelected(selected) {
    const {
      restriction,
      engine,
      ...rest
    } = selected;

    const categoryRenames = {
      'No Restriction': 'All Skips',
      Classic: 'Classic Skips',
    };

    return {
      ...rest,
      category:
        categoryRenames[restriction] ?? restriction,
      engine:
        engine === 'Grind Best'
          ? 'All Engines'
          : engine,
    };
  }

  const MIGRATIONS = {
    '0.1.3': ({ settings, data, selected }) => ({
      settings: migrateSettings(settings),
      data: migrateData(data),
      selected: migrateSelected(selected),
    }),
  };

  function updateStorage() {
    let version = readStorage(STORAGE_KEYS.version);

    let settings = readStorage(STORAGE_KEYS.settings);
    let data = readStorage(STORAGE_KEYS.data);
    let selected = readStorage(STORAGE_KEYS.selected);

    // Old instalations without registered version.
    if (!version) {
      version = '0.1.2';
    }

    const migration = MIGRATIONS[CURRENT_VERSION];

    if (version !== CURRENT_VERSION && migration) {
      ({ settings, data, selected } = migration({
        settings,
        data,
        selected,
      }));

      version = CURRENT_VERSION;
    }

    writeStorage(STORAGE_KEYS.settings, settings);
    writeStorage(STORAGE_KEYS.data, data);
    writeStorage(STORAGE_KEYS.selected, selected);
    writeStorage(STORAGE_KEYS.version, version);
  }

  updateStorage();
})();

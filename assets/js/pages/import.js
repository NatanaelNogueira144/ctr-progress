(function () {
  const GRIND_DEFAULT_KEY = "default";

  const CATEGORY_HEADERS = [
    "Mode",
    "Track",
    "Restriction",
    "Engine",
    "Category",
    "Personal Best",
    "Goal",
    "World Record"
  ];

  const GRIND_HEADERS = [
    "Mode",
    "Track",
    "Restriction",
    "Engine",
    "Best Course",
    "Best Lap",
    "Best Lap in Course",
    "Best SL",
    "Best Pace"
  ];

  function parseCsv(csvContent) {
    const rows = [];
    let row = [];
    let value = "";
    let insideQuotes = false;

    for (let index = 0; index < csvContent.length; index++) {
      const character = csvContent[index];
      const nextCharacter = csvContent[index + 1];

      if (character === '"') {
        if (insideQuotes && nextCharacter === '"') {
          value += '"';
          index++;
          continue;
        }

        insideQuotes = !insideQuotes;
        continue;
      }

      if (character === "," && !insideQuotes) {
        row.push(value);
        value = "";
        continue;
      }

      if (
        (character === "\n" || character === "\r") &&
        !insideQuotes
      ) {
        if (character === "\r" && nextCharacter === "\n") {
          index++;
        }

        row.push(value);
        rows.push(row);

        row = [];
        value = "";

        continue;
      }

      value += character;
    }

    if (value.length > 0 || row.length > 0) {
      row.push(value);
      rows.push(row);
    }

    return rows.filter(row =>
      row.some(value => value.trim() !== "")
    );
  }

  function normalizeRows(rows) {
    if (rows.length === 0) {
      return [];
    }

    const [headers, ...dataRows] = rows;

    const normalizedHeaders = headers.map(normalizeValue);

    return dataRows.map(row => {
      const item = {};

      normalizedHeaders.forEach((header, index) => {
        item[header] = normalizeValue(row[index]);
      });

      return item;
    });
  }

  function normalizeValue(value) {
    return String(value ?? "").replace(/^\uFEFF/, "").trim();
  }

  function nullableValue(value) {
    return value === "" ? null : value;
  }

  function parseTime(value) {
    const normalizedValue = nullableValue(value);

    if (normalizedValue === null) {
      return null;
    }

    return parseTimeInput(normalizedValue);
  }

  function parsePace(value) {
    const normalizedValue = nullableValue(value);

    if (normalizedValue === null) {
      return null;
    }

    return normalizedValue.split(' + ').map(v => parseTimeInput(v));
  }

  function getEngine(data, row) {
    data[row.Mode] ??= {};
    data[row.Mode][row.Track] ??= {};
    data[row.Mode][row.Track][row.Restriction] ??= {};
    data[row.Mode][row.Track][row.Restriction][row.Engine] ??= {
      categories: {},
      grinds: []
    };

    const engine = data[row.Mode][row.Track][row.Restriction][row.Engine];

    engine.categories ??= {};
    engine.grinds ??= [];

    return engine;
  }

  function importCategoryRows(data, rows) {
    for (const row of rows) {
      if (
        !row.Mode ||
        !row.Track ||
        !row.Restriction ||
        !row.Engine ||
        !row.Category
      ) {
        continue;
      }

      const engine = getEngine(data, row);

      engine.categories[row.Category] = {
        personalBest: parseTime(row["Personal Best"]),
        goal: parseTime(row.Goal),
        worldRecord: parseTime(row["World Record"])
      };
    }
  }

  function importGrindRows(data, rows) {
    for (const row of rows) {
      if (
        !row.Mode ||
        !row.Track ||
        !row.Restriction ||
        !row.Engine
      ) {
        continue;
      }

      const engine = getEngine(data, row);
      engine.grinds = [];

      engine.grinds.push({
        bestCourse: parseTime(row["Best Course"]),
        bestLap: parseTime(row["Best Lap"]),
        bestLapInCourse: parseTime(row["Best Lap in Course"]),
        bestSL: parseTime(row["Best SL"]),
        bestPace: parsePace(row["Best Pace"])
      });
    }
  }

  function readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = event => {
        resolve(event.target.result);
      };

      reader.onerror = () => {
        reject(new Error("It was not possible to read the CSV file."));
      };

      reader.readAsText(file, "UTF-8");
    });
  }

  function saveData(data) {
    writeStorage(DATA_KEY, data);
  }

  async function importCsvFile(file, importRows) {
    const csvContent = await readFile(file);
    const parsedRows = parseCsv(csvContent);
    const rows = normalizeRows(parsedRows);

    const data = readStorage(DATA_KEY) ?? {};

    importRows(data, rows);
    saveData(data);

    return data;
  }

  function bindImportButton(inputId, importRows, successMessage) {
    const input = document.getElementById(inputId);

    if (!input) {
      return;
    }

    input.addEventListener("change", async event => {
      const [file] = event.target.files;

      if (!file) {
        return;
      }

      try {
        if (confirm('Are you sure to proceed?')) {
          await importCsvFile(file, importRows);

          alert(successMessage);
        }
      } catch (error) {
        console.error(error);
        alert("It was not possible to import the CSV file.");
      } finally {
        input.value = "";
      }
    });
  }

  bindImportButton(
    "import-category-csv",
    importCategoryRows,
    "Category data imported successfully."
  );

  bindImportButton(
    "import-grind-csv",
    importGrindRows,
    "Grind data imported successfully."
  );
})();
(function () {
  const EXPORTS = {
    category: {
      fileName: "CTRProgressCategoryData",
      sheetName: "CTR Progress Category",
      collection: "categories",
      headers: [
        "Mode",
        "Track",
        "Restriction",
        "Engine",
        "Category",
        "Personal Best",
        "Goal",
        "World Record"
      ],
      columnWidths: [
        { wch: 15 },
        { wch: 20 },
        { wch: 20 },
        { wch: 15 },
        { wch: 20 },
        { wch: 15 },
        { wch: 15 },
        { wch: 15 }
      ],
      getRows: getCategoryRows
    },
    grind: {
      fileName: "CTRProgressGrindData",
      sheetName: "CTR Progress Grind",
      collection: "grinds",
      headers: [
        "Mode",
        "Track",
        "Restriction",
        "Engine",
        "Best Course",
        "Best Lap",
        "Best Lap in Course",
        "Best SL",
        "Best Pace"
      ],
      columnWidths: [
        { wch: 15 },
        { wch: 20 },
        { wch: 20 },
        { wch: 15 },
        { wch: 20 },
        { wch: 15 },
        { wch: 15 },
        { wch: 15 },
        { wch: 15 }
      ],
      getRows: getGrindRows
    }
  };

  function forEachMetric(data, collectionName, callback) {
    for (const [mode, tracks] of Object.entries(data)) {
      for (const [track, restrictions] of Object.entries(tracks)) {
        for (const [restriction, engines] of Object.entries(restrictions)) {
          for (const [engine, engineData] of Object.entries(engines)) {
            const collection = engineData[collectionName] ?? {};

            for (const [name, metrics] of Object.entries(collection)) {
              callback({
                mode,
                track,
                restriction,
                engine,
                name,
                metrics
              });
            }
          }
        }
      }
    }
  }

  function getCategoryRows(data) {
    const rows = [];

    forEachMetric(data, "categories", ({
      mode,
      track,
      restriction,
      engine,
      name: category,
      metrics
    }) => {
      rows.push([
        mode,
        track,
        restriction,
        engine,
        category,
        formatOptionalTime(metrics.personalBest, null),
        formatOptionalTime(metrics.goal, null),
        formatOptionalTime(metrics.worldRecord, null)
      ]);
    });

    return rows;
  }

  function getGrindRows(data) {
    const rows = [];

    forEachMetric(data, "grinds", ({
      mode,
      track,
      restriction,
      engine,
      metrics
    }) => {
      rows.push([
        mode,
        track,
        restriction,
        engine,
        formatOptionalTime(metrics.bestCourse, null),
        formatOptionalTime(metrics.bestLap, null),
        formatOptionalTime(metrics.bestLapInCourse, null),
        formatOptionalTime(metrics.bestSL, null),
        metrics.bestPace
          ? formatPace(metrics.bestPace)
          : null
      ]);
    });

    return rows;
  }

  function downloadFile(content, fileName, mimeType) {
    const blob = new Blob([content], {
      type: `${mimeType};charset=utf-8;`
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = fileName;
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 0);
  }

  function escapeCsvValue(value) {
    const stringValue = String(value ?? "");

    if (!/[",\r\n]/.test(stringValue)) {
      return stringValue;
    }

    return `"${stringValue.replace(/"/g, '""')}"`;
  }

  function rowsToCsv(rows) {
    return [
      "\uFEFF",
      rows.map(row => row.map(escapeCsvValue).join(",")).join("\r\n")
    ].join("");
  }

  function exportCsv(data, exportConfig) {
    const rows = [
      exportConfig.headers,
      ...exportConfig.getRows(data)
    ];

    const csvContent = rowsToCsv(rows);

    downloadFile(csvContent, `${exportConfig.fileName}.csv`, "text/csv");
  }

  function exportXlsx(data, exportConfig) {
    const rows = [
      exportConfig.headers,
      ...exportConfig.getRows(data)
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(rows);

    worksheet["!cols"] = exportConfig.columnWidths;

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, exportConfig.sheetName);

    XLSX.writeFile(workbook, `${exportConfig.fileName}.xlsx`);
  }

  function bindExportButton(buttonId, exportType, exportConfig, data) {
    const button = document.getElementById(buttonId);

    if (!button) {
      return;
    }

    button.addEventListener("click", () => {
      if (exportType === "csv") {
        exportCsv(data, exportConfig);
        return;
      }

      exportXlsx(data, exportConfig);
    });
  }

  const data = readStorage(DATA_KEY);

  bindExportButton("export-category-csv-button", "csv", EXPORTS.category, data);
  bindExportButton("export-category-xlsx-button", "xlsx", EXPORTS.category, data);
  bindExportButton("export-grind-csv-button", "csv", EXPORTS.grind, data);
  bindExportButton("export-grind-xlsx-button", "xlsx", EXPORTS.grind, data);
})();
function exportWorksheetsToFolderAndZipWithFlex() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheets = ss.getSheets();
  const exportFolder = DriveApp.getFolderById(EXPORT_FOLDER_ID);
  const tempFiles = [];

  for (let sheet of sheets) {
    const sheetName = sheet.getName();
    const values = sheet.getDataRange().getValues();
    const headers = values[0];
    const rows = [];

    for (let i = 1; i < values.length; i++) {
      let row = {};
      for (let j = 0; j < headers.length; j++) {
        row[headers[j]] = values[i][j];
      }
      rows.push(row);
    }

    const json = JSON.stringify(rows, null, 2);
    const jsonFile = exportFolder.createFile(`${sheetName}.json`, json, MimeType.JSON);
    tempFiles.push(jsonFile);

    const sqlLines = rows.map(row => {
      const cols = Object.keys(row);
      const vals = cols.map(k => `'${String(row[k]).replace(/'/g, "''")}'`);
      return `INSERT INTO pali_texts (${cols.join(', ')}) VALUES (${vals.join(', ')});`;
    });
    const sql = sqlLines.join('\n');
    const sqlFile = exportFolder.createFile(`${sheetName}.sql`, sql, MimeType.PLAIN_TEXT);
    tempFiles.push(sqlFile);
  }

  const today = new Date();
  const timestamp = Utilities.formatDate(today, Session.getScriptTimeZone(), 'yyyyMMdd');
  const zipName = `pali_export_${timestamp}.zip`;
  const zipBlob = Utilities.zip(tempFiles.map(f => f.getBlob()), zipName);
  const zipFile = exportFolder.createFile(zipBlob);
  const zipUrl = zipFile.getUrl();

  Logger.log('✅ Exported ZIP: ' + zipName);
  pushFlexToLine(zipUrl);
}
function createDailyTrigger() {
  ScriptApp.newTrigger('exportWorksheetsToFolderAndZipWithFlex')
    .timeBased()
    .everyDays(1)
    .atHour(3)
    .create();
}
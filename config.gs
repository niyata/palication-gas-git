function getConfig() {
  const props = PropertiesService.getScriptProperties();
  return {
    SHEET_ID: props.getProperty('SHEET_ID'),
    EXPORT_FOLDER_ID: props.getProperty('EXPORT_FOLDER_ID'),
    CHANNEL_ACCESS_TOKEN: props.getProperty('CHANNEL_ACCESS_TOKEN'),
    USER_ID: props.getProperty('USER_ID'),
    GROUP_ID: props.getProperty('GROUP_ID'),
  };
}

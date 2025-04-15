function extractTextFromPDF(blob) {
  const resource = {
    title: blob.getName(),
    mimeType: MimeType.GOOGLE_DOCS
  };
  const file = Drive.Files.insert(resource, blob);
  const doc = DocumentApp.openById(file.id);
  const text = doc.getBody().getText();
  DriveApp.getFileById(file.id).setTrashed(true);
  return text;
}
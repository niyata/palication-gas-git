function convertThaiDigits(thaiNum) {
  const thaiDigits = '๐๑๒๓๔๕๖๗๘๙';
  return thaiNum.replace(/[๐-๙]/g, d => thaiDigits.indexOf(d));
}

function isFootnote(line) {
  const trimmed = line.trim();
  const startsWithThaiNumber = /^[๑๒๓๔๕๖๗๘๙]+[\.)\s]/.test(trimmed);
  const startsWithArabicNumber = /^\(?\d+\)?[\.)\s]/.test(trimmed);
  const shortLine = trimmed.length < 100;
  return (startsWithThaiNumber || startsWithArabicNumber) && shortLine;
}

function isWatthuHeader(line) {
  const trimmed = line.trim();
  return /^(เรื่องที่\s*\d+.*วตฺถุ\s*\[\d+\])|(^\d+\.\s.*วตฺถุ\s*\[\d+\])/.test(trimmed);
}

function isNewParagraph(lines, index) {
  if (index === 0) return true;
  const prevLine = lines[index - 1].trim();
  return prevLine === '';
}
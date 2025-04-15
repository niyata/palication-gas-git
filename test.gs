function runTests() {
  const tap = GasTap();

  tap.test("convertThaiDigits() แปลงเลขไทยเป็นเลขอารบิก", (t) => {
    const result = convertThaiDigits("๑๒๓๔๕๖๗๘๙๐");
    t.equal(result, "1234567890", "ผลลัพธ์ถูกต้อง");
  });

  tap.test("isFootnote() ตรวจจับ footnote", (t) => {
    const line = "๑. นี่คือเชิงอรรถ";
    t.ok(isFootnote(line), "ควรตรวจจับเป็น footnote");
  });

  tap.finish();
}
function runAllUnitTests() {
  runTests();
}

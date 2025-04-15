function GasTap() {
  var tests = [];
  var count = 0;
  var passed = 0;
  var failed = 0;

  function test(name, func) {
    count++;
    try {
      func({
        equal: function (a, b, msg) {
          if (a === b) {
            passed++;
            Logger.log("✔ " + name + ": " + msg);
          } else {
            failed++;
            Logger.log("✘ " + name + ": " + msg + " (Expected: " + b + ", Got: " + a + ")");
          }
        },
        ok: function (val, msg) {
          if (val) {
            passed++;
            Logger.log("✔ " + name + ": " + msg);
          } else {
            failed++;
            Logger.log("✘ " + name + ": " + msg + " (Got: " + val + ")");
          }
        }
      });
    } catch (e) {
      failed++;
      Logger.log("✘ " + name + ": Error - " + e.message);
    }
  }

  function finish() {
    Logger.log("✅ ผ่าน: " + passed + "/" + count + " | ❌ ไม่ผ่าน: " + failed);
  }

  return {
    test: test,
    finish: finish
  };
}
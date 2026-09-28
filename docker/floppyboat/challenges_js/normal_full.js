(sendJsonMessage, done) => {
  let watchInterval = null;
  function watchDevTools() {
    var minimalUserResponseInMiliseconds = 100;
    var before = new Date().getTime();
    debugger;
    var after = new Date().getTime();
    if (after - before > minimalUserResponseInMiliseconds) {
      // user had to resume the script manually via opened dev tools
      sendJsonMessage({
        type: "b",
        num: 2,
      });
      clearInterval(watchInterval);
    }
  }

  function normalCipher(text) {
    return text
      .split("")
      .map((c) => {
        const code = c.charCodeAt(0);
        return String.fromCharCode(((code - 32 + 95) % 95) + 32);
      })
      .join("");
  }

  sendJsonMessage({
    type: "challenge",
    challenge: normalCipher("{CONTENT}"),
  });

  watchInterval = setInterval(watchDevTools, 1000);
  done();
};

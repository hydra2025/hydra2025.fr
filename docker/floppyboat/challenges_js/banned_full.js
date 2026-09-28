(sendJsonMessage, done) => {
  function normalCipher(text) {
    return text
      .split("")
      .map((c) => {
        const code = c.charCodeAt(0);
        return String.fromCharCode(((code - 32 + 95) % 95) + 32);
      })
      .join("");
  }

  if (false) {
    sendJsonMessage({
      type: "b",
      num: 1,
    });
  }

  sendJsonMessage({
    type: "challenge",
    challenge: normalCipher("{CONTENT}"),
  });
  done();
};

function puppeteer(conf) {
  return {
    // Hook into lifecycle
    console.log("test")
    onEnd: () => {
      console.log("site build finished, site deployed! 🚀");
      console.log(conf);
    }
  };
}

module.exports = puppeteer;

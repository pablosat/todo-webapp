function puppeteer(conf) {
  return {
    // Hook into lifecycle
    onEnd: () => {
      console.log("site build finished, site deployed! 🚀");
      console.log(conf);
    }
  };
}

module.exports = puppeteer;

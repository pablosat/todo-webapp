const customPlugin = (conf) => {
  return {
    onEnd: () => {
      console.log(conf);
      console.log("on end callback executed in custom plugin! 🚀");
    }
  };
};

module.exports = customPlugin;

module.exports = {
  chainWebpack: config => {
    config.entry('app').clear().add('./examples/main.ts').end();
  },
};

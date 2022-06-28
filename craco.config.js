const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./src",
        aliases: {
          "@atoms": "components/atoms",
          "@molecules": "components/molecules",
          "@organisms": "components/organisms",
        },
      },
    },
  ],
};

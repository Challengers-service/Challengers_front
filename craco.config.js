const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./src",
        aliases: {
          "@common": "components/@common",
          "@layouts": "components/layouts",
          "@components": "components",
          "@hooks": "hooks",
          "@contexts": "contexts",
          "@constants": "constants",
          "@pages": "pages",
          "@stores": "stores",
        },
      },
    },
  ],
};

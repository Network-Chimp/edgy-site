// Import global styles
require("normalize.css")
require("./src/css/reset.css")
require("./src/css/main.css")
require("./src/prism-styles")

// Expose React and ReactDOM as globals for console playground

// A stub function is needed because gatsby won't load this file otherwise
// (https://github.com/gatsbyjs/gatsby/issues/6759)
exports.onClientEntry = () => {}

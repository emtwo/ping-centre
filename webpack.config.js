module.exports = {
  entry: "./src/ping-centre.js",
  output: {
    path: "./dist",
    filename: "ping-centre.min.js",
    // exports entry file to a glboal variable
    libraryTarget: "var",
    // name of the global variable
    library: "Ping-Centre"
  },
};

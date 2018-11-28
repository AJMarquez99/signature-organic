module.exports = {
  //The transform section tells Jest that all js or jsx files need to be transformed using a jest-preprocess.js file in the project root
  "transform": {
    "^.+\\.jsx?$": "<rootDir>/jest-preprocess.js"
  },
  //Tells Jest how to handle imports (Jest cant handle static file imports)
  "moduleNameMapper": {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js"
  },
  // The reason that you need transformIgnorePatterns is because Gatsby includes un-transpiled ES6 code.
  "testPathIgnorePatterns": ["node_modules", ".cache"],
  "transformIgnorePatterns": ["node_modules/(?!(gatsby)/)"],
  "globals": {
    "__PATH_PREFIX__": ""
  },
  "testURL": "http://localhost",
  "setupFiles": ["<rootDir>/loadershim.js"]
}
// config help found at https://www.gatsbyjs.org/docs/unit-testing

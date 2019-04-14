module.exports = () => ({
  plugins: [
    require("@babel/plugin-proposal-do-expressions"),
    require("@babel/plugin-proposal-export-default-from"),
    require("@babel/plugin-proposal-export-namespace-from"),
    require("@babel/plugin-proposal-optional-chaining"),
    require("@babel/plugin-proposal-numeric-separator"),
    require("@babel/plugin-proposal-nullish-coalescing-operator"),
    require("@babel/plugin-proposal-logical-assignment-operators"),
    [
      require("@babel/plugin-proposal-pipeline-operator"),
      {
        proposal: "minimal"
      }
    ]
  ]
})

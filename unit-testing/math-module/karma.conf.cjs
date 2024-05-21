module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'spec/**/*.spec.js'
    ],
    preprocessors: {
      'spec/**/*.spec.js': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: []
      },
      resolve: {
        extensions: ['.js']
      }
    },
    browsers: ['Chrome'],
    singleRun: true,
    reporters: ['progress'],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-webpack',
    ],
  });
};

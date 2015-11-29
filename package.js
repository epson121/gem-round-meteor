Package.describe({
  name: 'epson121:gem-round-meteor',
  version: '0.0.1',
  summary: "Wrapper for round-npm gem.co bitcoin API",
  git: "https://github.com/epson121/gem-round-meteor"
  documentation: 'README.md'
});

Npm.depends({
  "round-npm": "0.5.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.use('ecmascript');
  api.addFiles('lib/gem-round-meteor.js');
  api.export('Round');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('epson121:gem-round-meteor');
  api.addFiles('tests/gem-round-meteor-tests.js');
});

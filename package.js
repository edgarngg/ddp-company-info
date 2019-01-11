Package.describe({
  name: 'igoandsee:ddp-company-info',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript');
  api.use('igoandsee:action-collection');
  api.use('igoandsee:company-info-collection');
  api.mainModule('ddp-company-info.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('igoandsee:ddp-company-info');
  api.mainModule('ddp-company-info-tests.js');
});

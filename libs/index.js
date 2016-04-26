System.defaultJSExtensions = true;

System.config({
  baseUrl: '/',
  packages: {
    'vtex.banner@1.0.0': {
      map: {
        'npm.lodash': 'npm.lodash@1.3.0'
      }
    },
    'n1.shelf@0.7.1': {
      map: {
        'npm.lodash': 'npm.lodash@2.0.1'
      }
    },
    'vtex.sdk@1.0.0': {
      map: {
        'vtex.banner': 'vtex.banner@1.0.0',
        'n1.shelf': 'n1.shelf@0.7.1'
      }
    }
  },
  map: {
    'vtex.react': 'vtex.react@0.14.0'
  },
  meta: {
    'vtex.react/*': {
      format: 'amd'
    }
  }
})

System.import('./vtex.sdk@1.0.0/index.js');

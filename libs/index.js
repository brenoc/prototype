System.config({defaultJSExtensions: true});

System.config({
  baseUrl: '/',
  packageConfigPaths: [
    'brenoc.theme@3.5.0/meta.json',
    'vtex.banner@1.0.0/meta.json',
    'n1.shelf@0.7.1/meta.json',
    'vtex.sdk@1.0.0/meta.json'
  ],
  map: {
    'react': 'npm.react@0.14.0/react.js' // this avoids changing the source of React
  }
})

window.storefront = {
  route: 'home',
  settings: [
    {
      area: 'home',
      data: {
        component: 'vtex.sdk@1.0.0/Root',
        settings: null
      }
    },
    {
      area: 'home/content',
      data: {
        component: 'brenoc.theme@3.5.0/DefaultTemplate',
        settings: null
      }
    },
    {
      area: 'home/content/body',
      data: {
        component: 'brenoc.theme@3.5.0/HomePage',
        settings: null
      }
    },
    {
      area: 'home/content/body/banner',
      data: {
        component: 'vtex.banner@1.0.0/Banner',
        settings: {
          foo: 'bar'
        }
      }
    },
    {
      area: 'home/content/body/shelf',
      data: {
        component: 'n1.shelf@0.7.1/Shelf',
        settings: {
          bar: 'foo'
        }
      }
    }
  ]
}

System.import('./vtex.sdk@1.0.0/index.js');

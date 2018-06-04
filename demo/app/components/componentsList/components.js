import { List, Map } from 'immutable'

export default function getComponents () {
  return List([
    Map({
      name: 'NavBar',
      configuration: {},
      description: 'Navbar that contains both a desktop navbar and a mobile navbar depending on screen size',
      props: {
        onLogout: () => { console.log('logouturu') },
        siteDescription: 'preview',
        options: Map({
          links: List([
            Map({
              to: '/',
              route: 'Home',
            }),
            Map({
              to: '/add',
              route: 'Add new bike',
            }),
            Map({
              to: '/bikes',
              route: 'Bikes',
            }),
          ]),
          actions: List([
            Map({
              action: () => { console.log('hit logout')},
              name: 'Log out',
            }),
          ]),
        })
      }
    }),
    Map({
      name: 'bikegrid',
    }),
    Map({
      name: 'biketile',
    }),
    Map({
      name: 'instagramlink',
    })
  ])
}

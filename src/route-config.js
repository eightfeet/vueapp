export function configRouter (router) {
  // normal routes
  router.map({
    // basic example
    '/about': {
      // the component can also be a plain string component id,
      // but a component with that id must be available in the
      // App component's scope.
      component: require('./components/about/about.vue'),
      subRoutes: {
        'about_me': {
          component: require('./components/about/about_me.vue'),
          about_me: true
        }
      }
    },

    // nested example
    '/user/:userId': {
      component: require('./components/user/index.vue'),
      subRoutes: {
        '/': {
          component: {
            template: '<p>特特</p>'
          }
        },
        // matches "/user/:userId/profile/:something"
        'profile/:something': {
          component: require('./components/user/profile.vue')
        },
        // matches "/user/:userId/posts"
        'posts': {
          component: require('./components/user/posts.vue')
        },
        // matches "/user/:userId/settings"
        'settings': {
          component: require('./components/user/settings.vue')
        }
      }
    },

    // not found handler
    '*': {
      component: require('./components/not-found.vue')
    },

    // advanced example
    '/index': {
      component: require('./components/index/index.vue'),
      subRoutes: {
        '/message/:messageId': {
          component: require('./components/index/message.vue')
        },
        '/archived': {
          component: require('./components/index/archive.vue')
        },
        // default component to render into the nested outlet
        // when the parent route is matched but there's no
        // nested segment. In this case, "/index".
        '/': {
          // inline component
          component: {
            template: 'default yo'
          }
        }
      }
    }
  })

  // redirect
  router.redirect({
    '/info': '/about',
    '/hello/:userId': '/user/:userId'
  })

  // global before
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  router.beforeEach((transition) => {
    if (transition.to.path === '/forbidden') {
      router.app.authenticating = true
      setTimeout(() => {
        router.app.authenticating = false
        transition.abort()
      }, 3000)
    } else {
      transition.next()
    }
  })
}

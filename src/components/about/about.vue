<template>
  <div>
    <h2>ABOUT US...</h2>
     <a v-link="{ path: '/about/about_me' }">aboutMe{{message}}</a>
     <p>{{val}}</p>
     <br/><br/>
     <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<script>
module.exports = {
  route: {
    // three options:
    // 1. return a boolean
    // 2. return a promise that resolves to a boolean
    // 3. explicitly call transition.next() or abort()
    // canActivate (transition) {
    //   if (transition.from.path === '/about') {
    //   // alert('cannot navigate from /about to /inbox')
    //     transition.next()
    //   } else {
    //     console.log('yes')
    //     transition.next()
    //   }
    // },

    // activate (transition) {
    //   var promise = new Promise(
    //     (resolve, reject) => {
    //       resolve('test data')
    //     }
    //   )
    //   return promise
    //   .then((data) => {
    //     // console.log('111', transition)
    //     transition.redirect('/about')
    //   })
    //   .catch(() => {
    //     console.log('禁止跳转')
    //     // transition.redirect('/user/1234')
    //   })
    //   // transition.redirect('/user/1234/profile/what')
    // },
    data (transition) {
      setTimeout(function () {
        transition.next({
          message: '改变了message数据',
          val: 'val!'
        })
      }, 2000)
    }
  },

  data () {
    return {
      message: '111111',
      val: 'this is val!'
    }
  }
}
</script>

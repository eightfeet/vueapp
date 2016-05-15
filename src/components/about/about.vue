<template>
  <div>
    <h4 class="gray">预约页面</h4>
    <div class="w3-3-3">
      <buttonbar
        v-touch:tap="handlerSubRouter"
        class="mgb1 w3"
        small="true"
        setstyle="b">
        子路由
      </buttonbar>
    </div>
    <span class="gray">{{message}}</span>
     <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<script>
import buttonbar from '../publick/button.vue'
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
          message: '路由激活改变了message数据',
          val: 'val!'
        })
      }, 2000)
    }
  },
  methods: {
    handlerSubRouter () {
      this.$route.router.go('/about/about_me')
    }
  },
  data () {
    return {
      message: 'message默认数据',
      val: 'this is val!'
    }
  },
  components: {
    buttonbar
  }
}
</script>

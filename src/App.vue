<style lang="less">
  @import "less/main.less";
  .warp{
    padding-top:3rem;
  }
  .view {
    transition: all .5s ease;
  }
  .test-enter, .test-leave {
    opacity: 0;
    transform: translate3d(20px, 0, 0);
  }
  .v-link-active {
  }
  [v-cloak] {
    display: none;
  }
</style>

<template>
  <headerbar
  class="white fz-m"
  :lefticonname= "lefticonname"
  :handlerlefticon= "actionback"
  :title="apptitle"
  ></headerbar>
  <loading
    :show="authenticating"
    :loadersize="loadersize"
    :top="loadertop"
    ></loading>
  <div class="warp">
    <div class="maincontent pdt1 pr">
      <a class="mainbtn_small_b" v-touch:tap="handlerToAbout">Tap About!</a><br>
      <a class="mainbtn_small_b mgt-5" v-touch:tap="handlerToIndex">To Index!</a>
      <a class="mainbtn_small_b" v-link="{ path: '/index/message/123' }">index</a>
      <a v-link="{ path: '/about' }">about</a>
      <a v-link="{ path: '/user/1234/profile/what' }">user</a>
      <a v-link="{ path: '/forbidden' }">forbidden</a>
      <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
    </div>
    <p>&nbsp;</p>

  </div>
</template>

<script>
import headerbar from './components/publick/header.vue'
import loading from './components/publick/loading.vue'

export default {
  data () {
    return {
      authenticating: false,
      loadertop: 3,
      loadersize: 3,
      lefticonname: 'icon-search',
      righticonname: 'icon-th-list',
      apptitle: '首页'
    }
  },
  methods: {
    handlerToAbout () {
      this.$route.router.go('/about')
    },
    handlerToIndex () {
      this.$route.router.go('/index/message/123')
    },
    actionback () {
      window.history.back()
    }
  },
  replace: false,
  components: {
    headerbar,
    loading
  }
}
</script>

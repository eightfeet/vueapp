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
  >{{apptitle}}</headerbar>
  <loading
    :show="authenticating"
    :loadersize="loadersize"
    :top="loadertop"
    ></loading>
  <div class="warp">
    <div class="maincontent pdt1 pr">
      <!-- <buttonbar
        class="icon-left al-l mgb1"
        disable="false"
        setstyle="a"
        small="true"
        iconfixedright="true">
        菜单
      </buttonbar> -->
      <buttonbar
        v-touch:tap="handlerToAbout"
        class="icon-right al-l mgb1"
        setstyle="b"
        iconfixedright="true">
        一键预约
      </buttonbar>
      <buttonbar
        v-touch:tap="handlerLoadingtest"
        class="icon-stopwatch al-l mgb1"
        setstyle="b"
        iconfixedright="true">
        模拟加载
      </buttonbar>
      <buttonbar
        v-touch:tap="handlerLoadingtest"
        class="icon-attention-alt al-l mgb1"
        setstyle="b"
        iconfixedright="true">
        模拟弹出窗口
      </buttonbar>
      <!-- <a class="mainbtn_small_b" v-touch:tap="handlerToAbout">Tap About!</a><br>
      <a class="mainbtn_small_b mgt-5" v-touch:tap="handlerToIndex">To Index!</a>
      <a class="mainbtn_small_b" v-link="{ path: '/index/message/123' }">index</a>
      <a v-link="{ path: '/about' }">about</a>
      <a v-link="{ path: '/user/1234/profile/what' }">user</a>
      <a v-link="{ path: '/forbidden' }">forbidden</a> -->
      <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
    </div>
    <p>&nbsp;</p>

  </div>
</template>

<script>
import headerbar from './components/publick/header.vue'
import loading from './components/publick/loading.vue'
import buttonbar from './components/publick/button.vue'

export default {
  data () {
    return {
      authenticating: false,
      loadertop: 3,
      loadersize: 3,
      lefticonname: 'icon-left-1',
      righticonname: 'icon-th-list',
      apptitle: '预约营养师'
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
    },
    handlerLoadingtest () {
      this.$route.router.go('/forbidden')
    }
  },
  replace: false,
  components: {
    headerbar,
    loading,
    buttonbar
  }
}
</script>

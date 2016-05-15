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
      <div class="gray fz-m pdb1">路由</div>
      <div class="clearfix">
        <div class="w3-3-3 fl">
          <div class="mcenter w9-5">
            <buttonbar
              v-touch:tap="handlerToIndex"
              class="icon-home mgb1"
              setstyle="b">
              首页
            </buttonbar>
          </div>
        </div>
        <div class="w3-3-3 fl">
          <div class="mcenter w9-5">
            <buttonbar
              v-touch:tap="handlerToAbout"
              class="icon-clock mgb1"
              setstyle="b">
              预约
            </buttonbar>
          </div>
        </div>
        <div class="w3-3-3 fr">
          <div class="mcenter w9-5">
            <buttonbar
              v-touch:tap="handlerToUser"
              class="icon-user mgb1"
              setstyle="b">
              个人中心
            </buttonbar>
          </div>
        </div>
      </div>
      <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
      <br><br>
      <div class="gray fz-m pdb1">公共</div>
      <buttonbar
        v-touch:tap="handlerLoadingtest"
        class="icon-stopwatch al-l mgb1"
        setstyle="b"
        iconfixedright="true">
        模拟加载
      </buttonbar>
      <buttonbar
        v-touch:tap="showModal = true"
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
      <!-- use the modal component, pass in the prop -->
      <modal :show.sync="showModal">
        <h3 slot="header" class="fz-ll cyan al-c pdt2 icon-attention-alt">确认</h3>
        <div slot="body" class="al-c fz-m lh-s pdt1 pdb1">
          请确认您预约的时间段<br><span class="cyan">2016年05月15日上午9:00</span>
          <br>
        </div>
        <div slot="footer">
          <div class="clearfix w9-2 mcenter">
            <div class="w4-5 fl">
              <buttonbar
                v-touch:tap="handlerOk"
                class="mgb1 icon-ok">
                确定
              </buttonbar>
            </div>
            <div class="w4-8 fr">
              <buttonbar
                v-touch:tap="handlerOk"
                class="mgb1">
                取消
              </buttonbar>
            </div>
          </div>
        </div>
      </modal>
    </div>
    <p>&nbsp;</p>

  </div>
</template>

<script>
import headerbar from './components/publick/header.vue'
import modal from './components/publick/modal.vue'
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
      apptitle: '预约营养师',
      showModal: false
    }
  },
  methods: {
    handlerToAbout () {
      this.$route.router.go('/about')
    },
    handlerToIndex () {
      this.$route.router.go('/index/message/123')
    },
    handlerToUser () {
      this.$route.router.go('/user/123/profile/12')
    },
    actionback () {
      window.history.back()
    },
    handlerLoadingtest () {
      this.$route.router.go('/forbidden')
    },
    handlerOk () {
      this.showModal = false
    }
  },
  replace: false,
  components: {
    headerbar,
    loading,
    buttonbar,
    modal
  }
}
</script>

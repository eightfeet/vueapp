<template>
  <div v-show="show" class="loadingbox">
    <div
      class="loading"
      v-bind:style="{
        top:`${top}rem`,
        backgroundSize:`${loadersize}rem`,
      }"
    >
    </div>
  </div>
</template>

<script>
import coerceBoolean from '../utils/coerceBoolean.js'

export default {
  props: {
    show: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    top: {
      type: Number,
      default: 3
    },
    loadersize: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="less">
  //加载
  .loadingbox{
    background-color:rgba(255,255,255,0);
    z-index: 119;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: fixed;
  }
  .loading{
      background-color:#fff;
      position: fixed;
      z-index: 120;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-image: url(../../images/loading.gif);
      background-size:162/24rem;
      background-repeat: no-repeat;
      background-position: center 45%;
  }
</style>

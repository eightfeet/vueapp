<template>
  <div>
    <h3 class="gray">inbox! {{message.text}}</h3>
    <router-view></router-view>
  </div>
</template>

<script>
module.exports = {
  route: {

  },

  data () {
    return {
      message: {}
    }
  }
}
</script>

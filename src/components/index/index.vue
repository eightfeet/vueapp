<template>
  <div>
    <h2>inbox! {{message.text}}</h2>
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

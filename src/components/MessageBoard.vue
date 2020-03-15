<template>
  <div class="main" :style="mainStyle">
    留言板
  </div>
</template>

<script>
export default {
  data () {
    return {
      mainStyle: {
        transform: 'translateY(-10px)',
        opacity: '0'
      }
    }
  },
  mounted () {
    setTimeout(this.init, 0)
  },
  methods: {
    init () {
      this.mainStyle.transform = 'translateY(0px)'
      this.mainStyle.opacity = '1'
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  transition: all 1s;
}
</style>

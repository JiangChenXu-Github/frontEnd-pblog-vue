<template>
  <div class="main markdown-body" :style="mainStyle">
    <blockquote><p><strong>喜欢头铁硬学的江某人</strong></p>
</blockquote>
<p>&nbsp;</p>

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
.markdown-body {
  font-size: 25px;
}
</style>

<template>
  <div class="main markdown-body" :style="mainStyle">
<blockquote><p><strong><em>君子坐而论道，少年起而行之。</em></strong></p>
<p><strong><em>——《剑来》</em></strong></p>
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
.markdown-body {
  font-size: 18px;
  font-weight: bold;
}
.main {
  transition: all 1s;
}
</style>
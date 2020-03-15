<template>
  <div class="main" :style="mainStyle">
    <div class="title">分类</div>
    <div class="content" v-for="clazz in classes" :key="clazz.id">
      <div><i class="el-icon-menu icon" /><a :href="'/#/文档/' + clazz.classification" class="classification">{{clazz.classification}}</a><span>{{clazz.number}}篇</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mainStyle: {
        transform: 'translateY(-10px)',
        opacity: '0'
      },
      classes: []
    }
  },
  mounted () {
    setTimeout(this.init, 0)
    this.initData()
  },
  methods: {
    init () {
      this.mainStyle.transform = 'translateY(0px)'
      this.mainStyle.opacity = '1'
    },
    async initData() {
      const res = (await this.$http.get('classesPath')).data
      this.classes = res
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  transition: all 1s;
}
.title {
  color: #606975;
  font-size: 25px;
  font-weight: bold;
}
.content {
    color: #606975;
    font-size: 20px;
    margin-top: 30px;
    margin-left: 50px;
    .classification {
      border-bottom: 2px solid #606975;
      color: #606975;
      margin-right: 10px;
      transition: all 0.5s;
      font-weight: bold;
    }
    .classification:hover {
      color: #eee;
      background-color: #606975;
      font-weight: bold;
    }
    .icon {
      margin-right: 10px;
      font-weight: bold;
    }
  }
</style>

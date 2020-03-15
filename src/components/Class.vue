<template>
  <div class="main" :style="mainStyle">
    <div class="title"><span class="left">分类</span><span>{{clazz}}</span></div>
    <div v-for="essay in essays" :key="essay.id" class="essay">
      <div><a :href="'/#/文档/' + clazz + '/' + essay.title" class="essay-top">{{essay.title}}</a></div>
      <div class="essay-bottom"><span>{{essay.date}}</span></div>
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
      essays: []
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
      const array = this.$route.path.split('/')
      const res = (await this.$http.post('classPath', { classification: array[2] })).data
      this.essays = res
    }
  },
  computed: {
      clazz () {
        const array = this.$route.path.split('/')
        return array[2]
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
  margin-bottom: 40px;
  .left {
    display: inline-block;
    margin-right: 20px;
    font-weight: bold;
    transform: translateY(-5px);
  }
}
.essay {
  margin: 10px 0 0 80px;
  .essay-top {
    color: #606975;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 2px solid #606975;
    transition: all .5s;
  }
  .essay-top:hover {
    color: #eee;
    background-color: #606975;
  }
  .essay-bottom {
    color: #606975;
    font-size: 15px;
    margin-top: 10px;
  }
}
</style>

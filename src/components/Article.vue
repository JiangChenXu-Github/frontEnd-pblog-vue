<template>
<div class="main" :style="mainStyle">
  <!-- 头 -->
  <div><a :href="'/#/文档/' + (essay.classification === '' ? 'undefine' : essay.classification)  + '/' + essay.title" class="essay-title">{{essay.title}}</a></div>
  <!-- 信息 -->
  <div class="essay-information">
    <span class="essay-date">发布于{{essay.date}}</span>
    <i v-if="essay.classification !== ''"  class="el-icon-menu"></i>
    <a :href="'/#/文档/' + essay.classification" class="essay-classification">{{essay.classification}}</a>
    <i v-if="essay.label !== ''" class="el-icon-s-flag"></i>
    <a href="#" class="essay-label" v-for="label in essay.labels" :key="label.id">{{label.label}}</a>
  </div>
  <article class="markdown-body" v-html="essay.article" ></article>
</div>
</template>

<script>
export default {
  data () {
    return {
      essay: {},
      mainStyle: {
          transform: 'translateY(-10px)',
          opacity: '0'
      }
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
      const res = (await this.$http.post('essayPath', { title: array[3] })).data
      this.essay = res
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  transition: all 1s;
}
.markdown-body {
  color: #606975;
  margin-top: 50px;
}
.essay-title {
    line-height: 44px;
    font-size: 30px;
    border-bottom: solid 2px #606975;
    font-weight: bold;
    color: #606975;
    transition: all 0.5s;
  }
  .essay-title:hover {
    background-color: #606975;
    line-height: 44px;
    font-size: 30px;
    border-bottom: solid 2px #606975;
    font-weight: bold;
    color: #eee;
  }
  .essay-information {
    line-height: 25px;
    margin-top: 10px;
    .essay-date {
      margin-right: 20px;
      color: #606975;
    }
    .essay-classification {
      margin-right: 20px;
      color: #606975;
      border-bottom: solid #606975 2px;
      transition: all 0.5s;
    }
    .essay-classification:hover {
      margin-right: 20px;
      background-color:#606975;
      color: #eee;
      border-bottom: solid #606975 2px;
    }
    .essay-label {
      color: #606975;
      margin-right: 5px;
      border-bottom: solid #606975 2px;
      transition: all 0.5s;
    }
    .essay-label:hover {
      background-color:#606975;
      color: #eee;
      margin-right: 5px;
      border-bottom: solid #606975 2px;
    }
    i {
      color: #606975;
    }
  }
</style>

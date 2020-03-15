<template>
  <div class="main" :style="mainStyle">
    <!-- 随笔 -->
    <div class="essay" v-for="essay in essays" :key="essay.id">
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
      <!-- 简介 -->
      <div class="essay-introduction">{{essay.introduction}}......</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      essays: [],
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
    async initData () {
      const res = (await this.$http.get('essaysPath')).data
      this.essays = res
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  transition: all 1s;
}
.essay {
  margin-top: 45px;
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
  .essay-introduction {
    margin-top: 10px;
    line-height: 23px;
    font-size: 18px;
    color: #606975;
    letter-spacing: 5px;
  }
}
</style>

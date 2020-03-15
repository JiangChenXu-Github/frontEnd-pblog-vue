<template>
  <div>
    <div class="header-content" :style="asideControlClickEventData.headerAndContentWidth">
      <div class="header-blur"></div>
      <div class="header" :style="asideControlClickEventData.headerWidth">
          <img class="avator" src="../assets/jchenxu.jpg" width="80px" :style="initial.avatorOpacity" />
          <span class="introduce" :style="initial.introduceOpacity" >江某人的第二人格</span>
          <div class="navigator" :style="initial.navigatorOpacity">
            <el-link href="/#/首页" :underline="false" :style="linkStyle[0][0]">| <span :style="linkStyle[0][1]">首页</span></el-link>
            <el-link href="/#/随笔" :underline="false" :style="linkStyle[1][0]">| <span :style="linkStyle[1][1]">随笔</span></el-link>
            <el-link href="/#/分类" :underline="false" :style="linkStyle[2][0]">| <span :style="linkStyle[2][1]">分类</span></el-link>
            <el-link href="/#/留言板" :underline="false" :style="linkStyle[3][0]">| <span :style="linkStyle[3][1]">留言板</span></el-link>
            <el-link href="/#/归档" :underline="false" :style="linkStyle[4][0]">| <span :style="linkStyle[4][1]">归档</span></el-link>
            <el-link href="/#/关于" :underline="false" :style="linkStyle[5][0]">| <span :style="linkStyle[5][1]">关于</span></el-link>
          </div>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div>
    <div class="background"></div>
    <div class="fixed">
      <div class="aside" :style="asideControlClickEventData.asideWidth">
        <div class="aside-content">
          <span  class="aside-content-header" :style="asideWidthChangeEventData">———玲珑骰子安红豆</span>
          <span class="aside-content-bottom" :style="asideWidthChangeEventData">入骨相思知不知———</span>
        </div>
      </div>
      <div class="aside-control"><el-button :type="asideControlClickEventData.asideControlType" size="mini" circle :icon="asideControlClickEventData.asideControlIcon" @click="asideControlClickEvent"></el-button></div>
      <div class="cube-container" :style="initial.cubeOpacity">
        <div class="cube">
          <el-image class="cube1" :src="require('../assets/1.png')" fit="fill" />
          <el-image class="cube2" :src="require('../assets/2.png')" fit="fill" />
          <el-image class="cube3" :src="require('../assets/3.png')" fit="fill" />
          <el-image class="cube4" :src="require('../assets/4.png')" fit="fill" />
          <el-image class="cube5" :src="require('../assets/5.png')" fit="fill" />
          <el-image class="cube6" :src="require('../assets/6.png')" fit="fill" />
        </div>
      </div>
    </div>
    <aplayer :audio="audio" :lrcType="0" fixed />
  </div>
</template>

<script>
export default {
  data () {
    return {
      asideControlClickEventData: {
        asideWidth: { width: "0"},
        asideControlIcon: "el-icon-plus",
        asideControlType: "success",
        headerAndContentWidth: { paddingRight: "0" },
        headerWidth: { paddingRight: "0" }
      },
      asideWidthChangeEventData: {
        opacity: "0",
        transform: "translateX(0)"
      },
      initial: {
        avatorOpacity: { opacity: "0", transform: "translateX(10px)" },
        introduceOpacity: { opacity: "0", transform: "translateX(10px)" },
        cubeOpacity: { opacity: "0" },
        navigatorOpacity: { opacity: "0", transform: "translateX(10px)" }
      },
      audio: [
        {
          name: 'Other Side（TV动画《异度侵入 ID:INVADED》片尾曲）',
          artist: '雅-MIYAVI-',
          url: 'https://music.163.com/song/media/outer/url?id=1378406180',
          cover: 'http://p2.music.126.net/9bQAV8OXvGbMn9kMmmfErA==/109951164235631576.jpg', // prettier-ignore
          lrc: 'http://music.163.com/api/song/media?id=1378406180'
        },
        {
          name: 'Fractures',
          artist: 'ILLENIUM、Nevve',
          url: 'https://music.163.com/song/media/outer/url?id=456185577',
          cover: 'http://p2.music.126.net/YgDqFhazYZ3s10RmkgIHzg==/18748872278605604.jpg', // prettier-ignore
          lrc: 'http://music.163.com/api/song/media?id=456185577'
        },
        {
          name: '天空下着小雨',
          artist: '函几、Young 7',
          url: 'https://music.163.com/song/media/outer/url?id=1382592787',
          cover: 'http://p1.music.126.net/xSXTcm7OBrg0vTrfpTDmKw==/109951164271827519.jpg', // prettier-ignore
          lrc: 'http://music.163.com/api/song/media?id=1382592787'
        },
        {
          name: '雲流れ',
          artist: 'みかん箱、Foxtail-Grass Studio',
          url: 'https://music.163.com/song/media/outer/url?id=785902',
          cover: 'http://p1.music.126.net/JFnBz-eyIBltKt15wjjFUA==/4455221115751031.jpg', // prettier-ignore
          lrc: 'http://music.163.com/api/song/media?id=785902'
        },
        {
          name: 'Fake',
          artist: 'The Tech Thieves',
          url: 'https://music.163.com/song/media/outer/url?id=1344644402',
          cover: 'http://p1.music.126.net/Y3KuzbKJor8y4z6zXQNzUg==/109951163845074192.jpg', // prettier-ignore
          lrc: 'http://music.163.com/api/song/media?id=1344644402'
        },
        {
          name: '瞬き（Cover：back number）',
          artist: '缺氧烧酒、春茶',
          url: 'https://music.163.com/song/media/outer/url?id=558464624',
          cover: 'http://p1.music.126.net/O_FQeMbLFE39rsW4glCr7Q==/109951164061739945.jpg', // prettier-ignore
          lrc: 'http://music.163.com/api/song/media?id=558464624'
        },
        {
          name: 'ミチノチモシーキミノキモチ',
          artist: '森永千才',
          url: 'https://music.163.com/song/media/outer/url?id=418708385',
          cover: 'http://p1.music.126.net/bKSNQhB7x1T11NunFoCNVw==/3441471399282296.jpg', // prettier-ignore
          lrc: 'http://music.163.com/api/song/media?id=418708385'
        },
        {
          name: '庆功酒(Jungle Juice)',
          artist: '福克斯、隆历奇',
          url: 'https://music.163.com/song/media/outer/url?id=562118482',
          cover: 'http://p1.music.126.net/BtLR3zkZkLqO1IEJMF2OAg==/109951163300854198.jpg', // prettier-ignore
          lrc: 'http://music.163.com/api/song/media?id=562118482'
        },
        {
          name: 'デート2 (1n Cover)',
          artist: '1n',
          url: 'https://music.163.com/song/media/outer/url?id=435305771',
          cover: 'http://p1.music.126.net/iBiPyWjOIGCpoQ3gp4XjLA==/109951163993101200.jpg', // prettier-ignore
          lrc: 'http://music.163.com/api/song/media?id=435305771'
        },
        {
          name: 'ㅤㅤ',
          artist: 'KΛGWΣ',
          url: 'https://music.163.com/song/media/outer/url?id=493735090',
          cover: 'http://p1.music.126.net/M3yIZP7Vg_32YXlx6N0ZOA==/19143596951475394.jpg', // prettier-ignore
          lrc: 'http://music.163.com/api/song/media?id=493735090'
        },
        {
          name: '溯',
          artist: '周明宇',
          url: 'https://music.163.com/song/media/outer/url?id=1316381578',
          cover: 'http://p2.music.126.net/5Gro5KH2R3saLPsnbpFXZg==/109951163593307443.jpg', // prettier-ignore
          lrc: 'http://music.163.com/api/song/media?id=1316381578'
        },
        {
          name: 'Sold Out',
          artist: 'Hawk Nelson',
          url: 'https://music.163.com/song/media/outer/url?id=31010566',
          cover: 'http://p1.music.126.net/UR8jAfqus_o1j_QkaYkZ_g==/109951163664241365.jpg', // prettier-ignore
          lrc: 'http://music.163.com/api/song/media?id=31010566'
        },
        {
          name: 'ハレハレヤ（合唱Vocal Only）（Cover：v_flower）',
          artist: 'RincolF、长泽陵川',
          url: 'https://music.163.com/song/media/outer/url?id=1346679563',
          cover: 'http://p1.music.126.net/uqAqcP6Zc-Xu4AUasbF7Fg==/109951163530590593.jpg', // prettier-ignore
          lrc: 'http://music.163.com/api/song/media?id=1346679563'
        },
        {
          name: '九州同',
          artist: '阿地力·阿不力孜、缪青、丁晓逵、牛建党',
          url: 'https://music.163.com/song/media/outer/url?id=1342327438',
          cover: 'http://p2.music.126.net/ny1ppM8C1oJw3hl_jnXlMw==/109951163820765070.jpg', // prettier-ignore
          lrc: 'http://music.163.com/api/song/media?id=1342327438'
        },
        {
          name: 'フラレガイガール（Cover：さユり）',
          artist: '春茶',
          url: 'https://music.163.com/song/media/outer/url?id=1351255013',
          cover: 'http://p2.music.126.net/cDynJtWAY4BCuZ28h40JeQ==/109951163917806995.jpg', // prettier-ignore
          lrc: 'http://music.163.com/api/song/media?id=1351255013'
        },
        {
          name: 'Invisible Umbrella',
          artist: 'MoreanP',
          url: 'https://music.163.com/song/media/outer/url?id=541282360',
          cover: 'http://p1.music.126.net/XWRBBbPRmTkOUyL_otiTIA==/109951163163549419.jpg', // prettier-ignore
          lrc: 'http://music.163.com/api/song/media?id=541282360'
        },
        {
          name: 'yellow（cover.神山羊）（Cover：Tokyo 7th シスターズ）',
          artist: '夏野Natsuno',
          url: 'https://music.163.com/song/media/outer/url?id=1354206023',
          cover: 'http://p2.music.126.net/k059yYFkDajhzPaFXFdJHQ==/109951163950384953.jpg', // prettier-ignore
          lrc: 'http://music.163.com/api/song/media?id=1354206023',
        }
      ]
    }
  },  
  mounted () {
    setTimeout(this.cubeInitial, 300)
    setTimeout(this.headerInital, 800)
    setTimeout(this.asideInitial, 1300)
  },
  methods: {
    asideControlClickEvent () {
      var val = {}
      if (this.asideControlClickEventData.asideControlIcon === "el-icon-minus") {
        val.asideWidth = {}
        val.asideWidth.width = "0"
        val.asideControlIcon = "el-icon-plus"
        val.asideControlType = "success"
        val.headerAndContentWidth= { paddingRight: "0" }
        val.headerWidth= { paddingRight: "0" }
        this.asideControlClickEventData = val
      } else {
        val.asideWidth = {}
        val.asideWidth.width = "300px"
        val.asideControlIcon = "el-icon-minus"
        val.asideControlType = "danger"
        val.headerAndContentWidth= { paddingRight: "300px" }
        val.headerWidth= { paddingRight: "300px" }
        this.asideControlClickEventData = val
      }
    },
    asideInitial () {
      var val = {}
      val.asideWidth = {}
      val.asideWidth.width = "300px"
      val.asideControlIcon = "el-icon-minus"
      val.asideControlType = "danger"
      val.headerAndContentWidth= { paddingRight: "300px" }
      val.headerWidth= { paddingRight: "300px" }
      this.asideControlClickEventData = val
    },
    headerInital () {
      this.initial.avatorOpacity.opacity = "1"
      this.initial.introduceOpacity.opacity = "1"
      this.initial.navigatorOpacity.opacity = "1"
      this.initial.avatorOpacity.transform = "translateX(0)"
      this.initial.introduceOpacity.transform = "translateX(0)"
      this.initial.navigatorOpacity.transform = "translateX(0)"
    },
    cubeInitial () {
      this.initial.cubeOpacity.opacity = "1"
    },
    randomColor() {
      return `#${((Math.random() * 0xffffff) << 0).toString(16)}`;
    }
  },
  watch: {
    asideControlClickEventData (val) {
      if (val.asideWidth.width === "300px") {
        setTimeout(() => {
          this.asideWidthChangeEventData.opacity = "1"
          this.asideWidthChangeEventData.transform = "translateX(-10px)"
        }, 500)
      } else {
        this.asideWidthChangeEventData.opacity = "0"
        this.asideWidthChangeEventData.transform = "translateX(0)"
      }
    }
  },
  computed: {
    linkStyle () {
      const style = [[{}, {}], [{}, {}], [{}, {}], [{}, {}], [{}, {}], [{}, {}]]
      if (this.$route.path === '/首页') {
        style[0][0] = { backgroundColor: 'rgb(250, 250, 250)', boxShadow: '0 0 5px rgb(250, 250, 250)' }
        style[0][1] = { color: 'rgb(16, 38, 51)', transform: 'translateX(-5px)' }
      } else if (this.$route.path === '/随笔') {
        style[1][0] = { backgroundColor: 'rgb(250, 250, 250)', boxShadow: '0 0 5px rgb(250, 250, 250)' }
        style[1][1] = { color: 'rgb(16, 38, 51)', transform: 'translateX(-5px)' }
      } else if (this.$route.path === '/分类') {
        style[2][0] = { backgroundColor: 'rgb(250, 250, 250)', boxShadow: '0 0 5px rgb(250, 250, 250)' }
        style[2][1] = { color: 'rgb(16, 38, 51)', transform: 'translateX(-5px)' }
      } else if (this.$route.path === '/留言板') {
        style[3][0] = { backgroundColor: 'rgb(250, 250, 250)', boxShadow: '0 0 5px rgb(250, 250, 250)' }
        style[3][1] = { color: 'rgb(16, 38, 51)', transform: 'translateX(-5px)' }
      } else if (this.$route.path === '/归档') {
        style[4][0] = { backgroundColor: 'rgb(250, 250, 250)', boxShadow: '0 0 5px rgb(250, 250, 250)' }
        style[4][1] = { color: 'rgb(16, 38, 51)', transform: 'translateX(-5px)' }
      } else if (this.$route.path === '/关于') {
        style[5][0] = { backgroundColor: 'rgb(250, 250, 250)', boxShadow: '0 0 5px rgb(250, 250, 250)' }
        style[5][1] = { color: 'rgb(16, 38, 51)', transform: 'translateX(-5px)' }
      }
      return style
    }
  }
}
</script>

<style lang="less" scoped>
.fixed {
  .aside {
    background: url('../assets/background-aside.png') center;
    overflow: hidden;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    transition: width 0.5s;
    box-shadow: 0 0 10px #222;

    .aside-content {
      height: 100%;
      background-color:rgba(0, 0, 0, 0.5);
      color: #ddd;

      .aside-content-header {
        width: 164px;
        position: absolute;
        top: 70px;
        left: 30px;
        text-shadow: 0 0 20px #fff;
        user-select: none;
        transition: all 1s;
      }

      .aside-content-bottom {
        width: 164px;
        position: absolute;
        bottom: 70px;
        right: 10px;
        text-shadow: 0 0 20px #fff;
        user-select: none;
        transition: all 1s;
      }
    }
  }

  .aside-control {
    position: fixed;
    right: 20px;
    bottom: 20px;
  }

  .cube-container:hover .cube {
    animation: cubeRotate 10s linear infinite paused;
  }

  .cube-container:hover .cube1 {
    transform: rotateY(180deg) translateZ(70px);
  }

  .cube-container:hover .cube2 {
    transform: rotateY(90deg) translateZ(70px);
  }

  .cube-container:hover .cube3 {
    transform: rotateY(-90deg) translateZ(70px);
  }

  .cube-container:hover .cube4 {
    transform: rotateX(90deg) translateZ(70px);
  }

  .cube-container:hover .cube5 {
    transform: rotateX(-90deg) translateZ(70px);
  }

  .cube-container:hover .cube6 {
    transform: translateZ(70px);
  }

  .cube-container {
    position: fixed;
    perspective: 1000;
    top: 200px;
    left: 100px;
    transition: opacity 0.5s;
  }
  .cube {
    height: 100px;
    width: 100px;
    transform-style: preserve-3d;
    animation: cubeRotate 10s linear infinite;
    pointer-events: none;
    .cube1 {
      height: 100px;
      width: 100px;
      transform: rotateY(180deg) translateZ(50px);
      position: absolute;
      box-shadow: 0 0 5px #000;
      opacity: 0.8;
      transition: all 0.5s;
      user-select: none;
    }
    .cube2 {
      height: 100px;
      width: 100px;
      transform: rotateY(90deg) translateZ(50px);
      position: absolute;
      box-shadow: 0 0 5px #000;
      opacity: 0.8;
      transition: all 0.5s;
      user-select: none;
    }
    .cube3{
      height: 100px;
      width: 100px;
      transform: rotateY(-90deg) translateZ(50px);
      position: absolute;
      box-shadow: 0 0 5px #000;
      opacity: 0.8;
      transition: all 0.5s;
      user-select: none;
    }
    .cube4 {
      height: 100px;
      width: 100px;
      transform: rotateX(90deg) translateZ(50px);
      position: absolute;
      box-shadow: 0 0 5px #000;
      opacity: 0.8;
      transition: all 0.5s;
      user-select: none;
    }
    .cube5 {
      height: 100px;
      width: 100px;
      transform: rotateX(-90deg) translateZ(50px);
      position: absolute;
      box-shadow: 0 0 5px #000;
      opacity: 0.8;
      transition: all 0.5s;
      user-select: none;
    }
    .cube6 {
      height: 100px;
      width: 100px;
      transform: translateZ(50px);
      position: absolute;
      box-shadow: 0 0 5px #000;
      opacity: 0.8;
      transition: all 0.5s;
      user-select: none;
    }
  }
}

.header-content {
  //background: url('../assets/background.png') fixed center;
  background-size: cover;
  background-color: rgba(250, 250, 250, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  min-width: 1500px;
  min-height: 100%;
  transition: padding-right 0.5s;

  .header-blur {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100px;
   //background: url('../assets/background.png') fixed center;
    filter: blur(4px);
  }
  .header {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100px;
    background-color: #222;
    text-align: center;
    line-height: 50px;
    width: 100%;
    box-shadow: 0 0 5px #222;
    transition: padding-right 0.5s;
    box-sizing: border-box;
    overflow: hidden;

    .avator {
      margin-left: 20px;
      border: 5px solid;
      border-color: rgb(250, 250, 250);
      border-radius: 50px;
      box-shadow: 0 0 10px rgb(250, 250, 250);
      transition: all .5s;
      pointer-events: none;
    }

    .introduce {
      margin-left: 20px;
      font-family: serif;
      font-weight: bold;
      font-size: 40px;
      color: rgb(250, 250, 250);
      text-shadow: 0 0 5px rgb(250, 250, 250);
      transition: all .5s;
      pointer-events: none;
      width: 500px;
      text-align: left;
    }

    .navigator {
      flex-grow: 1;
      color: rgb(250, 250, 250);
      display: flex;
      justify-content: space-around;
      transition: all 0.5s;
      
      .el-link {
        color: rgb(250, 250, 250);
        font-weight: bold;
        font-size: 17px;
        user-select: none;
        transition: all 0.5s;
        line-height: 25px;
      }

      .el-link:hover {
        background-color: rgb(250, 250, 250);
        box-shadow: 0 0 5px rgb(250, 250, 250); 
      }
      span {
        display:inline-block;
        transition: all 0.5s;
      }

      .el-link:hover span {
        color: rgb(16, 38, 51);
        transform: translateX(-5px);
      }
    }
  }
  .content {
    margin-top: 200px;
    padding-left: 400px;
    padding-right: 100px;
    width: 100%;
    box-sizing: border-box;
  }
}

.background {
  position:fixed;
  top: 0;
  left: 0;
  z-index: -5;
  background: url('../assets/background.png') center no-repeat;
  background-size: cover;
  text-align: center;
  height: 100%;
  width: 100%;
}

@keyframes cubeRotate {
  from {
    transform: rotateX(0) rotateZ(0)
  }

  to {
    transform: rotateX(1turn) rotateZ(1turn)
  }
}
</style>

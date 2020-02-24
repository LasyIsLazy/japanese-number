<template>
  <div id="app">
    <div>{{curNum}}</div>
    <div v-if="showAnswer">{{curJapanese}}</div>
    <input type="button" value="查看答案" @click="handleClick" />
    <input type="button" value="切换" @click="next" />
    <div>{{inputValJapanese}}</div>
    <input type="text" v-model="inputVal" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

enum DigitDic {
  'ぜろ' = 0,
  'いち' = 1,
  'に' = 2,
  'さん' = 3,
  'よん' = 4,
  'ご' = 5,
  'ろく' = 6,
  'なな' = 7,
  'はち' = 8,
  'きゅう' = 9,
}
enum otherDigitDic {
  'じゅう' = 10,
  'にじゅう' = 20,
  'さんじゅう' = 30,
  'よんじゅう' = 40,
  'ごじゅう' = 50,
  'ろくじゅう' = 60,
  'ななじゅう' = 70,
  'はちじゅう' = 80,
  'きゅうじゅう' = 90,
  'ひゃく' = 100,
  'にひゃく' = 200,
  'さんびゃく' = 300,
  'よんひゃく' = 400,
  'ごひゃく' = 500,
  'ろっぴゃく' = 600,
  'ななひゃく' = 700,
  'はっぴゃく' = 800,
  'きゅうひゃく' = 900,
  'いちせん' = 1000,
  'にせん' = 2000,
  'さんぜん' = 3000,
  'よんせん' = 4000,
  'ごせん' = 5000,
  'ろくせん' = 6000,
  'ななせん' = 7000,
  'はちせん' = 8000,
  'きゅうせん' = 9000,
  'いちまん' = 10000,
  'じゅうまん' = 100000,
  'ひゃくまん' = 1000000,
  'いっせんまん' = 10000000,
  'いちおく' = 100000000,
}

function getJapnese(num: number) {
  if (num === 0) {
    return DigitDic[num]
  }
  let str = ''
  let singleNum = num % 10
  // 个位不是 0
  if (singleNum !== 0) {
    // 个位
    str = DigitDic[singleNum]
  }

  let nexts = [10, 100, 1000]
  nexts.forEach(next => {
    if (num >= next) {
      singleNum = Math.floor(num / next) % 10
      if (singleNum !== 0) {
        str = otherDigitDic[singleNum * next] + '_' + str
      }
    }
  })

  nexts = [10000, 100000, 1000000, 10000000]
  nexts.forEach(next => {
    if (num >= next) {
      singleNum = Math.floor(num / next) % 10
      if (singleNum !== 0) {
        str = DigitDic[singleNum] + otherDigitDic[next] + '_' + str
      }
    }
  })
  if (num >= 100000000) {
    const finnalNum = Math.floor(num / 100000000)
    if (finnalNum !== 0) {
      str = getJapnese(finnalNum) + otherDigitDic[100000000] + '_' + str
    }
  }
  return str
}

@Component({
  components: {},
})
export default class App extends Vue {
  private curNum = Math.floor(Math.random() * 10)

  private inputVal = ''

  private showAnswer = false

  private get curJapanese() {
    return getJapnese(this.curNum)
  }

  private get inputValJapanese() {
    return getJapnese(parseInt(this.inputVal, 10))
  }

  private handleClick() {
    this.showAnswer = true
  }

  private next() {
    this.showAnswer = false
    this.curNum = Math.floor(Math.random() * 1000)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

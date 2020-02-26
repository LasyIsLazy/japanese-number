<template>
  <div id="app">
    <Slider v-model="range" range class="row"></Slider>
    <div class="row">
      <span>范围：</span>
      <Input type="number" v-model="range[0]" placeholder="输入范围" class="normal-width" />
      <span>~</span>
      <Input type="number" v-model="range[1]" placeholder="输入范围" class="normal-width" />
    </div>
    <div class="row">
      <span>当前数字：</span>
      <Input
        v-model="curNum"
        :number="true"
        type="number"
        placeholder="输入数字"
        class="normal-width"
        @input="handleCurNumInput"
        @on-enter="showAnswer"
      />
    </div>
    <div class="row">
      <Button type="primary" @click="next" icon="md-checkmark">下一个</Button>
      <Button type="primary" @click="showAnswer" icon="md-book">查看答案</Button>
    </div>
    <div class="row">
      <div class="num">{{curNumStr}}</div>
    </div>
    <div class="row">
      <div
        class="answer"
        :style="{visibility: isAnswerVisible? 'visible' : 'hidden'}"
      >{{curJapanese}}</div>
    </div>
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

  private range = [1, 10]

  private isAnswerVisible = false

  private get curNumStr() {
    return this.curNum.toLocaleString()
  }

  private get curJapanese() {
    return getJapnese(this.curNum)
  }

  private showAnswer() {
    this.isAnswerVisible = true
  }

  private next() {
    this.isAnswerVisible = false
    this.curNum = Math.floor(
      Math.random() * (this.range[1] - this.range[0]) + this.range[0]
    )
  }

  private handleCurNumInput() {
    this.isAnswerVisible = false
  }
}
</script>

<style>
#app {
  width: 100%;
  padding: 0 40px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.num {
  border: 1px dashed;
  font-size: 40px;
}
.answer {
  border: 1px dashed;
  font-size: 40px;
}
.row {
  margin: 20px 0;
}

#app .normal-width {
  width: 100px;
}
#app .ivu-btn {
  margin: 0 20px;
}
</style>

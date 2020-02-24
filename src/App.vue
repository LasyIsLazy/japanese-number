<template>
  <div id="app">
    <div>{{curNum}}</div>
    <div v-if="showAnswer">{{curJapanese}}</div>
    <div @click="handleClick">查看答案</div>
    <div @click="next">切换</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'

enum Dictionary {
  'れい、ぜろ' = 0,
  'いち' = 1,
  'に' = 2,
  'さん' = 3,
  'し、よん' = 4,
  'ご' = 5,
  'ろく' = 6,
  'しち、なな' = 7,
  'はち' = 8,
  'く、きゅう' = 9,
}

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  private curNum = 1

  private get curJapanese() {
    return Dictionary[this.curNum]
  }

  private showAnswer = false

  private handleClick() {
    this.showAnswer = true
  }

  private next() {
    this.showAnswer = false
    this.curNum = Math.floor(Math.random() * 10)
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

(function(t){function e(e){for(var n,a,v=e[0],s=e[1],o=e[2],_=0,c=[];_<v.length;_++)a=v[_],Object.prototype.hasOwnProperty.call(p,a)&&p[a]&&c.push(p[a][0]),p[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);i&&i(e);while(c.length)c.shift()();return d.push.apply(d,o||[]),r()}function r(){for(var t,e=0;e<d.length;e++){for(var r=d[e],n=!0,v=1;v<r.length;v++){var s=r[v];0!==p[s]&&(n=!1)}n&&(d.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},p={app:0},d=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var v=window["webpackJsonp"]=window["webpackJsonp"]||[],s=v.push.bind(v);v.push=e,v=v.slice();for(var o=0;o<v.length;o++)e(v[o]);var i=s;d.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"034f":function(t,e,r){"use strict";var n=r("85ec"),p=r.n(n);p.a},"85ec":function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n,p,d=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Slider",{staticClass:"row",attrs:{range:""},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}}),r("div",{staticClass:"row"},[r("span",[t._v("范围：")]),r("Input",{staticClass:"normal-width",attrs:{type:"number",placeholder:"输入范围"},model:{value:t.range[0],callback:function(e){t.$set(t.range,0,e)},expression:"range[0]"}}),r("span",[t._v("~")]),r("Input",{staticClass:"normal-width",attrs:{type:"number",placeholder:"输入范围"},model:{value:t.range[1],callback:function(e){t.$set(t.range,1,e)},expression:"range[1]"}})],1),r("div",{staticClass:"row"},[r("span",[t._v("当前数字：")]),r("Input",{staticClass:"normal-width",attrs:{number:!0,type:"number",placeholder:"输入数字"},on:{input:t.handleCurNumInput,"on-enter":t.showAnswer},model:{value:t.curNum,callback:function(e){t.curNum=e},expression:"curNum"}})],1),r("div",{staticClass:"row"},[r("Button",{attrs:{type:"primary",icon:"md-checkmark"},on:{click:t.next}},[t._v("下一个")]),r("Button",{attrs:{type:"primary",icon:"md-book"},on:{click:t.showAnswer}},[t._v("查看答案")])],1),r("div",{staticClass:"row"},[r("div",{staticClass:"num"},[t._v(t._s(t.curNumStr))])]),r("div",{staticClass:"row"},[r("div",{staticClass:"answer",style:{visibility:t.isAnswerVisible?"visible":"hidden"}},[t._v(t._s(t.curJapanese))])]),r("Collapse",[r("Panel",[t._v(" Cheetsheet "),r("Cheetsheet",{attrs:{slot:"content"},slot:"content"})],1)],1)],1)},v=[],s=(r("4160"),r("159b"),r("d4ec")),o=r("bee2"),i=r("99de"),_=r("7e84"),c=r("262e"),u=r("9ab4"),l=r("60a3"),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v(" 100 以下 "),r("table",{staticStyle:{width:"100%"},attrs:{border:"1",cellpadding:"0",cellspacing:"0"}},[r("tbody",[r("tr",[r("td",[r("p",[t._v("0")])]),r("td",[t._v("れい、ぜろ")]),r("td",[r("p",[t._v("10")])]),r("td",[r("p",[t._v("じゅう")])]),r("td",[r("p",[t._v("20")])]),r("td",[r("p",[t._v("にじゅう")])])]),r("tr",[r("td",[r("p",[t._v("1")])]),r("td",[t._v("いち")]),r("td",[r("p",[t._v("11")])]),r("td",[r("p",[t._v("じゅういち")])]),r("td",[r("p",[t._v("30")])]),r("td",[r("p",[t._v("さんじゅう")])])]),r("tr",[r("td",[r("p",[t._v("2")])]),r("td",[r("p",[t._v("に")])]),r("td",[r("p",[t._v("12")])]),r("td",[r("p",[t._v("じゅうに")])]),r("td",[r("p",[t._v("40")])]),r("td",[r("p",[t._v("よんじゅう")])])]),r("tr",[r("td",[r("p",[t._v("3")])]),r("td",[r("p",[t._v("さん")])]),r("td",[r("p",[t._v("13")])]),r("td",[r("p",[t._v("じゅうさん")])]),r("td",[r("p",[t._v("50")])]),r("td",[t._v("ごじゅう")])]),r("tr",[r("td",[r("p",[t._v("4")])]),r("td",[r("p",[t._v("し、よん")])]),r("td",[r("p",[t._v("14")])]),r("td",[r("p",[t._v("じゅうし、じゅうよん")])]),r("td",[r("p",[t._v("60")])]),r("td",[r("p",[t._v("ろくじゅう")])])]),r("tr",[r("td",[r("p",[t._v("5")])]),r("td",[r("p",[t._v("ご")])]),r("td",[r("p",[t._v("15")])]),r("td",[r("p",[t._v("じゅうご")])]),r("td",[r("p",[t._v("70")])]),r("td",[r("p",[t._v("ななじゅう")])])]),r("tr",[r("td",[r("p",[t._v("6")])]),r("td",[r("p",[t._v("ろく")])]),r("td",[r("p",[t._v("16")])]),r("td",[r("p",[t._v("じゅうろく")])]),r("td",[r("p",[t._v("80")])]),r("td",[r("p",[t._v("はちじゅう")])])]),r("tr",[r("td",[r("p",[t._v("7")])]),r("td",[t._v("しち、なな")]),r("td",[r("p",[t._v("17")])]),r("td",[r("p",[t._v("じゅうしち、じゅうなな")])]),r("td",[r("p",[t._v("90")])]),r("td",[r("p",[t._v("きゅうじゅう")])])]),r("tr",[r("td",[r("p",[t._v("8")])]),r("td",[r("p",[t._v("はち")])]),r("td",[r("p",[t._v("18")])]),r("td",[r("p",[t._v("じゅうはち")])]),r("td",[r("p",[t._v("100")])]),r("td",[r("p",[t._v("ひゃく")])])]),r("tr",[r("td",[r("p",[t._v("9")])]),r("td",[r("p",[t._v("く、きゅう")])]),r("td",[r("p",[t._v("19")])]),r("td",[r("p",[t._v("じゅうく、じゅうきゅう")])]),r("td",{attrs:{colspan:"2",rowspan:"2"}},[r("p",{attrs:{mce_keep:"true"}}),r("p",{attrs:{mce_keep:"true"}})])]),r("tr",[r("td",[r("p",[t._v("0.1")])]),r("td",[r("p",[t._v("れいてんいち")])]),r("td",[r("p",[t._v("2/3")])]),r("td",[r("p",[t._v("さんぶんのに")]),r("div")])])])]),t._v("100 以上 "),r("table",{staticStyle:{width:"100%"},attrs:{border:"1",cellpadding:"0",cellspacing:"0"}},[r("tbody",[r("tr",[r("td",[r("p",[t._v("100")])]),r("td",[t._v("ひゃく")]),r("td",[r("p",[t._v("1000")])]),r("td",[r("p",[t._v("せん")])]),r("td",[r("p",[t._v("10，000")])]),r("td",[t._v("いちまん")])]),r("tr",[r("td",[r("p",[t._v("200")])]),r("td",[r("p",[t._v("にひゃく")])]),r("td",[r("p",[t._v("2000")])]),r("td",[r("p",[t._v("にせん")])]),r("td",[r("p",[t._v("100，000")])]),r("td",[r("p",[t._v("じゅうまん")])])]),r("tr",[r("td",[r("p",[t._v("300")])]),r("td",[r("p",[t._v("さんびゃく")])]),r("td",[r("p",[t._v("3000")])]),r("td",[r("p",[t._v("さんぜん")])]),r("td",[r("p",[t._v("1，000，000")])]),r("td",[r("p",[t._v("ひゃくまん")])])]),r("tr",[r("td",[r("p",[t._v("400")])]),r("td",[r("p",[t._v("よんひゃく")])]),r("td",[r("p",[t._v("4000")])]),r("td",[r("p",[t._v("よんせん")])]),r("td",[r("p",[t._v("10，000，000")])]),r("td",[r("p",[t._v("いっせんまん")])])]),r("tr",[r("td",[r("p",[t._v("500")])]),r("td",[r("p",[t._v("ごひゃく")])]),r("td",[r("p",[t._v("5000")])]),r("td",[r("p",[t._v("ごせん")])]),r("td",[r("p",[t._v("100，000，000")])]),r("td",[r("p",[t._v("いちおく")])])]),r("tr",[r("td",[r("p",[t._v("600")])]),r("td",[r("p",[t._v("ろっぴゃく")])]),r("td",[r("p",[t._v("6000")])]),r("td",[r("p",[t._v("ろくせん")])]),r("td",[r("p",[t._v("9002")])]),r("td",[t._v("きゅうせんに")])]),r("tr",[r("td",[r("p",[t._v("700")])]),r("td",[r("p",[t._v("ななひゃく")])]),r("td",[r("p",[t._v("7000")])]),r("td",[r("p",[t._v("ななせん")])]),r("td",[r("p",[t._v("9020")])]),r("td",[r("p",[t._v("きゅうせんにじゅう")])])]),r("tr",[r("td",[r("p",[t._v("800")])]),r("td",[r("p",[t._v("はっぴゃく")])]),r("td",[r("p",[t._v("8000")])]),r("td",[r("p",[t._v("はっせん")])]),r("td",[r("p",[t._v("9200")])]),r("td",[r("p",[t._v("きゅうせんにひゃく")])])]),r("tr",[r("td",[r("p",[t._v("900")])]),r("td",[r("p",[t._v("きゅうひゃく")])]),r("td",[r("p",[t._v("9000")])]),r("td",{attrs:{colspan:"3",rowspan:"1"}},[r("p",[t._v("きゅうせん")]),r("div")])])])])])}],b=r("2877"),m={},w=Object(b["a"])(m,f,h,!1,null,null,null),y=w.exports;function g(t){if(0===t)return n[t];var e="",r=t%10;0!==r&&(e=n[r]);var d=[10,100,1e3];if(d.forEach((function(n){t>=n&&(r=Math.floor(t/n)%10,0!==r&&(e=p[r*n]+"_"+e))})),d=[1e4,1e5,1e6,1e7],d.forEach((function(d){t>=d&&(r=Math.floor(t/d)%10,0!==r&&(e=n[r]+p[d]+"_"+e))})),t>=1e8){var a=Math.floor(t/1e8);0!==a&&(e=g(a)+p[1e8]+"_"+e)}return e}(function(t){t[t["ぜろ"]=0]="ぜろ",t[t["いち"]=1]="いち",t[t["に"]=2]="に",t[t["さん"]=3]="さん",t[t["よん"]=4]="よん",t[t["ご"]=5]="ご",t[t["ろく"]=6]="ろく",t[t["なな"]=7]="なな",t[t["はち"]=8]="はち",t[t["きゅう"]=9]="きゅう"})(n||(n={})),function(t){t[t["じゅう"]=10]="じゅう",t[t["にじゅう"]=20]="にじゅう",t[t["さんじゅう"]=30]="さんじゅう",t[t["よんじゅう"]=40]="よんじゅう",t[t["ごじゅう"]=50]="ごじゅう",t[t["ろくじゅう"]=60]="ろくじゅう",t[t["ななじゅう"]=70]="ななじゅう",t[t["はちじゅう"]=80]="はちじゅう",t[t["きゅうじゅう"]=90]="きゅうじゅう",t[t["ひゃく"]=100]="ひゃく",t[t["にひゃく"]=200]="にひゃく",t[t["さんびゃく"]=300]="さんびゃく",t[t["よんひゃく"]=400]="よんひゃく",t[t["ごひゃく"]=500]="ごひゃく",t[t["ろっぴゃく"]=600]="ろっぴゃく",t[t["ななひゃく"]=700]="ななひゃく",t[t["はっぴゃく"]=800]="はっぴゃく",t[t["きゅうひゃく"]=900]="きゅうひゃく",t[t["いちせん"]=1e3]="いちせん",t[t["にせん"]=2e3]="にせん",t[t["さんぜん"]=3e3]="さんぜん",t[t["よんせん"]=4e3]="よんせん",t[t["ごせん"]=5e3]="ごせん",t[t["ろくせん"]=6e3]="ろくせん",t[t["ななせん"]=7e3]="ななせん",t[t["はちせん"]=8e3]="はちせん",t[t["きゅうせん"]=9e3]="きゅうせん",t[t["いちまん"]=1e4]="いちまん",t[t["じゅうまん"]=1e5]="じゅうまん",t[t["ひゃくまん"]=1e6]="ひゃくまん",t[t["いっせんまん"]=1e7]="いっせんまん",t[t["いちおく"]=1e8]="いちおく"}(p||(p={}));var O=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(i["a"])(this,Object(_["a"])(e).apply(this,arguments)),t.curNum=Math.floor(10*Math.random()),t.range=[1,10],t.isAnswerVisible=!1,t}return Object(c["a"])(e,t),Object(o["a"])(e,[{key:"showAnswer",value:function(){this.isAnswerVisible=!0}},{key:"next",value:function(){this.isAnswerVisible=!1,this.curNum=Math.floor(Math.random()*(this.range[1]-this.range[0])+this.range[0])}},{key:"handleCurNumInput",value:function(){this.isAnswerVisible=!1}},{key:"curNumStr",get:function(){return this.curNum.toLocaleString()}},{key:"curJapanese",get:function(){return g(this.curNum)}}]),e}(l["b"]);O=Object(u["a"])([Object(l["a"])({components:{Cheetsheet:y}})],O);var k=O,j=k,C=(r("034f"),Object(b["a"])(j,a,v,!1,null,null,null)),x=C.exports,M=r("f825"),N=r.n(M);r("f8ce");d["default"].config.productionTip=!1,d["default"].use(N.a),new d["default"]({render:function(t){return t(x)}}).$mount("#app")}});
//# sourceMappingURL=app.5077199e.js.map
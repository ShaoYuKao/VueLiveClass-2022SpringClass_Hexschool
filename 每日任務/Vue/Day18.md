---
tags: Vue 直播班 - 2022 春季班
---

# 🏅 Day 18
###### tags: `Vue 直播班 - 2022 春季班`

請先閱讀完 [v-for 的課前預習](https://hackmd.io/@hexschool/S1DJeKTdL/%2FKWXW13ewTaq2M_svlEAYXA) 再嘗試作答:

題目 (請將答案貼上 CodePen)
---
操作 [這個模板](https://codepen.io/znlcgmgk/pen/VwPEjVK?editors=1010)，執行以下要求 (只能操作 HTML 的部分):

> 請使用 v-for 渲染資料如下圖，並搭配使用 v-if 進行歸類判斷

![](https://i.imgur.com/MPuptPj.png)


回報流程
---
請同學依照下圖教學觀看解答、回報答案:

![](https://i.imgur.com/QtL8zEW.png)

回報格式如下圖，請在「回報區」使用註解回報答案 (為了統計人數，請同學依序加上「報數」)

![](https://i.imgur.com/L7kyew8.png)

<!-- 解答
<div id="app">
  <div class="container p-3">
    <h3>年紀大於 25 歲的同事</h3>
    <ul>
      <template v-for="collegue in collegueList" :key="collegue.name">
        <li v-if="collegue.age > 25">
          <p v-for="(value, key) in collegue" :key="value">屬性: {{ key }}，值: {{ value }}</p>
        </li>
      </template>
    </ul>
    <h3>年紀小於 25 歲的同事</h3>
    <ul>
      <template v-for="collegue in collegueList" :key="collegue.name">
        <li v-if="collegue.age <= 25">
          <p v-for="(value, key) in collegue" :key="value">屬性: {{ key }}，值: {{ value }}</p>
        </li>
      </template>
    </ul>
  </div>
</div>
-->

---
tags: Vue 直播班 - 2022 春季班
---

# 🏅 Day 12
###### tags: `Vue 直播班 - 2022 春季班`

參考文章: https://wcc723.github.io/development/2020/09/20/js-semi/

題目 (直接貼上答案)
---
1. 請修正以下程式碼錯誤，並執行 console.log
2. 請嘗試說明以下程式碼錯誤的原因

```js=
let saySomething = '小姐一個人嗎 :D'
(function() {
  console.log(saySomething);
})
```


回報流程
---
請同學依照下圖教學觀看解答、回報答案:

![](https://i.imgur.com/QtL8zEW.png)

回報格式如下圖，請在「回報區」使用註解回報答案 (為了統計人數，請同學依序加上「報數」)

![](https://i.imgur.com/L7kyew8.png)

<!-- 解答

1. 應該更正為: 
let saySomething = '小姐一個人嗎 :D'
;(function() {
  console.log(saySomething);
})()

2.
a. 使用立即函式需要在結尾的部分加入一組 () 才會正確執行。
b. 由於題目的 JS 程式碼在運行時會被視為同一行，如下: 

let saySomething = '小姐一個人嗎 :D'(function() {console.log(saySomething);})

如果要避免此錯誤就需要使用分號將其隔開。
-->

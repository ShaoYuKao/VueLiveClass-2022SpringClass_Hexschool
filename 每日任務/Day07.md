---
tags: Vue 直播班 - 2022 春季班
---

# 🏅 Day 7
###### tags: `Vue 直播班 - 2022 春季班`

題目 (使用 CodePen 作答)
---
小明有固定存錢的好習慣，以下是小明的銀行帳戶資訊。
1. 請協助他將存款資訊 mingTransfer 的內容合併到 mingAccount.depositRecord 陣列中 (使用 `.push()`)。
2. 請將他各月的存款累加到 mingAccount.deposit 中 (可以使用 `forEach()` 或 `reduce()`)

參考: https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

```js=
// 小明的銀行帳戶資訊
let mingAccount = {
  name: '小明',
  age: 22,
  deposit: 10000,
  depositRecord: [
    {
      title: '開戶',
      amounts: 10000
    }
  ]
};
// 小明的存款資訊
let mingTransfer = [
  {
    title: '一月存款',
    amounts: 777
  },
  {
    title: '二月存款',
    amounts: 7000
  },
  {
    title: '三月存款',
    amounts: 70000
  }
]
console.log(mingAccount);
```

Bootstrap 格線系統
---
觀看 [Bootstrap 網格](https://bootstrap5.hexschool.com/docs/5.1/layout/grid/#row-columns)，練習運用 `.row`  `.col-*`，修改此 [Codepen](https://codepen.io/Bingbingboom/pen/jOLReLb) 中 `...` 的部分，還原成下方圖片樣式

![](https://i.imgur.com/AgSZ747.png)


回報流程
---
請同學依照下圖教學觀看解答、回報答案:

![](https://i.imgur.com/QtL8zEW.png)

回報格式如下圖，請在「回報區」使用註解回報答案 (為了統計人數，請同學依序加上「報數」)

![](https://i.imgur.com/L7kyew8.png)

<!-- 解答
let newArray = array.filter(item => item.age <= 18)
console.log(newArray);

- Bootstrap -
https://codepen.io/Bingbingboom/pen/yLorRdX
-->

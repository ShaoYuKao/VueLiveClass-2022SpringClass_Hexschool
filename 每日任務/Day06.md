---
tags: Vue 直播班 - 2022 春季班
---

# 🏅 Day 6
###### tags: `Vue 直播班 - 2022 春季班`

參考文章: https://wcc723.github.io/javascript/2017/06/29/es6-native-array

#### filter 介紹 
> 1. 為 JavaScript 的陣列方法，可以用來「篩選陣列元素」。
> 2. 不會影響原來的陣列，而是會透過函式內所回傳的值組合成一個新的陣列。

舉例: 
```js=
let price = [900, 1000, 400, 200, 100];
let newPrice = price.filter(item => {
    // 會篩選出「判斷為 true 的陣列元素」
    return item > 300;
})
console.log(price); // 結果為: [900, 1000, 400, 200, 100]
console.log(newPrice); // 結果為: [900, 1000, 400]
```

題目 (使用 CodePen 作答)
---
請使用 filter() 操作 array 陣列，篩選出屬性 age <= 18 的陣列元素有哪些，並指派給 newArray。

```js=
const array = [
    {
      name: '小明',
      age: 18
    },
    {
      name: '小美',
      age: 15
    },
    {
      name: '杰倫',
      age: 19
    },
    {
      name: '漂亮阿姨',
      age: 22
    },
    {
      name: '老媽',
      age: 28
    }
];
let newArray = [];
```

Bootstrap Utilities（間距）
---
觀看 [Bootstrap Spacing](https://bootstrap5.hexschool.com/docs/5.1/utilities/spacing/) 通用類別，
嘗試將此 [Codepen](https://codepen.io/Bingbingboom/pen/abyxaWv) 中 CSS margin、padding 改為使用 Bootstrap 通用類別呈現

> 級數可以到 [符號](https://bootstrap5.hexschool.com/docs/5.1/utilities/spacing/#notation) 中的「size 設定：」查看預設設定，
> 舉例來說：
> `mb-1` 就是 `margin-bottom: 4px`（`$spacer * 0.25` , `$spacer` 預設以 16px 為主）

（使用 Codepen 作答）


回報流程
---
請同學依照下圖教學觀看解答、回報答案:

![](https://i.imgur.com/QtL8zEW.png)

回報格式如下圖，請在「回報區」使用註解回報答案 (為了統計人數，請同學依序加上「報數」)

![](https://i.imgur.com/L7kyew8.png)

<!-- 解答
let newArray = array.map(item => {return `${item.name} ${item.age} 歲囉`});


// 也可以簡寫成
let newArray = array.map(item => `${item.name} ${item.age} 歲囉`);

- Bootstrap -
https://codepen.io/Bingbingboom/pen/PoKgdRe

-->

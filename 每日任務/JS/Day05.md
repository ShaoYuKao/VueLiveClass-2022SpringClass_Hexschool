---
tags: Vue 直播班 - 2022 春季班
---

12/31 每日任務

今天的每日任務主題為 陣列操作 2、Bootstrap Utilities（顏色）運用

# 🏅 Day 5
###### tags: `Vue 直播班 - 2022 春季班`

參考文章: https://wcc723.github.io/javascript/2017/06/29/es6-native-array

#### map 介紹 
> 1. 為 JavaScript 的陣列方法，可以用來「修改陣列元素」。
> 2. 不會影響原來的陣列，而是會透過函式內所回傳的值組合成一個新的陣列。
> 3. map() 需要設定回傳值，如果不設定則會回傳 undefined

舉例: 
```js=
let arr = [1,2,3,4];
let newArr = arr.map((item) => {
     return item * 2;
});
console.log(arr); // 結果為: [1, 2, 3, 4]
console.log(newArr); // 結果為: [2, 4, 6, 8]
```

```js=
let arr = [1,2,3,4];
let newArr = arr.map((item) => {
     /*假設不設定回傳*/
});
console.log(newArr); // 結果為: [undefined, undefined, undefined, undefined]
```

題目 (使用 CodePen 作答)
---
請使用 map() 操作 array 陣列，賦予 newArray 陣列元素。結果如下圖:

![](https://i.imgur.com/brnHTk5.png)

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

Bootstrap Utilities（顏色）
---
在 Bootstrap 中可以運用 `.bg-*`   `.text-*` class 前綴來接上主題顏色，
像是：`.bg-primary` , `.text-white`

> 在背景通用類別中，也可以加上 `.bg-gradient` 讓背景有些許漸層，
> 或是運用 `.bg-opacity-*` 讓背景有透明度（注意 CDN 需為 5.1 版）

請協助補上此 [Codepen](https://codepen.io/Bingbingboom/pen/QWMPBRr) `...` 的部分，嘗試練習套用這些樣式，並呈現出下方圖片畫面

![](https://i.imgur.com/tmzE8XB.png)


參考：Bootstrap [背景](https://bootstrap5.hexschool.com/docs/5.1/utilities/background/) 與 [顏色](https://bootstrap5.hexschool.com/docs/5.1/utilities/colors/) 通用類別


回報流程
---
請同學依照下圖教學觀看解答、回報答案:

![](https://i.imgur.com/QtL8zEW.png)

回報格式如下圖，請在「回報區」使用註解回報答案 (為了統計人數，請同學依序加上「報數」)

![](https://i.imgur.com/L7kyew8.png)

<!-- 解法一
function ageFilter(arr) {
  let target = arr.filter(item => item.age > 18);
  return target;
}
-->

<!-- 解法二
function ageFilter(arr) {
  let target = [];
  arr.forEach(item => {
  	if(item.age > 18) {
    	target.push(item);
    }
  })
  return target;
}

解法:使用es6模板字串符語法
let newArray = [];
newArray = array.map((item) => {
  return `${item.name} ${item.age} 歲囉`;
});

console.log(newArray);

- Bootstrap -
https://codepen.io/Bingbingboom/pen/yLomMJp

-->


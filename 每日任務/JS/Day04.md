---
tags: Vue 直播班 - 2022 春季班
---

12/30 每日任務

今天的每日任務主題為 陣列操作 1、Bootstrap font-size 運用

# 🏅 Day 4
###### tags: `Vue 直播班 - 2022 春季班`

教學
---
這題需要額外理解的知識點為「[callback 函式](https://developer.mozilla.org/zh-TW/docs/Glossary/Callback_function)」，可以簡單的理解為:「把函式作為參數調用」。
舉例: 
```js=
function greeting(arr) {
  alert('Hello ' + arr.name);
}
// callback 函式
function processUserInput(callback, arr) {
  callback(arr);
}

let arr = {name: "Jordan"};
// 在 callback 函式中調用 greeting 函式，並把 arr 也一併代入
processUserInput(greeting, arr);
```



題目 (使用 CodePen 作答)
---
以下 crowdAge 為部分民眾的年紀資料，請修改程式碼、篩選出屬性 age > 18 的陣列元素，並將它們一一加入 filterResult 這個陣列中。**(可以使用 [push()](https://wcc723.github.io/development/2020/10/04/js-array-methods/#Array-prototype-push) 或是 [filter() 函式](https://wcc723.github.io/javascript/2017/06/29/es6-native-array/))**


```js=
let crowdAge = [
  {
    name: 'Rick',
    age: 17
  },
  {
    name: 'Jane',
    age: 25
  },
  {
    name: 'Jordan',
    age: 19
  },
  {
    name: 'Jack',
    age: 7
  },
  {
    name: 'Reol',
    age: 27
  }
]

// callback 函式
function ageFilterCB(cb, arr) {
  return cb(arr);
}

function ageFilter(arr) {
  /* 只能在此插入程式碼 */
}

let filterResult = [];
filterResult = ageFilterCB(ageFilter, crowdAge);
console.log(filterResult); /* 為陣列，內容包含屬性 age > 18 的 crowdAge 元素 */
```

Bootstrap font-size
---
在 Bootstap 中可以使用 `.h1` ~ `.h6` 或是 `.fs-*` class 來直接調整字體大小設定，
兩者的差異主要在 `.h1` ~ `.h6` 標題類別使用了 `font-size`、`font-weight`、`line-height`，而 `.fs-*` 只有 `font-size` 的設定 
> 注意：
> 1. 兩者都會有預設響應式設定（會隨著視窗寬度改變文字大小）
> 2. Bootstrap h1 ~ h6 標籤也會有預設字體設定，設定標題樣式時不要直接使用標籤來設定字體大小，請使用 .h1 ~ .h6 來設定哦
> 舉例來說：
> 想要在次重要的標題使用 h4 的字體大小設定，
> 正確寫法 -> `<h2 class="h4"> Title </h4>`
> （h1 ~ h6 標籤請以重要程度依序使用）
> 3. 實際運用時可以到 Bootstrap 變數中改變字體大小的預設設定（`$h1-font-size`、`$font-sizes`）

可以運用此 [Codepen](https://codepen.io/Bingbingboom/pen/oNerVWP) 觀察他們之間的差異，並嘗試自行運用看看

可以參考：[.h1 ~ .h6](https://bootstrap5.hexschool.com/docs/5.1/content/typography/#headings) 、 [.fs-*](https://bootstrap5.hexschool.com/docs/5.1/utilities/text/#font-size)

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

- Bootstrap -
https://codepen.io/Bingbingboom/pen/QWMPBRr

-->


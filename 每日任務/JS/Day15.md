---
tags: Vue 直播班 - 2022 春季班
---

# 🏅 Day 15
###### tags: `Vue 直播班 - 2022 春季班`

題目 (請將答案貼上 CodePen)
---
參考: https://wcc723.github.io/javascript/2017/12/25/javascript-destructuring/

(1) 依據提示將以下程式碼用解構方式達成目標
```js=
// 題目一: 請使用解構，取出 name 及 age 的變數
const person = {
  name: '小明',
  age: 16
}
console.log(name, age); // 結果為 "小明", 16

// 題目二: 請問以下 console.log 的輸出結果為何?
let [a, b, c = 4, d = 'New', e] = [1, 2, 3];
console.log(a, b, c, d, e);
```
參考：https://wcc723.github.io/javascript/2017/12/24/javascript-spread-operator/

(2)依據提示將以下程式碼用展開方式達成目標
```js=
// 題目一: 請使用展開將 arr 的內容併入 arrNew
let arr = [1, 2, 3];
let arrNew = [?, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]
console.log(arrNew);

// 題目二: 請使用展開將 restInfo 的內容併入 MingInfo
let restInfo = {
  sex: '男生',
  height: 178
}
let MingInfo = {
  name: '小明',
  age: 20,
}
```
(3) 請修改以下程式碼，透過 [參數預設值](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Default_parameters)、[其餘參數](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/rest_parameters) 的方式完成此範例。
```js=
function getMoney(/* 填入程式碼 */) {
  return money;
}
let myMoney = getMoney();

// fruits 是一個陣列
function buySomething(/* 填入程式碼 */) {
  if(fruits.length > 2) {
    myMoney -= 200;
  }else {
    myMoney -= 100;
  }
  console.log(`小明剩下 ${myMoney} 元`);
}
buySomething('lemon', 'watermelon', 'kiwi'); // 結果為 "小明剩下 300 元"
buySomething('lemon', 'watermelon'); // 結果為 "小明剩下 200 元"
```


回報流程
---
請同學依照下圖教學觀看解答、回報答案:

![](https://i.imgur.com/QtL8zEW.png)

回報格式如下圖，請在「回報區」使用註解回報答案 (為了統計人數，請同學依序加上「報數」)

![](https://i.imgur.com/L7kyew8.png)

<!-- 解答
(1)
// 題目一
const person = {
  name: '小明',
  age: 16
}
const {name, age} = person;
console.log(name, age);

// 題目二
1, 2, 3, "New", undefined

(2)
// 題目一
let arr = [1, 2, 3];
let arrNew = [...arr, 4, 5, 6];
console.log(arrNew);

// 題目二
let restInfo = {
  sex: '男生',
  height: 178
}
let MingInfo = {
  name: '小明',
  age: 20,
  ...restInfo
}

(3)
// fruits 是一個陣列
function getMoney(money = 500) {
  return money;
}

function buySomething(...fruits) {
	let myMoney = getMoney();
	if(fruits.length > 2) {
  	myMoney -= 200;
  }else {
  	myMoney -= 100;
  }
  console.log(`小明剩下 ${myMoney} 元`);
}
buySomething('lemon', 'watermelon', 'kiwi');
buySomething('lemon', 'watermelon');
-->

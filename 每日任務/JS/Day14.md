---
tags: Vue 直播班 - 2022 春季班
---

# 🏅 Day 14
###### tags: `Vue 直播班 - 2022 春季班`

參考文章: https://wcc723.github.io/javascript/2017/12/21/javascript-es6-arrow-function/

教學
---
箭頭函式的運用技巧如下：
```js=
// 傳統函式
function saySomething(string) {
  return '接招' + string; 
}

// 轉成箭頭函式
const saySomething = (string) => {
  return '接招 ' + string;
}
```
```js=
// 當只有單行表達式時，可同時省略 return 及 {}
// 省略後依然保有回傳的特質
const saySomething = (string) => '接招 ' + string;
console.log(saySomething('菜鳥!'));

// 不過要注意，如果有使用 {}，就需要自行加上 return
const saySomething = (string) => {'接招 ' + string};
console.log(saySomething('菜鳥!')); // 會回傳 undefined
```

```js=
// 只有一個參數可以不加括號 ()
const saySomething = string => '接招 ' + string;
console.log(saySomething('菜鳥!'));

// 沒有參數、參數有兩個以上都不能省略 ()
const saySomething = () => '接招 菜鳥!';
console.log(saySomething());
```

題目 (請貼上 CodePen)
---
請將以下程式碼簡化為箭頭函式 (不影響結果的情況下進行最大簡化)

```js=
// 題目一
function sum(a, b) {
  let c = a + b;
  return c;
}
console.log(sum(5, 6));

// 題目二
function square(num) {
  return num * num;
}
console.log(square(5))

// 題目三
setTimeout(function() {
  console.log('延遲 1 秒');
}, 1000);

// 題目四
let arr = [1, 2, 3];
let arrNew = arr.map(function(item, i) {
  return item * i;
});
console.log(arrNew);

// 題目五
let obj = {
  fn: function fn2(a) {
    return a * a;
  }
}
console.log(obj.fn(10));
```


回報流程
---
請同學依照下圖教學觀看解答、回報答案:

![](https://i.imgur.com/QtL8zEW.png)

回報格式如下圖，請在「回報區」使用註解回報答案 (為了統計人數，請同學依序加上「報數」)

![](https://i.imgur.com/L7kyew8.png)

<!-- 解答
// 題目一
const sum = (a, b) => {
  let c = a + b;
  return c;
}
console.log(sum(5, 6));

// 題目二
let square = num => num * num;
console.log(square(5));

// 題目三
setTimeout(() => console.log('延遲 1 秒'), 1000);

// 題目四
let arr = [1, 2, 3];
let arrNew = arr.map((item, i) => item * i);
console.log(arrNew);

// 題目五
let obj = {
  fn: a => a * a
}
console.log(obj.fn(10));
-->

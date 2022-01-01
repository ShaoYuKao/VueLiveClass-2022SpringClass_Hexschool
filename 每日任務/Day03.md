---
tags: Vue 直播班 - 2022 春季班
---

12/29 每日任務

今天的每日任務主題為 物件觀念、Bootstrap 表單整合

# 🏅 Day 3
###### tags: `Vue 直播班 - 2022 春季班`

小教學
---
#### Object.keys(), Object.values() 介紹
* Object.keys() 可以取得指定物件的所有 key 值，並回傳一個陣列。
* Object.values() 可以取得指定物件的所有 value 值，並回傳一個陣列。

```js=
const object1 = {
  a: "字串",
  b: 42,
  c: false
};

console.log(Object.keys(object1)); // 結果: ["a", "b", "c"]
console.log(Object.values(object1)); // 結果: ["字串", 42, false]
```

題目 (使用 CodePen 作答)
---
接續 Day2 的每日任務，請同學透過以下物件執行題目要求:
1. 建立一個陣列，其中包含所有的屬性名稱 (需使用 Object.keys)。
2. 建立一個陣列，其中包含所有的屬性值 (需使用 Object.values)。
3. 承接第 1 題，透過 forEach、使用 console.log 輸出陣列的所有屬性名稱。
4. 承接第 2 題，透過 for 迴圈、使用 console.log 輸出陣列的所有屬性值。

迴圈參考: https://wcc723.github.io/javascript/2017/06/29/es6-native-array/

```js=
let obj = {
  a: 'a',
  1: 'b',
  '這是中文字': 'c',
  'b': 'd',
  '--some data': 'e'
}
```

Bootstrap 表單
---
接續[前一天](https://hackmd.io/ut1-4TCCRsOnalZ1bsr2Rg)，將表單元素整合，試著還原下方圖片（使用 Codepen 作答）
![](https://i.imgur.com/nm4XLOH.png)

可以參考：[Bootstrap 水平表單](https://bootstrap5.hexschool.com/docs/5.1/forms/layout/#horizontal-form)



回報流程
---
請同學依照下圖教學觀看解答、回報答案:

![](https://i.imgur.com/QtL8zEW.png)

回報格式如下圖，請在「回報區」使用註解回報答案 (為了統計人數，請同學依序加上「報數」)

![](https://i.imgur.com/L7kyew8.png)

<!-- 解答
// 1
let objKeys = Object.keys(obj);

// 2
// 補充: 可以用 sort() 針對陣列內容進行排序
let objValues = Object.values(obj).sort();

// 3
objKeys.forEach((item) => {
	console.log(item);
})

// 4
for (let i = 0; i < objValues.length; i++) {
	console.log(objValues[i]);
}

- Bootstrap - 
https://codepen.io/Bingbingboom/pen/NWvmMbB
-->


---
tags: Vue 直播班 - 2022 春季班
---

# 🏅 Day 11
###### tags: `Vue 直播班 - 2022 春季班`

### 物件參考觀念 (關鍵字: JS 深拷貝、淺拷貝差異)

題目 (直接貼上答案)
---
(1) 
1-1. 請問以下的輸出結果為何?
1-2. 如果希望 `console.log(obj === objNew);` 的結果為 false，則可以如何修改?

```js=
let obj = {
    title: '錢錢',
    amounts: 66666,
}
let objNew = obj;
objNew.amounts = 123;
console.log(obj.amounts); // 輸出結果為何? 
console.log(obj === objNew); // 輸出結果為 true 還是 false?
```

(2) (陷阱題!，需要用深拷貝處理)
2-1. 請問以下的輸出結果為何?
2-2. 如果希望調整 `objNew.innerObj` 時不會影響到 obj，則可以如何修改?

```js=
let obj = {
    title: '錢錢',
    amounts: 66666,
    innerObj: {
    	title: '私房錢',
      amounts: 1000
    }
}
let objNew = {...obj};
console.log(obj === objNew); // 輸出結果為 true 還是 false?
objNew.innerObj.amounts = 2000;
console.log(obj.innerObj.amounts); // 輸出結果為何?
```

回報流程
---
請同學依照下圖教學觀看解答、回報答案:

![](https://i.imgur.com/QtL8zEW.png)

回報格式如下圖，請在「回報區」使用註解回報答案 (為了統計人數，請同學依序加上「報數」)

![](https://i.imgur.com/L7kyew8.png)

<!-- 解答
(1)
1-1. 
console.log(obj.amounts) // 123
console.log(obj === objNew) // true
1-2.
// 淺拷貝
可以將 let objNew = obj; 修改為 
a. let objNew = {...obj}; 
b. let objNew = Object.assign({}, obj); 

// 深拷貝
let objNew = JSON.parse(JSON.stringify(obj)); 

(2)
2-1.
console.log(obj === objNew); // 結果為 false
objNew.innerObj.amounts = 2000;
console.log(obj.innerObj.amounts); // 結果為 2000

2-2.
// 深拷貝
可以將 let objNew = {...obj}; 修改為 
let objNew = JSON.parse(JSON.stringify(obj));
-->


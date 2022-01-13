---
tags: Vue 直播班 - 2022 春季班
---

# 🏅 Day 8
###### tags: `Vue 直播班 - 2022 春季班`

題目 (使用 CodePen 作答)
---
請同學修改程式碼以符合以下要求 (只可以修改註解範圍內的程式碼):

step1. 將 town 的內容複製到 townData。
step2. 將 Ming, Rick 兩個物件加入到 townData.resident 中
>`townData === town` 的結果須為 false。

**參考觀念:**
[1. JavaScript 展開與其餘](https://wcc723.github.io/javascript/2017/12/24/javascript-spread-operator/)
[2. Object.assign()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
[3. 重新認識 JavaScript: Day 05 JavaScript 是「傳值」或「傳址」？](https://ithelp.ithome.com.tw/articles/10191057)


```js=
let town = {
  name: '真心鎮',
  resident: []
}
let townData = {};
let Ming = { name: '小明', age: 16 };
let Rick = { name: '瑞克', age: 21 };

/*程式碼修改處 (可以更改 function 規則)*/
function addResident(obj, res1, res2) {
    
}
/*程式碼修改處*/

addResident(town, Ming, Rick);
console.log(townData === town); // 結果須為 false
```

Bootstrap 響應式格線系統
---
接續前一天[格線系統](https://hackmd.io/DoER0__AQN2eK5G1r7xqsQ#Bootstrap-%E6%A0%BC%E7%B7%9A%E7%B3%BB%E7%B5%B1)，可以嘗試加入斷點，讓網格可以響應式，隨著斷點改變排版
利用此 [Codepen](https://codepen.io/Bingbingboom/pen/ExvJOEr?editors=1010)，修改 `...` 的部分，將畫面還原成下方樣式

- 電腦版時（lg）
  ![](https://i.imgur.com/J6fLW9p.png)

- 平板時（md）
  ![](https://i.imgur.com/8bo52aB.png)

- 手機版時
  ![](https://i.imgur.com/f5ekBgS.png)





回報流程
---
請同學依照下圖教學觀看解答、回報答案:

![](https://i.imgur.com/QtL8zEW.png)

回報格式如下圖，請在「回報區」使用註解回報答案 (為了統計人數，請同學依序加上「報數」)

![](https://i.imgur.com/L7kyew8.png)

<!-- 解法一
mingTransfer.forEach(item => {
	mingAccount.depositRecord.push(item);
    mingAccount.deposit += item.amounts;
})
console.log(mingAccount);
-->

<!-- 解法二
mingTransfer.forEach(item => {
	mingAccount.depositRecord.push(item);
})
mingAccount.deposit = mingAccount.depositRecord.reduce((prev, curr) => {return prev + curr.amounts}, 0);
console.log(mingAccount);
-->

<!-- Bootstrap
https://codepen.io/Bingbingboom/pen/ZEJZmKo 
-->


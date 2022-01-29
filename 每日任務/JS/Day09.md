---
tags: Vue 直播班 - 2022 春季班
---

# 🏅 Day 9
###### tags: `Vue 直播班 - 2022 春季班`

請同學先閱讀完 「[JavaScript 表達式觀念及運用 - JS Expression](https://wcc723.github.io/development/2020/09/17/js-expression/)」 這篇文章後再作答。

題目 (直接貼上答案)
---
#### 問題一 (判斷何者為表達式):

```js=
if(Ans) {
  console.log("Ans 是表達式");
}
```

請問以下有哪些選項代入 Ans 可以輸出 console.log 不會報錯? 
補充: [真值假值觀念](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy)

```
1. 2 === 2
2. "string"
3. var a 
4. if(true){let a = 2;}
5. [25, 30] // 純陣列
6. {name: "hexSchool"}  // 純物件
```

#### 問題二(表達式的應用):
```js=
function hexIsGood() {
  return true;
}
```

以上程式碼為一個「表達式」，請大家到 [MDN](https://developer.mozilla.org/en-US/) 或是透過 Google 搜尋，尋找有哪些程式運作可以插入以上的表達式，仍能正確運行。

舉例 (if 判斷式):
```js=
function hexIsGood() {
  return true;
}
if(hexIsGood()) {console.log("此程式碼可以運作")};
```


Bootstrap 格線系統 - 常見錯誤
---
在運用格線系統 `.row` 時，外層需使用 `.container` 、 `.container-*`，避免產生 x 軸
請將此 [Codepen](https://codepen.io/Bingbingboom/pen/yLodLqP?editors=1010) 補上 `.container-*`，並觀察其差異

回報流程
---
請同學依照下圖教學觀看解答、回報答案:

![](https://i.imgur.com/QtL8zEW.png)

回報格式如下圖，請在「回報區」使用註解回報答案 (為了統計人數，請同學依序加上「報數」)

![](https://i.imgur.com/L7kyew8.png)

<!-- 解答
// 解法一
function addResident(obj, res1, res2) {
    townData = {...obj};
    townData.resident.push(res1);
    townData.resident.push(res2);
}

// 解法二
function addResident(obj, res1, res2) {
    townData = Object.assign({}, obj);
    townData.resident.push(res1, res2); // push 可推入多個值
}

// 解法三
function addResident(obj, ...res) {
    townData = Object.assign({}, obj);
    townData.resident.push(...res);
}

- Bootstrap -
將 ... 改為 .container、.container-fluid、.container-sm .. 都可以

-->
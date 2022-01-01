---
tags: Vue 直播班 - 2022 春季班
---

12/28 每日任務

今天的每日任務主題為 JS 物件取值、Bootstrap 表單元素運用

# 🏅 Day 2
###### tags: `Vue 直播班 - 2022 春季班`

物件取值
---
> 1. 物件中分為「屬性」及「值」。
> 2. 屬性為物件中的欄位名稱，而值是該屬性所代表的值。
> 3. 「屬性名稱」在運作上都是以「字串」的形式儲存，所以命名上可以使用特殊符號

在物件內新增、修改、取得屬性時最常使用的方式是「點記法」:

### 點記法 (Dot notation)
```js=
let obj = {
    a: 'value A'
};
obj.$b = 'value B';  // 在物件 obj 新增一個帶有特殊符號的屬性 $b，值為 'value B'。
obj.a = 'value edit'; // 將物件 obj 屬性 a 的值修改為 'value edit'。
console.log(obj.a); // 取得物件 obj 屬性 a 的值
console.log(obj.$b); // 取得物件 obj 屬性 $b 的值
```

不過點記號在存取時會有一些限制。舉例來說，**當屬性名稱帶有數值、小數點、空格時，就無法正確運作**。這時就會改用「括弧記法」:

### 括弧記法 (Bracket notation)
```js=
let obj = {
    a: 'value A'
};
obj['-- data'] = '雨量資料'; 
obj['PM2.5'] = 25;
obj['1b'] = '1b';
console.log(obj['-- data']) // 結果為 '雨量資料'
console.log(obj['PM2.5']) // 結果為 25
console.log(obj['1b']) // 結果為 '1b'
// 也可以代入變數
let a = 'a';
console.log(obj[a]); // 結果為 'value A'
```

題目(請使用 CodePen 作答)
---
```js=
let c = ' 這是中文字';
let arr = {
  a: 'a',
  1: 'b',
  ' 這是中文字': 'c',
  'b': 'd',
  '--some data': 'e'
}

console.log();  // 請取得結果為 'b' 的值
console.log();  // 請取得結果為 'c' 的值，必須使用變數
console.log();  // 請取得結果為 'd' 的值，必須使用點記號
console.log();  // 請取得結果為 'e' 的值
```

Bootstrap 表單元素
---
- label、input
  運用 .form-label、.form-control 呈現 Bootstap 基本樣式
  
  ```html=
  <label for="mail" class="form-label">Email address</label>
  <input type="email" class="form-control" id="mail" placeholder="name@example.com">
  ```
  > 注意：
  > 1. label for 與 input id 需一致
  > 2. input 需運用正確的 [type 屬性](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/input#form_%3Cinput%3E_types)

  
- select 
  運用 .form-select 呈現 Bootstrap 基本下拉選單樣式
  ```html=
  <select class="form-select" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  ```
  
- checkbox & radio
  運用 .form-check、.form-check-label、.form-check-input 呈現
  
  checkbox（通常為多選）
  input type 屬性需為 checkbox，可以加上 checked 屬性讓選項預設選取
  ```html=
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
      Default checkbox
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
    <label class="form-check-label" for="flexCheckChecked">
      Checked checkbox
    </label>
  </div>
  ```
  
  radio（為單選）
  input type 屬性需為 radio，可以加上 checked 屬性讓選項預設選取
  > name 屬性的值需相同，表示為同一群組
  ```html=
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
    <label class="form-check-label" for="flexRadioDefault1">
      Default radio
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
    <label class="form-check-label" for="flexRadioDefault2">
      Default checked radio
    </label>
  </div>
  ```
  
詳細可以再參考：Bootstrap [表單控制](https://bootstrap5.hexschool.com/docs/5.1/forms/form-control/)、[select](https://bootstrap5.hexschool.com/docs/5.1/forms/select/)、[checks&radios](https://bootstrap5.hexschool.com/docs/5.1/forms/checks-radios/)

請嘗試修改此 [Codepen](https://codepen.io/Bingbingboom/pen/eYEwaRm) `...` 的部分，還原成下方圖片樣式

![](https://i.imgur.com/3sGR3up.png)

回報流程
---
請同學依照下圖教學觀看解答、回報答案:

![](https://i.imgur.com/QtL8zEW.png)

回報格式如下圖，請在「回報區」使用註解回報答案 (為了統計人數，請同學依序加上「報數」)

![](https://i.imgur.com/L7kyew8.png)

<!-- 解答
// 1 方法一
console.log(arr['1']); // 請取得結果為 'b' 的值
// 1 方法二
console.log(arr[1]);  // 請取得結果為 'b' 的值

// 2
console.log(arr[c]);  // 請取得結果為 'c' 的值，必須使用變數
// 4
console.log(arr.b);  // 請取得結果為 'd' 的值，必須使用點記號
// 5
console.log(arr['--some data']);  // 請取得結果為 'e' 的值

- Bootstrap 表單 -
https://codepen.io/Bingbingboom/pen/RwZzmrZ
-->

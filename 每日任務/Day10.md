---
tags: Vue 直播班 - 2022 春季班
---

# 🏅 Day 10
###### tags: `Vue 直播班 - 2022 春季班`

教學 - JS 的型別轉換
---
#### (1) 型別轉換成數字
舉例: 表單 input 取回的值型別為字串，如果要做加總則需要先用 `parseInt()` 轉換成數字型別。 

HTML
```htmlembedded=
<input type="text" id="target">
<button class="btn">按鈕</button>
```
JS
```js=
let btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    let value = document.querySelector('#target').value;
    console.log(value + value); // 字串
    value = parseInt(value);
    console.log(value + value); // 數字
})
```

#### (2) 型別轉換成字串
常見將「物件」轉換成字串型別 (像是 localStorage 的儲存規定要用字串)

```js=
let obj = {name: "Hex"};

JSON.stringify(42); // "42"
JSON.stringify(true); // "true"
JSON.stringify(obj); // "{"name":"Hex"}"
```

#### 實際應用" 型別轉換成物件、陣列 (此為額外補充!)

取得 localStorage 儲存的物件、陣列「字串」時，需要將它們轉換回物件、字串格式才能正常使用。同學可以觀察以下 console.log() 前後的差異。

[localStorage 介紹](https://developer.mozilla.org/zh-TW/docs/Web/API/Window/localStorage)

```js=
// 假設此為 localStorage 取回的字串
let obj = '{"name":"Hex"}';
let arr = '[20, 30]';

console.log(obj.name);
console.log(arr[0]);

obj = JSON.parse(obj); // 轉回物件格式
arr = JSON.parse(arr); // 轉回陣列格式

console.log(obj.name);
console.log(arr[0]);

```

題目 (直接貼上答案)
---
* 取得範例中的 input DOM 元素，並且取得其中的值 （DOM 結構上取得的都是字串）
* 將值定義成變數命名為 value
* 使以下判斷式驗證執行 if 的結果 (答錯魯一輩子喔 :D) <!-- 太殘酷 -->

HTML
```htmlembedded=
<input type="text" value="520" id="app">
```

JS
```js=
if (value === 520) {
  console.log('暗戀對象喜歡我')
} else {
  console.log('暗戀對象只想和我當普通朋友')
}
```

Bootstrap JavaScript 運用
---
使用 `data-bs-*` 屬性啟用（需載入 [ Bootstrap JS CDN](https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js)）

有兩種常見用法（以 modal 為例）：

* `data-bs-toggle="modal"`  -> 要啟用的控制元件
* `data-bs-target="#exampleModal"`  -> 指向特定的互動視窗 modal
    
    > #exampleModal 為想要開啟的 modal 視窗 id 

```html=
  <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
```

請觀看此 [Codepen](https://codepen.io/Bingbingboom/pen/ZEJdYVd?editors=1010)，修改 `...` 的部分，讓按鈕可以開啟相對應的視窗

回報流程
---
請同學依照下圖教學觀看解答、回報答案:

![](https://i.imgur.com/QtL8zEW.png)

回報格式如下圖，請在「回報區」使用註解回報答案 (為了統計人數，請同學依序加上「報數」)

![](https://i.imgur.com/L7kyew8.png)

<!-- 解答一
1, 2, 5, 6
因為它們都是表達式，會回傳結果。
-->

<!-- 解答二
// Ex1: 可以帶入三元運算子
function hexIsGood() {
  return true;
}
console.log(hexIsGood() ? '很棒棒' : '不棒棒');

// Ex2: 可以代入樣板字面值
function hexIsGood() {
  return true;
}
let str = `六角學院很讚: ${ hexIsGood() }`;
console.log(str);

-->
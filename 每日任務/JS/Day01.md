---
tags: Vue 直播班 - 2022 春季班
---

12/27 每日任務

今天的每日任務主題為 JS 變數命名、Bootstrap OOCSS 運用

# 🏅 Day 1
###### tags: `Vue 直播班 - 2022 春季班`

變數命名
---
在 JavaScript 中命名規範中，會建議使用駝峰式的命名，駝峰式的命名又分為大駝峰與小駝峰，可參考「[Wiki 上的介紹](https://zh.wikipedia.org/wiki/%E9%A7%9D%E5%B3%B0%E5%BC%8F%E5%A4%A7%E5%B0%8F%E5%AF%AB)」。大多數的情況來說，我們都會使用小駝峰來進行 JS 變數的命名。

如 我的名字可以使用 `myName` 的方式進行命名。另外，如果是函式時則會以動詞的方式作為開頭，如：繪製表格使用 `renderTable` 的名稱。

每日任務條件：
* 宣告變數、函式，變數請給予值
* 變數名稱請用小駝峰的方式定義，並以非動詞作為開頭
* 函式請用動詞作為開頭

題目 (直接在答案區貼上答案)
---
```
變數:
1. 我的 slack 名稱:mySlack
2. 餐廳數量:restaurantNum
3. 課程 id:classId
4. 畢業日期:graduateDate
5. 練習時間:practiceTime

函式:
1. 取得產品資料:getProductData
2. 渲染圖表:renderChart
3. 篩選購物車資料:filterCartData
4. 排序註冊日期:sortRegisterDate
5. 刪除訂單:deleteOrder
```

Bootstrap OOCSS
---
Bootstrap 中有 OOCSS 結構與樣式分離的設計模式（像是：按鈕結構 .btn 與樣式（顏色、大小 ..） .btn-primary），可以提升 CSS 的複用性

請嘗試利用 Bootstrap5 還原下方圖片樣式（修改 [Codepen](https://codepen.io/Bingbingboom/pen/jOLdmEV) 中 `...` 的部分，並以 Codepen 提交）

![](https://i.imgur.com/ah9cHAW.png)

可以參考：
* https://bootstrap5.hexschool.com/docs/5.1/components/buttons/ 
* https://bootstrap5.hexschool.com/docs/5.1/components/alerts/



回報流程
---
請同學依照下圖教學觀看解答、回報答案:

![](https://i.imgur.com/QtL8zEW.png)

回報格式如下圖，請在「回報區」使用註解回報答案 (為了統計人數，請同學依序加上「報數」)

![](https://i.imgur.com/L7kyew8.png)

<!-- 解答
變數:
1. 我的 slack 名稱: mySlackName
2. 餐廳數量: restaurantNum
3. 課程 id: courseId
4. 畢業日期: graduateDate
5. 練習時間: practiceTime

函式:
1. 取得產品資料: getProductData
2. 渲染圖表: renderChart
3. 篩選購物車資料: filterCartData
4. 排序註冊日期: sortEnrollDate
5. 刪除訂單: deleteOrder

 - Bootstrap -

<div class="container p-4">
  <div class="w-50 alert alert-danger " role="alert">
    這是警告！
  </div>
  <button class="btn btn-primary btn-lg">按鈕</button>
  <button class="btn btn-success">按鈕</button>
  <button class="btn btn-warning btn-sm">按鈕</button>
</div>

-->
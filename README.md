<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/tnfshcec/QuorakiAPI">
    <img src="https://media.discordapp.net/attachments/1132971598471770172/1243250967189651530/Group_51.png?ex=6650cb31&is=664f79b1&hm=df4cc947370abef19d42c0bd593de6c4019fbd83d900978fc90880a9921d3306&=&format=webp&quality=lossless" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">QuorakiAPI</h3>

  <p align="center">
    QuorakiAPI 代表 "Quote ランキング"（語錄評比）。一個跨世代方便大家語錄評比的API。<br>
    <a href="https://quoraki.heyloon.me/swagger">API網址</a>
    ·
    <a href="https://github.com/tnfshcec/QuorakiAPI/issues/new">錯誤回報</a>
    · 
    <a href="https://github.com/tnfshcec/QuorakiAPI/issues/new">功能請求</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>目錄</summary>
  <ol>
    <li>
      <a href="#關於quorakiapi">關於QuorakiAPI</a>
    </li>
    <li>
      <a href="#開始使用">開始使用</a>
      <ul>
        <li><a href="#前置作業">前置作業</a></li>
        <li><a href="#使用">使用</a></li>
      </ul>
    </li>
    <li><a href="#未來計劃">未來計劃</a></li>
    <li><a href="#協力開發">協力開發</a></li>
    <li><a href="#授權">授權</a></li>
    <li><a href="#聯絡我們">聯絡我們</a></li>
    <li><a href="#特別感謝">特別感謝</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## 關於QuorakiAPI

![雞舍Logo](https://media.discordapp.net/attachments/1132971598471770172/1243243021932429342/cec-sticker.png?ex=6650c3ca&is=664f724a&hm=f43be82ae3bdc2792ec36321b2446d579de8464ff74feb3d0109a8ea70690ab7&=&format=webp&quality=lossless&width=1152&height=656)

這是一個由國立臺南第一高級中學電機社，受[黑特南一中2.0](https://www.facebook.com/hatetnfsh21)之啟發所製作的語錄評比API。  
其中Quoraki為「Quote」（語錄）以及「ランキング」（評比）的結合體。這是一個冷笑話，但寓意深遠。

<p align="right">(<a href="#readme-top">回到頂部</a>)</p>


<!-- GETTING STARTED -->
## 開始使用

在開始使用之前，請先確認自己有一顆熱愛評比的心，阿彌陀佛。<br>
如果你是想要直接調API，可以到[這裡](https://quoraki.heyloon.me/swagger)自訂自己的網址，或是以以下範例直接調用。<br>
``https://quoraki.heyloon.me/api/rank?text={要評比的文字}&type={評比類型}``<br>
如果要自己架記得要有Git。

### 前置作業

複製我們的專案到本地就好。
  ```sh
  git clone https://github.com/tnfshcec/QuorakiAPI.git
  ```

### 使用

以下兩項請先選好自己要用途的:D

#### 架設API伺服器

1. 構建 Docker 容器
   ```sh
   cd QuorakiAPI
   docker build -t quorakiapi .
   ```
2. 開啟 Docker 容器
   ```sh
   docker run -p 3000:3000 quorakiapi
   ```
3. 進入`http://localhost:3000`
  
#### 開發
1. 安裝 [Bun](https://github.com/oven-sh/bun)
2. 安裝依賴項目
   ```sh
   bun install
   ```
3. 開啟開發伺服器
   ```sh
   bun run dev
   ```

<p align="right">(<a href="#readme-top">回到頂部</a>)</p>


<!-- ROADMAP -->
## 未來計劃

- [ ] 加上更多語錄評比
- [x] 跑路

也可以看看[open issues](https://github.com/tnfshcec/QuorakiAPI/issues) 看看有沒有誰發了新的想法。

<p align="right">(<a href="#readme-top">回到頂部</a>)</p>



<!-- CONTRIBUTING -->
## 協力開發

如果你覺得這個專案有值得改進的地方，歡迎 fork 並更改完後發 PR 給我們，或是在 issue 中提出並加上 enchance 標籤。  
別忘了給我們星星，拜託🐔

1. Fork 這個專案
2. 創一個屬於你的功能的分支 (`git checkout -b feature/AmazingFeature`)
3. Commit 你的變更 (`git commit -m 'Add some AmazingFeature'`)
4. Push 到你的分支 (`git push origin feature/AmazingFeature`)
5. 開一個 PR

<p align="right">(<a href="#readme-top">回到頂部</a>)</p>



<!-- LICENSE -->
## 授權

我們使用 MIT License. 查看 `LICENSE` 獲得更多資訊。

<p align="right">(<a href="#readme-top">回到頂部</a>)</p>



<!-- CONTACT -->
## 聯絡我們

臺南一中電機社 - [@tnfshcec](https://x.com/tnfshcec) - [臺南一中電機社](https://www.facebook.com/TNFSHCEC) - tnfshcec@gm.tnfsh.tn.edu.tw

專案連結： [https://github.com/tnfshcec/QuorakiAPI](https://github.com/tnfshcec/QuorakiAPI)

<p align="right">(<a href="#readme-top">回到頂部</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## 特別感謝

* [ElysiaJS](https://github.com/elysiajs/elysia)

<p align="right">(<a href="#readme-top">回到頂部</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/tnfshcec/QuorakiAPI.svg?style=for-the-badge
[contributors-url]: https://github.com/tnfshcec/QuorakiAPI/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tnfshcec/QuorakiAPI.svg?style=for-the-badge
[forks-url]: https://github.com/tnfshcec/QuorakiAPI/network/members
[stars-shield]: https://img.shields.io/github/stars/tnfshcec/QuorakiAPI.svg?style=for-the-badge
[stars-url]: https://github.com/tnfshcec/QuorakiAPI/stargazers
[issues-shield]: https://img.shields.io/github/issues/tnfshcec/QuorakiAPI.svg?style=for-the-badge
[issues-url]: https://github.com/tnfshcec/QuorakiAPI/issues
[license-shield]: https://img.shields.io/github/license/tnfshcec/QuorakiAPI.svg?style=for-the-badge
[license-url]: https://github.com/tnfshcec/QuorakiAPI/blob/master/LICENSE

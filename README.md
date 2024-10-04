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
    <img src="https://raw.githubusercontent.com/tnfshcec/logo/refs/heads/main/logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">QuorakiAPI</h3>

  <p align="center">
    「クォートランキング」<br>
    跨世代方便大家語錄評比的API。<br>
    <!--<a href="https://quoraki.heyloon.me/swagger">公用API</a>
    ·-->
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
        <li><a href="#使用方法">使用方法</a></li>
        <li><a href="#自行架設">自行架設</a></li>
      </ul>
    </li>
    <li>
      <a href="#進行開發">進行開發</a>
      <ul>
        <li><a href="#前置作業">前置作業</a></li>
        <li><a href="#啟動開發伺服器">啟動開發伺服器</a></li>
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

![雞舍Logo](https://raw.githubusercontent.com/tnfshcec/logo/refs/heads/main/stickers/cec-sticker.png)

這是一個由國立臺南第一高級中學電機社，受[黑特南一中2.0](https://www.facebook.com/hatetnfsh21)之啟發所製作的語錄評比API。  
其中Quoraki為「クォート」（語錄）以及「ランキング」（評比）的結合體。這是一個冷笑話，但寓意深遠。

<p align="right">(<a href="#readme-top">回到頂部</a>)</p>


<!-- GETTING STARTED -->
## 開始使用

在開始使用之前，請先確認自己有一顆熱愛評比的心，阿彌陀佛。

<!--
如果你是想要直接調API，可以使用我們的[公用API](https://quoraki.heyloon.me/swagger)，或是架設自己的伺服器。
-->

### 使用方法

非常簡單，只要發送GET請求到`/api/rank`就好了。以下示範：

`http://<origin>/api/rank?text=評比南一中&type=quote`

參數說明：

- `text`: 必要。評比的文字。
- `type`: 非必要。評比的類型。預設是 `quote`，即「語錄評比」。

詳細的說明請洽 `/swagger` 頁面，在那邊你也可以找到所有可用的評比類型。

### 自行架設

1. 確認已經安裝了 Docker。
2. 啟動我們的 Docker Image。

   ```sh
   docker run -p 3000:3000 ghcr.io/tnfshcec/quorakiapi:main
   ```

## 進行開發

### 前置作業

1. 複製我們的專案到本地。

   ```sh
   git clone https://github.com/tnfshcec/QuorakiAPI.git
   ```
2. 確認安裝 [Bun](https://bun.sh)。
3. 安裝依賴項目

   ```sh
   bun install
   ```
### 啟動開發伺服器

```sh
bun run dev
```

開發伺服器即會在 [localhost:3000](http://localhost:3000) 啟動。

<p align="right">(<a href="#readme-top">回到頂部</a>)</p>


<!-- ROADMAP -->
## 未來計劃

- [ ] 加上更多語錄評比
- [ ] Web UI
- [x] 跑路

也可以看看 [open issues](https://github.com/tnfshcec/QuorakiAPI/issues) 看看有沒有誰發了新的想法。

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

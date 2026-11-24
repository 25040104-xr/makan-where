<h1 align="center">🍜 Makan Where?</h1>

<p align="center">
  <b>Can't decide what to eat? Let the gacha machine decide for you.</b><br/>
  Every stall in RP's food courts, plus a random picker for indecisive days.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>

<p align="center">
  <img width="260" alt="Makan Where demo" src="https://github.com/user-attachments/assets/7b285df3-2a0e-4b75-b47d-42274b425d99" />
</p>

<p align="center">
  ▶️ <a href="https://drive.google.com/file/d/1g5P22yVWWQujAGyzh0i-zzGpR7JVWavG/view?usp=sharing"><b>Watch the video walkthrough</b></a>
</p>

---

## 💭 Why I made it

At RP, my friends and I always end up outside the food court asking "eat what?" for 10 minutes. So I built an app that decides for us.

## ✨ Features

| | |
|---|---|
| 🎰 **Gacha picker** | Press TURN! for a random stall from all of RP's food courts |
| 🔒 **Lock it in** | Keep the result you like, or spin again |
| 📋 **Grouped by food court** | Lawn, North and South, each in its own section |
| ✏️ **Edit, favourite, delete** | Tap any stall to update it or add it to your favourites ❤️ |
| 🎨 **One-file theme** | Every colour lives in `Colors.js` |

## 🛠️ How it's built

The sections are generated from **one data array** with `filter`, `map` and `new Set`, so adding a stall takes one line in `Data.js`. The layout uses StyleSheet and Flexbox.

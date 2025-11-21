# 💎 智谱清言 (ChatGLM) - 侧边栏会话导航
*(ChatGLM Sidebar Navigator)*

> **极简、稳定、高颜值的沉浸式对话导航系统。**
> *Minimalist, Stable, and Aesthetically Pleasing Navigation for ChatGLM.*

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-13.1-green.svg)
![Author](https://img.shields.io/badge/author-zdm%40Gai.cn-orange.svg)

<br>

![预览图](preview.png)

<br>

## 📖 简介 (Introduction)

原生智谱清言在生成长篇对话时，用户往往难以快速回顾历史提问或定位上下文。
**ChatGLM Sidebar Navigator** 通过 Tampermonkey (油猴) 脚本，在页面右侧生成一个**悬浮宝石导航栏**，为您提供丝滑的阅读体验。

**核心升级：** 采用 Flexbox 布局锁死技术，完美解决长列表导致的按钮溢出问题，确保导航栏在任何屏幕高度下都稳定可用。

---

## ✨ 核心功能 (Core Features)

### 1. ⭐ 双击变星标 (Double-click to Star)
**交互的灵魂所在。**
*   **操作**：在侧边栏的宝石节点上**双击鼠标**。
*   **效果**：节点瞬间点亮，变为高亮星标状态。
*   **记忆**：脚本会自动记住你在该会话中的星标位置，刷新页面后依然存在。

### 2. 🔒 布局锁死 (Layout Lock)
**V13.1 独家修复。**
*   无论对话列表多长，顶部的 `▲` (电梯) 按钮和底部的 `»` (折叠) 按钮**永远固定在视口内**。
*   中间滚动区自动计算剩余高度，绝不被挤出屏幕。

### 3. 💎 宝石典藏 (Gemstone Skins)
**拒绝枯燥。**
*   内置精美的 Base64 宝石图标（紫晶/七彩），替代默认的圆点。
*   支持自定义：你可以替换脚本中的 Base64 代码，换成你喜欢的任何图片。

### 4. 📍 平滑锚点 (Smooth Scrolling)
*   自动识别页面中的所有提问 (Q1, Q2...)。
*   点击宝石，页面将平滑滚动至目标位置，并伴有高亮闪烁提示。

### 5. 📱 智能折叠 (Responsive Design)
*   **自动模式**：当窗口宽度 < 1400px 时，侧边栏自动收起，防遮挡。
*   **手动模式**：点击底部按钮可一键收放，仅留一枚精致的悬浮按钮，互不打扰。

---

## 🚀 快速安装 (Installation)

1. 安装浏览器扩展 [Tampermonkey](https://www.tampermonkey.net/)。
2. **[👉 点击这里安装脚本 (GreasyFork)](你的GreasyFork链接)**
3. 刷新智谱清言页面，即刻体验。

---

## ⚙️ 高级自定义 (Customization)

脚本代码顶部预留了配置区，您可以自由替换图片素材：

```javascript
// 星标态宝石 (Base64)
const GEM_STAR = "YOUR_BASE64_HERE";

// 默认态宝石 (Base64)
const GEM_NORMAL = "YOUR_BASE64_HERE";

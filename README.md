# 💎 智谱清言 (ChatGLM) 侧边栏会话导航
*(ChatGLM Sidebar Navigator)*

> **极简、稳定、高颜值的对话导航系统。专为解决长对话定位困难而生。**
> *Stable & Minimalist Dialogue Navigation with Gemstone Skins for ChatGLM.*

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-13.1-green.svg)
![Author](https://img.shields.io/badge/author-zdm%40Gai.cn-orange.svg)

## 📖 简介 (Introduction)

原生智谱清言在生成长篇对话时，难以快速回顾历史提问。本项目通过 Tampermonkey 脚本，在页面右侧生成一个**悬浮宝石导航栏**。

**V13.1 特别优化：** 采用 Flexbox 布局锁死技术，完美解决长列表导致的按钮溢出问题，确保导航栏在任何屏幕高度下都稳定可用。

## ✨ 核心功能 (Features)

*   **🔒 布局锁死 (Layout Lock)**: 无论对话列表多长，顶部的“电梯”按钮和底部的“折叠”按钮永远固定在视口内，绝不被挤出屏幕。
*   **📍 精准锚点**: 自动识别所有提问 (Q1, Q2...)，点击宝石即可平滑滚动直达。
*   **💎 宝石典藏**: 内置精美的 Base64 宝石图标（支持自定义），替代枯燥的默认圆点，支持“星标”⭐高亮显示。
*   **💾 智能记忆**: 基于 URL 哈希的本地存储，自动记住你在不同会话中标记的重点段落。
*   **📱 响应式折叠**: 窗口宽度 < 1400px 时自动收起，仅留一枚精致的悬浮按钮，互不打扰。

## 🚀 快速安装 (Installation)

1. 安装浏览器扩展 [Tampermonkey](https://www.tampermonkey.net/)。
2. **[👉 点击这里安装脚本 (GreasyFork)](你的GreasyFork链接)**
3. 刷新智谱清言页面，体验右侧的导航。

## ⚙️ 自定义皮肤 (Customization)

脚本内置了 `GEM_STAR` (星标态) 和 `GEM_NORMAL` (默认态) 变量。你可以编辑脚本代码，将 `const GEM_NORMAL = "..."` 中的 Base64 字符串替换为你喜欢的任何图片。

## 👨‍💻 作者 (Author)

**zdm@Gai.cn**
*   Bilibili: [space.bilibili.com/497930349](https://space.bilibili.com/497930349)
*   Github: [ChatGLM-Sidebar-Jump-Axis](https://github.com/sakura11111111111111/ChatGLM-Sidebar-Jump-Axis)

---
*如果觉得好用，请点亮右上角的 ⭐ Star！*

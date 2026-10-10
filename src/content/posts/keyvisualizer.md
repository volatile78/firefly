---
title: KeyVisualizer
published: 2026-10-10
pinned: false
description: Mac上的按键显示
tags: [Xcode, 软件, Mac, Liquid Glass]
category: 实验室
draft: false
---

> [!NOTE] AIGC 披露
> 使用 AI 生成介绍代码及文档。

# KeyVisualizer

![Platform](https://img.shields.io/badge/platform-macOS%2026%2B-blue)
![Language](https://img.shields.io/badge/language-Swift-orange)
![License](https://img.shields.io/badge/license-MIT-green)

::github{repo="volatile78/KeyVisualizer"}

> 一个常驻桌面的 macOS 键盘与鼠标可视化面板。让你随时看到自己按下了哪些键、鼠标是左键还是右键，而不需要盯着屏幕角落等弹窗出现。

## 📖 简介

KeyVisualizer 是一个基于 SwiftUI 和 AppKit 构建的 macOS 桌面工具。它在屏幕上显示一块常驻的迷你键盘面板，实时高亮你按下的每一个键。与传统的按键可视化工具（如 Keyviz、KeyCastr）不同，KeyVisualizer 采用**持续展示**而非**事件弹窗**的方式，面板始终存在，信息一眼可见，不需要盯着屏幕等待内容出现。

这个工具适合以下场景：

- **直播/录屏**：让观众随时看清你的按键操作
- **教学演示**：展示快捷键组合的按下过程
- **个人使用**：培养肌肉记忆、观察自己的打字习惯
- **游戏辅助**：实时查看 WASD 和鼠标按键状态

## ✨ 功能

### 键盘可视化
- 支持 Tab、Q/W/E/R、A/S/D/F、Shift、Ctrl、Option、Cmd、Space
- 按键位置按物理键盘布局排列

### 鼠标可视化
- 左键、右键实时高亮
- 位于键盘右侧，垂直排列

### 方向键模式
- 一键将 WASD 切换为 ↑/←/↓/→ 方向键显示
- 适合赛车、平台跳跃等使用方向键的游戏

### 窗口控制
- **始终置顶**：面板浮在所有窗口之上
- **透明度调节**：可调 20%~100%，不挡视线
- **鼠标悬停时变透明**：鼠标移到面板上自动变淡，方便拖拽或查看下方内容
- **拖动移动**：面板任意位置可拖动

### 外观
- macOS 26 Liquid Glass 材质
- 按键磨砂玻璃质感
- 支持自定义主题色（开发中）
- 配置窗口同样使用玻璃效果

### 配置持久化
- 所有设置自动保存到 UserDefaults
- 窗口位置记忆
- 重启后自动恢复

## 🖥 系统要求

- macOS 26 (Tahoe) 及以上
- 需要**辅助功能**权限（用于全局键盘与鼠标事件监听）

## 📦 安装

### 下载安装（推荐）

前往 [GitHub Releases](https://github.com/your-username/KeyVisualizer/releases) 下载最新的 `.dmg` 文件，双击打开，将 KeyVisualizer 拖入 Applications 文件夹。

### 从源码构建

```bash
git clone https://github.com/volatile78/KeyVisualizer.git
cd KeyVisualizer
open KeyVisualizer.xcodeproj
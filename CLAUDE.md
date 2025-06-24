# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

Abelia-tauriは、デスクトップOSのインターフェースをシミュレートするReactベースのWebアプリケーションです。プロジェクト名に「tauri」が含まれていますが、現在はTauri統合はなく、純粋なReact Webアプリケーションとして実装されています。

## 開発コマンド

```bash
# 開発サーバーを起動
npm run dev

# 本番ビルド（TypeScriptチェック + Viteビルド）
npm run build

# ESLintでコードをチェック
npm run lint

# 本番ビルドのプレビュー
npm run preview
```

## アーキテクチャ概要

### コンポーネント構造
- **Desktop** (`src/components/Desktop.tsx`): アプリケーション全体のコンテナ。ウィンドウ管理とタスクバーの統合を担当
- **Window** (`src/components/Window.tsx`): ドラッグ可能でリサイズ可能なウィンドウコンポーネント
- **Taskbar** (`src/components/Taskbar.tsx`): 開いているウィンドウの管理とスタートボタン機能を提供

### 状態管理
- React組み込みのuseStateフックを使用
- Desktopコンポーネントで以下の状態を管理：
  - `windows`: 開いているウィンドウのデータ配列
  - `activeWindowId`: 現在アクティブなウィンドウのID
  - `windowZIndexes`: ウィンドウの重なり順を管理するz-index値

### ウィンドウシステム
- ウィンドウはタイトルバーでドラッグ可能
- 右下コーナーからリサイズ可能
- クリックでフォーカスを切り替え（z-indexを更新）
- タスクバーでウィンドウ間の切り替えが可能

### 技術スタック
- **React** 19.1.0 - UIフレームワーク
- **TypeScript** ~5.8.3 - 型安全性
- **Vite** 6.3.5 - 高速ビルドツール
- **ESLint** - コード品質チェック

## ファイル構造

```
abelia-app/
├── src/
│   ├── components/      # UIコンポーネント
│   ├── assets/          # 静的アセット
│   ├── App.tsx          # ルートコンポーネント
│   └── main.tsx         # エントリーポイント
├── public/              # 公開アセット
└── [設定ファイル]       # TypeScript、Vite、ESLint設定
```

## 開発時の注意点

1. 新しいコンポーネントを作成する際は、既存のコンポーネント（Desktop、Window、Taskbar）のパターンに従う
2. TypeScriptの型定義を適切に使用する（interfaceでpropsを定義）
3. CSSファイルはコンポーネントごとに分離して管理
4. ウィンドウの状態管理はDesktopコンポーネントで一元化されている

## 今後の拡張可能性

- Tauri統合によるネイティブデスクトップアプリケーション化
- より複雑なウィンドウコンテンツ（ファイルエクスプローラー、テキストエディタなど）
- 状態管理ライブラリの導入（Redux、Zustandなど）
- テストフレームワークの追加
# Day 1: 重要ポイントまとめ

## 今日覚えるべき重要概念

### 1. Node.js と npm

```bash
# バージョン確認
node --version
npm --version

# パッケージのインストール
npm install

# スクリプトの実行
npm run dev
```

**覚えておくべきこと**:
- Node.js: JavaScript 実行環境
- npm: パッケージマネージャー
- package.json: 依存関係とスクリプトの定義ファイル

---

### 2. Vite の基本コマンド

```bash
# プロジェクト作成
npm create vite@latest プロジェクト名 -- --template react

# 開発サーバー起動
npm run dev

# ビルド（本番用）
npm run build

# プレビュー
npm run preview
```

---

### 3. プロジェクト構造

```
プロジェクト/
├── src/              # ソースコード
│   ├── main.jsx      # エントリーポイント
│   ├── App.jsx       # メインコンポーネント
│   └── App.css       # スタイル
├── public/           # 静的ファイル
├── index.html        # HTML テンプレート
└── package.json      # プロジェクト設定
```

**作業する場所**: 主に `src/` ディレクトリ

---

### 4. JSX の基本

JSX は JavaScript の中に HTML のような構文を書ける拡張です。

```jsx
// JSX の例
function App() {
  const name = "太郎"

  return (
    <div>
      <h1>こんにちは、{name}さん！</h1>
      <p>今日は{new Date().toLocaleDateString()}です</p>
    </div>
  )
}
```

**ポイント**:
- `{}` で JavaScript を埋め込める
- HTML に似ているが、微妙に違う（例: `className` を使う）
- return 内は1つのルート要素で囲む必要がある

---

### 5. コンポーネントの基本

React では、UI をコンポーネントという単位で管理します。

```jsx
// コンポーネント = JavaScript の関数
function Greeting() {
  return <h1>こんにちは！</h1>
}

// 他のコンポーネントから使う
function App() {
  return (
    <div>
      <Greeting />
    </div>
  )
}
```

**ポイント**:
- コンポーネント名は大文字で始める
- `export default` で他のファイルから使えるようにする
- `<コンポーネント名 />` で使用

---

### 6. CSS のインポート

```jsx
import './App.css'

function App() {
  return <div className="App">コンテンツ</div>
}
```

**ポイント**:
- `class` ではなく `className` を使う（JavaScript の予約語のため）
- CSS ファイルは `import` で読み込む

---

## よく使うキーボードショートカット

### VSCode（推奨エディタ）

| 操作 | Mac | Windows/Linux |
|------|-----|---------------|
| ファイル保存 | Cmd + S | Ctrl + S |
| ファイル検索 | Cmd + P | Ctrl + P |
| 複数行編集 | Cmd + D | Ctrl + D |
| コメント化 | Cmd + / | Ctrl + / |

### ターミナル

| 操作 | キー |
|------|------|
| 実行中のプロセスを停止 | Ctrl + C |
| 前のコマンドを表示 | ↑ キー |
| ターミナルをクリア | Ctrl + L |

---

## トラブルシューティング

### Q: npm install でエラーが出る

**A**: Node.js のバージョンを確認してください。v18 以上が必要です。

```bash
node --version
```

### Q: ブラウザに何も表示されない

**A**: 以下を確認:
1. 開発サーバーが起動しているか（ターミナルを確認）
2. ブラウザの URL が `http://localhost:5173/` か
3. コンソールにエラーがないか（F12 で開発者ツールを開く）

### Q: 変更が反映されない

**A**:
1. ファイルを保存したか確認（Cmd/Ctrl + S）
2. 開発サーバーを再起動（Ctrl + C → `npm run dev`）
3. ブラウザをリロード（Cmd/Ctrl + R）

---

## 次回予告: Day 2

明日は **JSX の詳細** を学びます：
- JSX の文法ルール
- 式の埋め込み
- 属性の指定方法
- フラグメント
- 条件付きレンダリング

---

## 参考リンク

- [React 公式ドキュメント](https://react.dev/)
- [Vite 公式ドキュメント](https://vitejs.dev/)
- [MDN JavaScript リファレンス](https://developer.mozilla.org/ja/docs/Web/JavaScript)

---

## 今日の成果

今日のゴールを達成できましたか？

- [ ] Node.js/npm の環境が整っている
- [ ] Vite で React プロジェクトを作成できた
- [ ] 開発サーバーを起動できた
- [ ] JSX ファイルを編集して、変更が反映されるのを確認した
- [ ] 簡単な自己紹介ページを作成した

すべてチェックが付いたら、Day 2 に進みましょう！

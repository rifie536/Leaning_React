# Day 1: ステップバイステップガイド

## Step 1: Node.js と npm の確認

ターミナルを開いて、以下のコマンドを実行してください。

```bash
node --version
npm --version
```

**期待される出力**:
```
v18.0.0以上
9.0.0以上
```

もしインストールされていない場合は、[Node.js 公式サイト](https://nodejs.org/)からインストールしてください（LTS版を推奨）。

---

## Step 2: プロジェクトを作成

作業ディレクトリに移動して、Vite で React プロジェクトを作成します。

```bash
# Learning_React ディレクトリに移動
cd /Users/ricefield/dev/Learning_React

# Day01用のプロジェクトを作成
npm create vite@latest day01-project -- --template react

# プロジェクトディレクトリに移動
cd day01-project

# 依存関係をインストール
npm install
```

### 実行時の質問

Vite が以下のような質問をしてきた場合:
- Project name: `day01-project` (そのままEnter)
- Select a framework: `React` を選択
- Select a variant: `JavaScript` を選択

---

## Step 3: プロジェクト構造を理解する

作成されたプロジェクトの構造を確認しましょう。

```bash
ls -la
```

### 主要なファイル・ディレクトリ

```
day01-project/
├── node_modules/       # インストールされたパッケージ（触らない）
├── public/             # 静的ファイル（画像など）
├── src/                # ソースコード（ここで作業する）
│   ├── App.jsx         # メインコンポーネント
│   ├── App.css         # App のスタイル
│   ├── main.jsx        # エントリーポイント
│   └── index.css       # グローバルスタイル
├── index.html          # HTML テンプレート
├── package.json        # プロジェクト設定、依存関係
└── vite.config.js      # Vite の設定
```

### 重要なファイルの役割

| ファイル | 役割 |
|---------|------|
| `index.html` | アプリのエントリーポイント。`<div id="root">` に React がマウントされる |
| `src/main.jsx` | React アプリの起動ファイル |
| `src/App.jsx` | メインのコンポーネント（ここから開発開始） |
| `package.json` | スクリプトと依存関係の定義 |

---

## Step 4: 開発サーバーを起動

```bash
npm run dev
```

**出力例**:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

ブラウザで `http://localhost:5173/` を開いてください。

React + Vite のデフォルト画面が表示されれば成功です！

---

## Step 5: 初めてのコード変更

### 5.1 App.jsx を開く

エディタで `src/App.jsx` を開いてください。

### 5.2 内容を以下に変更

```jsx
function App() {
  return (
    <div className="App">
      <h1>こんにちは、React!</h1>
      <p>Day 1: 環境構築完了</p>
      <p>今日の日付: {new Date().toLocaleDateString('ja-JP')}</p>
    </div>
  )
}

export default App
```

### 5.3 ブラウザで確認

保存すると、**自動的にブラウザが更新**されます（HMR: Hot Module Replacement）。

変更が反映されていれば成功です！

---

## Step 6: CSS を変更してみる

### 6.1 App.css を開く

`src/App.css` を開いてください。

### 6.2 内容をシンプルに

```css
.App {
  text-align: center;
  padding: 2rem;
  font-family: system-ui, -apple-system, sans-serif;
}

h1 {
  color: #646cff;
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  color: #555;
}
```

### 6.3 App.jsx で CSS をインポート

`App.jsx` の先頭に以下を追加:

```jsx
import './App.css'

function App() {
  // ... 以下同じ
}
```

保存してブラウザを確認してください。

---

## Step 7: 開発サーバーを停止

ターミナルで `Ctrl + C` を押すと開発サーバーが停止します。

再度起動するには:
```bash
npm run dev
```

---

## まとめ

今日学んだこと:

✅ Node.js と npm の確認
✅ Vite で React プロジェクト作成
✅ プロジェクト構造の理解
✅ 開発サーバーの起動
✅ JSX ファイルの編集と HMR の体験
✅ CSS の適用

次は `exercises.md` で演習課題に取り組みましょう！

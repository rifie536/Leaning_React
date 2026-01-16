# Day 1: 演習課題

## 課題 1: 自己紹介ページを作る（基礎）

### 目標
App.jsx を編集して、自分の自己紹介ページを作成してください。

### 要件
- 自分の名前を `<h1>` で表示
- 好きなプログラミング言語を `<p>` で表示
- 趣味を箇条書き（`<ul>`, `<li>`）で3つ以上表示
- CSS で見た目を整える

### ヒント

```jsx
function App() {
  return (
    <div className="App">
      <h1>あなたの名前</h1>
      <p>好きな言語: JavaScript</p>

      <h2>趣味</h2>
      <ul>
        <li>趣味1</li>
        <li>趣味2</li>
        <li>趣味3</li>
      </ul>
    </div>
  )
}
```

---

## 課題 2: 動的な値を表示（中級）

### 目標
JavaScript の変数や計算結果を JSX で表示してみましょう。

### 要件
以下の情報を表示してください：
- 現在の年（`new Date().getFullYear()`）
- 簡単な計算結果（例: 10 + 20 = ？）
- 好きな色の配列を map で表示

### サンプルコード

```jsx
function App() {
  const currentYear = new Date().getFullYear()
  const colors = ['赤', '青', '緑', '黄色']

  return (
    <div className="App">
      <h1>現在の年: {currentYear}</h1>
      <p>計算: 10 + 20 = {10 + 20}</p>

      <h2>好きな色</h2>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  )
}
```

---

## 課題 3: コンポーネントを分離（上級）

### 目標
App.jsx だけでなく、新しいコンポーネントファイルを作成してみましょう。

### 要件
1. `src/components/Header.jsx` を作成
2. Header コンポーネントに自己紹介のタイトル部分を移動
3. App.jsx から Header をインポートして使用

### ヒント

**src/components/Header.jsx**
```jsx
function Header() {
  return (
    <header>
      <h1>私のポートフォリオ</h1>
      <p>React 学習中！</p>
    </header>
  )
}

export default Header
```

**src/App.jsx**
```jsx
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      {/* 他のコンテンツ */}
    </div>
  )
}

export default App
```

---

## 課題 4: スタイリング（応用）

### 目標
CSS を使って、見た目を整えましょう。

### 要件
- 背景色を設定
- フォントサイズを調整
- ホバー効果を追加（リストアイテムにマウスを乗せたとき）
- レスポンシブ対応（画面幅が狭いときにレイアウトが崩れないように）

### CSS サンプル

```css
.App {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

h1 {
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  transition: transform 0.2s;
}

li:hover {
  transform: translateX(10px);
  background: rgba(255, 255, 255, 0.2);
}

@media (max-width: 600px) {
  h1 {
    font-size: 1.8rem;
  }
}
```

---

## チェックリスト

完了したらチェックを付けましょう！

- [ ] 課題1: 自己紹介ページを作成した
- [ ] 課題2: JavaScript の変数を JSX で表示した
- [ ] 課題3: Header コンポーネントを分離した
- [ ] 課題4: CSS でスタイリングした
- [ ] 開発サーバーが正常に動作している
- [ ] ブラウザで表示を確認した

---

## 解答例

解答例は `solution/` ディレクトリに用意されています。
まずは自分で考えて実装してから、確認してください。

---

## よくあるエラーと対処法

### エラー: "Module not found"

**原因**: import のパスが間違っている

**対処法**:
- `./` を忘れずに（例: `import Header from './components/Header'`）
- ファイル名のスペルミスを確認

### エラー: "Unexpected token"

**原因**: JSX の構文エラー

**対処法**:
- 閉じタグを確認（`<div>` に対して `</div>` があるか）
- return 内の要素は1つのルート要素で囲む

### ホットリロードが効かない

**対処法**:
1. ファイルを保存できているか確認
2. 開発サーバーを再起動（`Ctrl+C` → `npm run dev`）

---

## 次のステップ

Day 1 の課題が完了したら、Day 2 に進みましょう！

Day 2 では JSX の詳細と、React の基本概念を学びます。

# Day 2: JSX 詳細ガイド

## Part 1: JSX の基本文法

### 1.1 ルート要素は1つ

JSX では、return する要素は **1つのルート要素** で囲む必要があります。

**❌ 間違い**:
```jsx
function App() {
  return (
    <h1>タイトル</h1>
    <p>説明</p>
  )
}
// エラー: JSX expressions must have one parent element
```

**✅ 正しい**:
```jsx
function App() {
  return (
    <div>
      <h1>タイトル</h1>
      <p>説明</p>
    </div>
  )
}
```

### 1.2 すべてのタグを閉じる

HTML では省略できるタグも、JSX では必ず閉じる必要があります。

**❌ 間違い**:
```jsx
<img src="logo.png">
<input type="text">
<br>
```

**✅ 正しい**:
```jsx
<img src="logo.png" />
<input type="text" />
<br />
```

### 1.3 キャメルケース（camelCase）を使う

JSX の属性名は **キャメルケース** で書きます。

| HTML | JSX |
|------|-----|
| `class` | `className` |
| `for` | `htmlFor` |
| `onclick` | `onClick` |
| `tabindex` | `tabIndex` |

**例**:
```jsx
<div className="container">
  <label htmlFor="email">Email:</label>
  <input id="email" type="email" />
</div>
```

---

## Part 2: JavaScript 式の埋め込み

### 2.1 基本的な埋め込み

`{}` を使って、JavaScript の式を埋め込めます。

```jsx
function App() {
  const name = "太郎"
  const age = 25

  return (
    <div>
      <h1>こんにちは、{name}さん！</h1>
      <p>年齢: {age}歳</p>
    </div>
  )
}
```

### 2.2 計算式を埋め込む

```jsx
function App() {
  const price = 1000
  const tax = 0.1

  return (
    <div>
      <p>価格: {price}円</p>
      <p>税込: {price * (1 + tax)}円</p>
      <p>2倍: {price * 2}円</p>
    </div>
  )
}
```

### 2.3 関数呼び出し

```jsx
function App() {
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "おはよう"
    if (hour < 18) return "こんにちは"
    return "こんばんは"
  }

  return (
    <div>
      <h1>{getGreeting()}ございます！</h1>
      <p>現在時刻: {new Date().toLocaleTimeString('ja-JP')}</p>
    </div>
  )
}
```

### 2.4 三項演算子

```jsx
function App() {
  const isLoggedIn = true
  const score = 85

  return (
    <div>
      <p>{isLoggedIn ? "ログイン済み" : "未ログイン"}</p>
      <p>成績: {score >= 60 ? "合格" : "不合格"}</p>
    </div>
  )
}
```

### 2.5 テンプレートリテラル

```jsx
function App() {
  const firstName = "太郎"
  const lastName = "山田"

  return (
    <div>
      <h1>{`${lastName} ${firstName}`}</h1>
      <p className={`user-${firstName.toLowerCase()}`}>
        ユーザー情報
      </p>
    </div>
  )
}
```

---

## Part 3: 属性の指定

### 3.1 className

HTML の `class` は、JSX では `className` です。

```jsx
<div className="container">
  <h1 className="title">タイトル</h1>
  <p className="text-large text-bold">内容</p>
</div>
```

**動的な className**:
```jsx
function App() {
  const isActive = true
  const theme = "dark"

  return (
    <button className={isActive ? "active" : "inactive"}>
      ボタン
    </button>
  )
}
```

### 3.2 style 属性

JSX では、style はオブジェクトで指定します。

```jsx
function App() {
  const buttonStyle = {
    backgroundColor: 'blue',  // ケバブケースではなくキャメルケース
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px'
  }

  return (
    <div>
      {/* オブジェクトを直接指定 */}
      <h1 style={{ color: 'red', fontSize: '2rem' }}>
        タイトル
      </h1>

      {/* 変数を使用 */}
      <button style={buttonStyle}>
        クリック
      </button>
    </div>
  )
}
```

**ポイント**:
- CSS プロパティ名は **キャメルケース**（`background-color` → `backgroundColor`）
- 値は **文字列**（`'10px'`, `'red'`）
- 数値は単位なしで px になる（`fontSize: 16` → `16px`）

### 3.3 その他の属性

```jsx
function App() {
  return (
    <div>
      {/* 画像 */}
      <img
        src="/logo.png"
        alt="ロゴ"
        width="100"
        height="100"
      />

      {/* リンク */}
      <a
        href="https://react.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        React 公式
      </a>

      {/* 入力フォーム */}
      <input
        type="text"
        placeholder="名前を入力"
        maxLength="20"
        disabled={false}
      />
    </div>
  )
}
```

---

## Part 4: フラグメント

### 4.1 フラグメントとは？

不要な `div` を減らすために、**フラグメント**（`<>...</>`）を使います。

**通常の div を使う場合**:
```jsx
function App() {
  return (
    <div>  {/* この div は余分 */}
      <h1>タイトル</h1>
      <p>内容</p>
    </div>
  )
}
```

**フラグメントを使う場合**:
```jsx
function App() {
  return (
    <>
      <h1>タイトル</h1>
      <p>内容</p>
    </>
  )
}
```

DOM に出力される結果:
```html
<!-- div なし -->
<h1>タイトル</h1>
<p>内容</p>
```

### 4.2 React.Fragment

key を指定する必要がある場合は、`<React.Fragment>` を使います。

```jsx
import React from 'react'

function App() {
  const items = [
    { id: 1, title: 'アイテム1' },
    { id: 2, title: 'アイテム2' }
  ]

  return (
    <div>
      {items.map(item => (
        <React.Fragment key={item.id}>
          <h2>{item.title}</h2>
          <p>説明</p>
        </React.Fragment>
      ))}
    </div>
  )
}
```

---

## Part 5: コメント

JSX 内でのコメントの書き方:

```jsx
function App() {
  return (
    <div>
      {/* これはコメントです */}
      <h1>タイトル</h1>

      {/*
        複数行の
        コメントも可能
      */}
      <p>内容</p>
    </div>
  )
}
```

---

## Part 6: よくあるエラー

### エラー1: "JSX expressions must have one parent element"

**原因**: ルート要素が複数

**解決**:
```jsx
// ❌
return (
  <h1>A</h1>
  <p>B</p>
)

// ✅
return (
  <>
    <h1>A</h1>
    <p>B</p>
  </>
)
```

### エラー2: "className is not defined"

**原因**: `class` を使っている

**解決**:
```jsx
// ❌
<div class="container">

// ✅
<div className="container">
```

### エラー3: "Unexpected token"

**原因**: タグが閉じられていない

**解決**:
```jsx
// ❌
<img src="logo.png">

// ✅
<img src="logo.png" />
```

---

## まとめ

今日学んだ JSX のルール:

✅ ルート要素は1つ
✅ すべてのタグを閉じる
✅ `className`, `htmlFor` などキャメルケースを使う
✅ `{}` で JavaScript を埋め込む
✅ style はオブジェクトで指定
✅ フラグメント `<>` で不要な div を減らす

次は `exercises.md` で演習問題に挑戦しましょう！

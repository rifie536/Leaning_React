# Day 2: 演習課題 - JSX マスター

## 課題 1: 基本的な JSX（基礎）

### 目標
JSX の基本ルールを守ってコンポーネントを作成する。

### 要件
以下の内容を表示するコンポーネントを作成してください：
- 自分の名前（h1）
- 年齢（計算で求める: 現在年 - 生まれ年）
- 好きな食べ物のリスト（ul, li）
- プロフィール画像（img）

### ヒント
```jsx
function Profile() {
  const name = "山田太郎"
  const birthYear = 2000
  const currentYear = new Date().getFullYear()
  const age = currentYear - birthYear

  return (
    <div>
      <h1>{name}</h1>
      <p>年齢: {age}歳</p>
      {/* 続きを書く */}
    </div>
  )
}
```

---

## 課題 2: 条件付き表示（中級）

### 目標
三項演算子を使って、条件に応じて表示を変える。

### 要件
1. 時間帯によって挨拶を変える
   - 午前中（0-11時）: "おはようございます"
   - 午後（12-17時）: "こんにちは"
   - 夜（18-23時）: "こんばんは"

2. 気温によってメッセージを変える
   - 30度以上: "暑いですね🥵"
   - 20-29度: "過ごしやすい気温です😊"
   - 10-19度: "少し涼しいです🍃"
   - 10度未満: "寒いですね🥶"

### サンプルコード
```jsx
function Greeting() {
  const hour = new Date().getHours()
  const temperature = 25 // 変更して試してみよう

  const greeting = hour < 12 ? "おはようございます"
                 : hour < 18 ? "こんにちは"
                 : "こんばんは"

  return (
    <div>
      <h1>{greeting}</h1>
      {/* 気温のメッセージを追加 */}
    </div>
  )
}
```

---

## 課題 3: 動的なスタイル（中級）

### 目標
条件によってスタイルを動的に変更する。

### 要件
ボタンの状態によってスタイルを変える：
- `isActive` が true: 青色背景、白文字
- `isActive` が false: グレー背景、黒文字

### サンプルコード
```jsx
function DynamicButton() {
  const isActive = true // false に変更して試す

  const buttonStyle = {
    backgroundColor: isActive ? 'blue' : 'gray',
    color: isActive ? 'white' : 'black',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }

  return (
    <button style={buttonStyle}>
      {isActive ? "アクティブ" : "非アクティブ"}
    </button>
  )
}
```

---

## 課題 4: className の動的切り替え（上級）

### 目標
状態によって className を動的に変更する。

### 要件
1. カードコンポーネントを作成
2. `isPremium` が true の時、`card-premium` クラスを追加
3. CSS で見た目を変える

### ヒント

**JSX**:
```jsx
function Card() {
  const isPremium = true
  const cardClass = isPremium ? 'card card-premium' : 'card'

  return (
    <div className={cardClass}>
      <h2>プランカード</h2>
      <p>{isPremium ? "プレミアムプラン" : "無料プラン"}</p>
    </div>
  )
}
```

**CSS**:
```css
.card {
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid #ccc;
}

.card-premium {
  border-color: gold;
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
}
```

---

## 課題 5: 総合課題（応用）

### 目標
今日学んだことをすべて使って、プロフィールカードを作成。

### 要件
1. 名前、年齢、職業を表示
2. 時間帯によって挨拶文を変更
3. スキルレベル（1-5）によって星の数を表示
4. オンライン状態（online/offline）によって表示を変更
5. CSS で見た目を整える

### サンプルコード

```jsx
function ProfileCard() {
  const name = "山田太郎"
  const age = 25
  const job = "フロントエンドエンジニア"
  const skillLevel = 4 // 1-5
  const isOnline = true

  const hour = new Date().getHours()
  const greeting = hour < 12 ? "おはよう"
                 : hour < 18 ? "こんにちは"
                 : "こんばんは"

  // 星の表示
  const stars = "⭐".repeat(skillLevel) + "☆".repeat(5 - skillLevel)

  const statusStyle = {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: isOnline ? 'green' : 'gray',
    marginRight: '5px'
  }

  return (
    <div className="profile-card">
      <div className="status">
        <span style={statusStyle}></span>
        {isOnline ? "オンライン" : "オフライン"}
      </div>

      <h1>{name}</h1>
      <p className="greeting">{greeting}ございます！</p>

      <div className="info">
        <p>年齢: {age}歳</p>
        <p>職業: {job}</p>
        <p>スキルレベル: {stars}</p>
      </div>
    </div>
  )
}
```

---

## チェックリスト

- [ ] 課題1: 基本的な JSX を書けた
- [ ] 課題2: 三項演算子で条件分岐できた
- [ ] 課題3: 動的なスタイルを適用できた
- [ ] 課題4: className を動的に切り替えできた
- [ ] 課題5: プロフィールカードを完成させた
- [ ] すべてのタグを閉じた
- [ ] `className` を使った（`class` ではない）
- [ ] フラグメント `<>` を使った

---

## 解答例

解答例は `solution/` ディレクトリに用意されています。

---

## 次のステップ

Day 3 では **コンポーネントと props** を学びます！

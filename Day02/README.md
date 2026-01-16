# Day 2: JSX 基礎

## 学習目標

- JSX の文法ルールを理解する
- JavaScript 式を JSX に埋め込む方法を学ぶ
- JSX の属性の指定方法を学ぶ
- フラグメントの使い方を学ぶ
- よくある JSX のエラーを理解する

## 所要時間

約2-3時間

## 今日学ぶこと

### 1. JSX とは？

JSX = JavaScript XML

JavaScript の中に HTML のような構文を書ける React の拡張機能です。

**ポイント**:
- ブラウザは JSX を直接実行できない
- Babel（トランスパイラ）が JSX を通常の JavaScript に変換
- Vite が自動的にこの変換を行ってくれる

### 2. JSX の基本ルール

```jsx
// OK: 単一のルート要素
return (
  <div>
    <h1>タイトル</h1>
    <p>内容</p>
  </div>
)

// NG: 複数のルート要素
return (
  <h1>タイトル</h1>
  <p>内容</p>
)
```

### 3. 今日のトピック

1. **JSX の文法ルール**
   - ルート要素は1つ
   - タグは必ず閉じる
   - キャメルケースを使う

2. **式の埋め込み**
   - `{}` で JavaScript を埋め込む
   - 変数、関数呼び出し、計算式

3. **属性の指定**
   - `className`, `htmlFor`
   - スタイルの指定方法
   - カスタムデータ属性

4. **フラグメント**
   - `<>...</>` の使い方
   - 不要な div を減らす

## ファイル構成

```
Day02/
├── README.md           # このファイル
├── guide.md            # 詳細ガイド
├── exercises.md        # 演習課題
├── notes.md            # 重要ポイント
└── solution/           # 模範解答
```

## 準備

昨日作成したプロジェクトを使います。

```bash
cd day01-project
npm run dev
```

新しくプロジェクトを作る場合:

```bash
npm create vite@latest day02-jsx -- --template react
cd day02-jsx
npm install
npm run dev
```

## 次のステップ

`guide.md` で JSX の詳細を学びましょう！

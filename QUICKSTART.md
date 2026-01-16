# クイックスタートガイド

## 学習を始める前に

### 1. 必要な環境

- **Node.js**: v18.0.0 以上（[公式サイト](https://nodejs.org/)からインストール）
- **エディタ**: VSCode 推奨（[公式サイト](https://code.visualstudio.com/)）
- **ブラウザ**: Chrome または Firefox

### 2. 確認コマンド

```bash
node --version  # v18以上
npm --version   # v9以上
```

---

## 学習の進め方

### Step 1: 計画を確認

`100-day-react-plan.md` で全体像を把握しましょう。

### Step 2: Day 1 から開始

```bash
cd /Users/ricefield/dev/Learning_React/Day01
```

Day01 の README.md を開いて、学習を始めましょう。

### Step 3: 教材の構成

各日のディレクトリには以下のファイルがあります：

| ファイル | 内容 |
|---------|------|
| `README.md` | 学習目標とトピックの概要 |
| `guide.md` | ステップバイステップの詳細ガイド |
| `exercises.md` | 演習課題 |
| `notes.md` | 重要ポイントのまとめ |
| `solution/` | 模範解答（詳細教材がある日のみ） |

---

## 学習のペース

### 推奨スケジュール

- **1日 2-3時間** の学習時間を確保
- **毎日継続** が重要（1日休むと取り戻すのが大変）
- **週末** は復習と実践に充てる

### 週ごとの目標

| Week | ゴール |
|------|--------|
| Week 1 | JSX とコンポーネントの基礎 |
| Week 2 | Hooks の理解 |
| Week 3-4 | Todo アプリ完成 |

---

## 詳細教材の状況

現在、以下の日は **完全版の教材** が用意されています：

- ✅ **Day 1**: 環境構築（guide, exercises, solution 完備）
- ✅ **Day 2**: JSX 基礎（guide, exercises 完備）

その他の日は **README のみ** ですが、学習を進めながら詳細教材を追加作成できます。

---

## 進捗管理

### 1. チェックリストを使う

各日の README や `100-day-react-plan.md` にチェックリストがあります。

```markdown
- [ ] Day 1 完了
- [ ] Day 2 完了
```

### 2. PROGRESS.md で確認

`PROGRESS.md` で全体の進捗を確認できます。

### 3. GitHub で管理（推奨）

```bash
# Git リポジトリ初期化
cd /Users/ricefield/dev/Learning_React
git init
git add .
git commit -m "Initial commit: 100-day React learning plan"

# GitHub にプッシュ（リポジトリを作成後）
git remote add origin https://github.com/your-username/react-100days.git
git push -u origin main
```

---

## よくある質問

### Q: 1日に複数日分進めてもいいですか？

A: もちろんです。余裕があれば先に進めましょう。ただし、**理解せずに先に進まない** ことが重要です。

### Q: つまずいたらどうすればいいですか？

A:
1. solution/ ディレクトリの模範解答を確認
2. React 公式ドキュメントを読む
3. エラーメッセージを Google で検索
4. Stack Overflow で質問

### Q: プロジェクトはどこに作成すればいいですか？

A:
```bash
# 各日のプロジェクト例
/Users/ricefield/dev/Learning_React/my-projects/day01-project
/Users/ricefield/dev/Learning_React/my-projects/todo-app
/Users/ricefield/dev/Learning_React/my-projects/movie-search
```

`my-projects/` ディレクトリを作成して、そこに実際のプロジェクトを配置することを推奨します。

---

## 推奨 VSCode 拡張機能

```json
{
  "recommendations": [
    "dsznajder.es7-react-js-snippets",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss"
  ]
}
```

---

## サポートリソース

- [React 公式ドキュメント](https://react.dev/)
- [MDN Web Docs](https://developer.mozilla.org/ja/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs)

---

## さあ、始めましょう！

```bash
cd Day01
open README.md
```

頑張ってください！ 🚀

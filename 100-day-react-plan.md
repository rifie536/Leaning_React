# 100日間 React マスター学習計画

## 概要

| フェーズ | 期間 | テーマ | 成果物 |
|---------|------|--------|--------|
| Phase 1 | Day 1-25 | React 基礎 | Todo アプリ |
| Phase 2 | Day 26-50 | React 中級 | API連携アプリ |
| Phase 3 | Day 51-75 | React 上級 + エコシステム | フルスタックアプリ |
| Phase 4 | Day 76-100 | Next.js + 本番運用 | ポートフォリオサイト |

## 前提条件
- JavaScript の基礎知識
- 1日2-3時間の学習時間（合計約250時間）

---

## Phase 1: React 基礎（Day 1-25）

### Week 1: 環境構築と JSX（Day 1-7）

| Day | トピック | 学習内容 |
|-----|----------|----------|
| 1 | 環境構築 | Node.js, npm, Vite でプロジェクト作成 |
| 2 | JSX 基礎 | JSX 構文、式の埋め込み、属性 |
| 3 | コンポーネント | 関数コンポーネント、export/import |
| 4 | props | props の受け渡し、デフォルト値 |
| 5 | children | children props、コンポジション |
| 6 | 条件付きレンダリング | &&, 三項演算子、早期リターン |
| 7 | リスト表示 | map(), key の重要性 |

**実践課題**: プロフィールカードコンポーネント

### Week 2: State と Hooks 入門（Day 8-14）

| Day | トピック | 学習内容 |
|-----|----------|----------|
| 8 | useState 基礎 | state の宣言と更新 |
| 9 | useState 応用 | オブジェクト・配列の state |
| 10 | イベント処理 | onClick, onChange, onSubmit |
| 11 | フォーム制御 | Controlled Components |
| 12 | useEffect 基礎 | 副作用、依存配列 |
| 13 | useEffect 応用 | クリーンアップ、データフェッチ |
| 14 | 復習 & 実践 | Week 1-2 の総復習 |

**実践課題**: カウンターアプリ、入力フォーム

### Week 3: Todo アプリ開発（Day 15-21）

| Day | トピック | 学習内容 |
|-----|----------|----------|
| 15 | 設計 | コンポーネント設計、state 設計 |
| 16 | CRUD - Create | タスク追加機能 |
| 17 | CRUD - Read/Update | タスク表示、完了切り替え |
| 18 | CRUD - Delete | タスク削除機能 |
| 19 | フィルタリング | All/Active/Completed フィルター |
| 20 | ローカルストレージ | データ永続化 |
| 21 | UI 改善 | スタイリング、UX 向上 |

**成果物**: フル機能 Todo アプリ

### Week 4: Hooks 深掘り（Day 22-25）

| Day | トピック | 学習内容 |
|-----|----------|----------|
| 22 | useRef | DOM 参照、値の保持 |
| 23 | useMemo | 計算結果のメモ化 |
| 24 | useCallback | 関数のメモ化 |
| 25 | カスタムフック | 独自フックの作成 |

**実践課題**: useLocalStorage カスタムフック

---

## Phase 2: React 中級（Day 26-50）

### Week 5: Context と状態管理（Day 26-32）

| Day | トピック | 学習内容 |
|-----|----------|----------|
| 26 | Props Drilling 問題 | 深いコンポーネントツリー |
| 27 | useContext | Context API の基本 |
| 28 | Context 設計 | Provider パターン |
| 29 | useReducer | Reducer パターン |
| 30 | Context + Reducer | スケーラブルな状態管理 |
| 31 | Zustand 入門 | 軽量状態管理ライブラリ |
| 32 | Zustand 実践 | ストア設計、永続化 |

**実践課題**: テーマ切り替え、グローバル状態管理

### Week 6: API 連携（Day 33-39）

| Day | トピック | 学習内容 |
|-----|----------|----------|
| 33 | fetch API | 基本的なデータ取得 |
| 34 | async/await | 非同期処理のパターン |
| 35 | ローディング状態 | スケルトン、スピナー |
| 36 | エラーハンドリング | try/catch、エラー表示 |
| 37 | カスタムフック | useFetch の作成 |
| 38 | デバウンス | 検索入力の最適化 |
| 39 | 無限スクロール | ページネーション |

**実践課題**: 映画検索アプリ（TMDB API）

### Week 7: React Router（Day 40-46）

| Day | トピック | 学習内容 |
|-----|----------|----------|
| 40 | セットアップ | BrowserRouter, Routes, Route |
| 41 | ナビゲーション | Link, NavLink, useNavigate |
| 42 | 動的ルート | useParams, URL パラメータ |
| 43 | ネストルート | Outlet, レイアウト |
| 44 | 保護ルート | 認証ガード |
| 45 | ローダー | データプリフェッチ |
| 46 | エラーバウンダリ | エラーページ |

**実践課題**: マルチページアプリ構築

### Week 8: フォームとバリデーション（Day 47-50）

| Day | トピック | 学習内容 |
|-----|----------|----------|
| 47 | React Hook Form | フォーム状態管理 |
| 48 | Zod | スキーマバリデーション |
| 49 | エラー表示 | フィールドエラー、トースト |
| 50 | 実践 | 登録フォーム作成 |

**成果物**: API 連携映画検索アプリ

---

## Phase 3: React 上級 + エコシステム（Day 51-75）

### Week 9: TypeScript 導入（Day 51-57）

| Day | トピック | 学習内容 |
|-----|----------|----------|
| 51 | TS 基礎 | 型、インターフェース |
| 52 | TS 応用 | ジェネリクス、ユニオン型 |
| 53 | React + TS | コンポーネントの型定義 |
| 54 | Props の型 | PropsWithChildren, イベント型 |
| 55 | Hooks の型 | useState, useRef の型 |
| 56 | API レスポンス型 | fetch の型安全 |
| 57 | 既存アプリ移行 | JS → TS 移行 |

**実践課題**: Todo アプリを TypeScript 化

### Week 10: TanStack Query（Day 58-64）

| Day | トピック | 学習内容 |
|-----|----------|----------|
| 58 | セットアップ | QueryClient, Provider |
| 59 | useQuery | データフェッチ |
| 60 | キャッシュ | staleTime, cacheTime |
| 61 | useMutation | データ更新 |
| 62 | 楽観的更新 | Optimistic Updates |
| 63 | 無限クエリ | useInfiniteQuery |
| 64 | プリフェッチ | prefetchQuery |

**実践課題**: API アプリを TanStack Query でリファクタ

### Week 11: スタイリング（Day 65-71）

| Day | トピック | 学習内容 |
|-----|----------|----------|
| 65 | Tailwind 導入 | セットアップ、基本クラス |
| 66 | レイアウト | Flexbox, Grid |
| 67 | レスポンシブ | ブレークポイント |
| 68 | ダークモード | テーマ切り替え |
| 69 | アニメーション | transition, animation |
| 70 | shadcn/ui | コンポーネントライブラリ |
| 71 | 実践 | UI リデザイン |

**実践課題**: アプリの UI を完全リデザイン

### Week 12: テストと認証（Day 72-75）

| Day | トピック | 学習内容 |
|-----|----------|----------|
| 72 | Vitest | ユニットテスト |
| 73 | Testing Library | コンポーネントテスト |
| 74 | 認証基礎 | Firebase/Supabase Auth |
| 75 | 認証実装 | ログイン/サインアップ |

**成果物**: 認証付きフルスタックアプリ

---

## Phase 4: Next.js + 本番運用（Day 76-100）

### Week 13: Next.js 基礎（Day 76-82）

| Day | トピック | 学習内容 |
|-----|----------|----------|
| 76 | Next.js 概要 | React との違い、メリット |
| 77 | App Router | ファイルベースルーティング |
| 78 | ページとレイアウト | layout.tsx, page.tsx |
| 79 | Server Components | RSC の概念と利点 |
| 80 | Client Components | 'use client' ディレクティブ |
| 81 | データフェッチ | サーバーサイドフェッチ |
| 82 | ローディング/エラー | loading.tsx, error.tsx |

**実践課題**: Next.js でブログサイト構築開始

### Week 14: Next.js 応用（Day 83-89）

| Day | トピック | 学習内容 |
|-----|----------|----------|
| 83 | Server Actions | 'use server'、フォーム処理 |
| 84 | Revalidation | revalidatePath, revalidateTag |
| 85 | ミドルウェア | 認証、リダイレクト |
| 86 | 画像最適化 | next/image |
| 87 | メタデータ | SEO、OGP |
| 88 | 動的ルート | [slug], generateStaticParams |
| 89 | API Routes | route.ts |

**実践課題**: ブログサイトの機能拡充

### Week 15: デプロイと最適化（Day 90-96）

| Day | トピック | 学習内容 |
|-----|----------|----------|
| 90 | Vercel デプロイ | 初回デプロイ |
| 91 | 環境変数 | 本番/開発の設定 |
| 92 | パフォーマンス | Core Web Vitals |
| 93 | バンドル最適化 | 分析、コード分割 |
| 94 | アクセシビリティ | a11y 基礎 |
| 95 | セキュリティ | OWASP、XSS 対策 |
| 96 | CI/CD | GitHub Actions |

**実践課題**: 本番環境最適化

### Week 16: ポートフォリオ完成（Day 97-100）

| Day | トピック | 学習内容 |
|-----|----------|----------|
| 97 | ポートフォリオ設計 | コンテンツ、構成 |
| 98 | ポートフォリオ実装 | 自己紹介、作品一覧 |
| 99 | README 整備 | 各プロジェクトのドキュメント |
| 100 | 総仕上げ | 最終確認、公開 |

**最終成果物**:
- ポートフォリオサイト（Next.js）
- 4-5個の React/Next.js アプリ

---

## 推奨学習リソース

### 公式ドキュメント（必須）
- [React 公式](https://react.dev/) - チュートリアル、リファレンス
- [Next.js 公式](https://nextjs.org/docs) - App Router ガイド
- [TypeScript ハンドブック](https://www.typescriptlang.org/docs/)

### 動画教材
- Udemy: React 入門コース
- YouTube: Web Dev Simplified, Traversy Media

### ライブラリドキュメント
- [TanStack Query](https://tanstack.com/query)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

---

## 100日後に身につくスキル

### 技術スキル
- React 19 / Next.js 15 でのモダン開発
- TypeScript による型安全な開発
- TanStack Query でのサーバー状態管理
- Tailwind CSS + shadcn/ui でのモダン UI
- Vitest + Testing Library でのテスト
- Vercel での本番デプロイ

### 実務スキル
- コンポーネント設計
- 状態管理の設計
- API 連携パターン
- パフォーマンス最適化
- セキュリティ対策

---

## 進捗チェックリスト

### Phase 1 完了時（Day 25）
- [ ] Todo アプリが完成している
- [ ] useState, useEffect を説明できる
- [ ] カスタムフックを作成できる

### Phase 2 完了時（Day 50）
- [ ] API 連携アプリが完成している
- [ ] React Router でルーティングできる
- [ ] Context API を使える

### Phase 3 完了時（Day 75）
- [ ] TypeScript でアプリを書ける
- [ ] TanStack Query を使える
- [ ] テストを書ける

### Phase 4 完了時（Day 100）
- [ ] Next.js App Router を理解している
- [ ] Server Components/Actions を使える
- [ ] ポートフォリオサイトが公開されている

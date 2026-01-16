import './App.css'
import Header from './components/Header'

function App() {
  // 課題2: 動的な値
  const currentYear = new Date().getFullYear()
  const birthYear = 1990 // 例
  const age = currentYear - birthYear

  const favoriteColors = ['赤', '青', '緑', '黄色', '紫']

  return (
    <div className="App">
      {/* 課題3: コンポーネント分離 */}
      <Header />

      {/* 課題1: 自己紹介 */}
      <section className="intro">
        <h1>山田太郎</h1>
        <p className="tagline">フロントエンドエンジニア志望</p>

        <div className="info-card">
          <h2>基本情報</h2>
          <p>好きな言語: <strong>JavaScript / TypeScript</strong></p>
          <p>年齢: {age}歳</p>
          <p>現在の年: {currentYear}年</p>
        </div>

        <div className="info-card">
          <h2>趣味</h2>
          <ul>
            <li>🎮 ゲーム開発</li>
            <li>📚 プログラミング学習</li>
            <li>🎵 音楽鑑賞</li>
            <li>⚽ サッカー</li>
          </ul>
        </div>

        {/* 課題2: map での表示 */}
        <div className="info-card">
          <h2>好きな色</h2>
          <ul className="color-list">
            {favoriteColors.map((color, index) => (
              <li key={index} className="color-item">
                {color}
              </li>
            ))}
          </ul>
        </div>

        {/* 課題2: 計算結果 */}
        <div className="info-card">
          <h2>簡単な計算</h2>
          <p>10 + 20 = {10 + 20}</p>
          <p>100 / 4 = {100 / 4}</p>
          <p>5 の2乗 = {Math.pow(5, 2)}</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {currentYear} 山田太郎. All rights reserved.</p>
        <p>Built with React + Vite</p>
      </footer>
    </div>
  )
}

export default App

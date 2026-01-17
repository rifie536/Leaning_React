import Header from './components/Header'
import './App.css'

function App() {
  const currentYear = new Date().getFullYear()
  const colors = ['赤', '青', '緑', '黄色']

  return (
    <div className="App">
      <Header />
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

export default App

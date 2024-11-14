import './App.css'
// import { Otro } from './Components/Otro.jsx'
import { useCatFact } from './hooks/useCatFact.js'
import { useCatImage } from './hooks/useCatImage.js'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  // Botton para recuperar una nueva cita
  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <button onClick={handleClick}>Get new fact</button>
      <h1>App de gatos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}

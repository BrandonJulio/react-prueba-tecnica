import './App.css'
import { useCatFact } from './hooks/useCatFact.js'
import { useCatImage } from './hooks/useCatImage.js'

// const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${threeFirstWord}?fontSize=30&fontColor=red&json=true'
// const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

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
      {fact && <p>{fact}</p>}{/* Rederizado condicional */}
      <img src={imageUrl} alt={`Image with the first three words of the fact: ${fact}`} />
    </main>
  )
}

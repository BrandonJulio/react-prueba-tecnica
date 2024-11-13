import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${threeFirstWord}?fontSize=30&fontColor=red&json=true'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [factError, setFactError] = useState()

  // Para recuperar la cita al cargar la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        if (!res.ok) {
          setFactError('No se ha podido recuperar la cita')
        }
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(data.fact)
      })
      .catch(error => {
        // Tanto si hay un error con la respuesta de la API como si hay un error con la petición
        setFactError('No se ha podido recuperar la cita')//
        console.error('Fecth error: ', error)
      })
  }, [])

  // Para recuperar la imagen cada vez que tenemos una cita nueva

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`)
      .then(Response => {
        setImageUrl(Response.url)
      })
  }, [fact])

  return (
    <main>
      <h1>App de gatos</h1>
      {fact && <p>{fact}</p>}{/* Rederizado condicional */}
      <img src={imageUrl} alt={`Image with the first three words of the fact: ${fact}`} />
    </main>
  )
}

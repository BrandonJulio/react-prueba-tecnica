import { useState, useEffect } from 'react'

// Este funcion es un custom hook, es una funcion que retorna un objeto, una caja negra
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

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
  return { imageUrl }
}

export default useCatImage

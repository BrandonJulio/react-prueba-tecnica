import { useCatImage } from '../hooks/useCatImage.js'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'Cat' })

  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}

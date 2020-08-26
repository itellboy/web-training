import React, { useEffect, useRef } from 'react'
import { Div } from './style'

interface IndexProps {
  src: string
}

const Index: React.FC<IndexProps> = props => {
  const { src } = props
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        if (imgRef.current) {
          observer.unobserve(imgRef.current)
          // console.log(imgRef.current)
          imgRef.current.setAttribute('src', src)
        }
      }
    })
    if (imgRef.current) {
      intersectionObserver.observe(imgRef.current)
    }

    return () => {
      intersectionObserver.disconnect()
    }
  }, [src])

  return (
    <Div>
      <img ref={imgRef} className="img" alt="" />
    </Div>
  )
}

export default Index

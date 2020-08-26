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
      const firstEntry = entries[0]
      const { isIntersecting, target } = firstEntry
      if (isIntersecting) {
        observer.unobserve(target)
        target.setAttribute('src', src)
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

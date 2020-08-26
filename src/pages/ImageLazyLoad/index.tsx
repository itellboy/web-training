import React from 'react'
import { Div } from './style'
import Image from './Image'

interface IndexProps {}

const data = Array.from({ length: 100 }, (item, index) => ({
  id: index,
  src: 'https://static.pincll.com/5d09cff32ae21.png',
}))

const Index: React.FC<IndexProps> = props => {
  return (
    <Div>
      {data.map(item => {
        const { id, src } = item
        return <Image src={src} key={id} />
      })}
    </Div>
  )
}

export default Index

import React from 'react'
import { Div } from './style'

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
        return <img className="img" key={id} src={src} alt="" />
      })}
    </Div>
  )
}

export default Index

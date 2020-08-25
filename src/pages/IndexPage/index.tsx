import React from 'react'
import { Link } from 'react-router-dom'
import routers from '../../config/router.config'

interface IndexProps {}

const Index: React.FC<IndexProps> = props => {
  return (
    <div>
      {routers.map(item => {
        const { id, name, path } = item
        return (
          <div key={id}>
            <Link to={path}>{name}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Index

import React from 'react'
import { Link } from 'react-router-dom'

interface IndexProps {}
const Index: React.FC<IndexProps> = props => {
  return (
    <div>
      <Link to="/infinity-list">虚拟列表</Link>
    </div>
  )
}

export default Index

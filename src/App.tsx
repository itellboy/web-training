import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import routers from './config/router.config'

function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={IndexPage} />
      {routers.map(item => {
        const { id, path, component } = item
        return <Route key={id} path={path} exact component={component} />
      })}
    </HashRouter>
  )
}

export default App

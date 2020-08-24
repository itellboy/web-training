import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import InifinityList from './pages/Infinity-List'

function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={IndexPage} />
      <Route path="/infinity-list" exact component={InifinityList} />
    </HashRouter>
  )
}

export default App

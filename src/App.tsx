import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import InifinityList from './pages/Infinity-List'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={IndexPage} />
      <Route path="/infinity-list" exact component={InifinityList} />
    </BrowserRouter>
  )
}

export default App

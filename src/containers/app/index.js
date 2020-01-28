import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <header>
      <div style={{ height: '50px', margin: 'auto', textAlign: 'center', fontFamily: 'arial', fontSize: '22px' }}>
        <Link to="/" style={{ textDecoration: 'none', marginRight: '20px', fontWeight: 'bold' }}>Test 1</Link>
        <Link to="/about-us" style={{ textDecoration: 'none', marginRight: '20px', fontWeight: 'bold' }}>Test 2</Link>
      </div>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App

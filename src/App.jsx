import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/header/header.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* HEADER  START*/}
      <div class="navbar">
      <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a> 
      <a href="#"><i class="fa fa-fw fa-search"></i> Search</a> 
      <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a> 
      <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
      </div>
      {/* HEADER  START*/}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

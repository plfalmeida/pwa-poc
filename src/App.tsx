import { useState } from 'react'
import './App.css'
import ReloadPrompt from './ReloadPrompt'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ReloadPrompt />
        <div className='flex justify-center'>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </div>
      <h1 className='text-indigo-400'>Vite + React 6</h1>
      <h1 className='text-yellow-500 text-sm'>{import.meta.env.VITE_BUILD_DATE}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}

        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR. v5 6
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

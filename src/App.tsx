import { lazy, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'
import ReloadPrompt from './ReloadPrompt'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Dynamic = lazy(() => import('./DynamicComponent.tsx').then(m => ({ default: m.DynamicComponent })))

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-2'>
      <div>
        <div >
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
        <h1 className='text-blue-400'>Vite + React 6</h1>
        <h1 className='text-blue-500 text-sm'>{import.meta.env.VITE_BUILD_DATE}</h1>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

          <Link to="aside">open aside</Link>
        </div>
        <Dynamic />
      </div>
      <Outlet />
    </div>
  )
}

export default App

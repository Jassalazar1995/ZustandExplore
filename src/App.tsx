import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCounterStore } from './store'
import { useEffect } from 'react'

const logCount = () => {
  const count = useCounterStore.getState().count
  console.log('count is', count)
}

const setCount = () => {
  useCounterStore.setState({count: 10})

}

function App() {
  const count = useCounterStore((state) => state.count)
  // const increment = useCounterStore((state) => state.increment)
  const incrementAsync = useCounterStore((state) => state.incrementAsync)
  const decrement = useCounterStore((state) => state.decrement)

  useEffect(() => {
    logCount()
    setCount()
  },[])
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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() =>  {count + 1}}>
          count is {count}
        </button>
        <div>
        <div>
        <button onClick={incrementAsync}>increment</button>
        </div>
        <div>
        <button onClick={decrement}>decrement</button>
        </div>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

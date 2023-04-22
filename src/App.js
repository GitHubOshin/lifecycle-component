import { useState } from 'react'
import SatitLifeCycle from './SatitLifeCycle'

function App() {
  const [displayed, setDisplayed] = useState(true)
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <div className="">
      <div style={{ display: 'flex', gap: 60 }}>
        <button
          style={{ fontSize: 60 }}
          onClick={() => setCount((prev) => prev + 1)}
        >
          Click count: {count}
        </button>
      </div>
      <button
        style={{ fontSize: 60 }}
        onClick={() => setCount2((prev) => prev + 1)}
      >
        Click count2: {count2}
      </button>
      <hr />
      <button style={{ fontSize: 72 }} onClick={() => setDisplayed(!displayed)}>
        {displayed ? 'Hide' : 'Show'}
      </button>
      {displayed && <SatitLifeCycle count={count} count2={count2} />}
    </div>
  )
}

export default App

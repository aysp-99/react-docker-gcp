import { useState } from "react"
import './App.css'

const Counter = () => {
    const [count, setCount] = useState(0)
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <p>Now running on Cloud Run!</p>
      </div>
    )
  }

  export default Counter;
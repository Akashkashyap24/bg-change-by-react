import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="main" style={{ backgroundColor: color, minHeight: "100vh" }}>
      <h1>Background Themes</h1>
      <div className="bar">
        <button onClick={() => setColor("red")} style={{ backgroundColor: "red", color: "white" }}>Red</button>
        <button onClick={() => setColor("white")} style={{ backgroundColor: "white", color: "black" }}>Light</button>
        <button onClick={() => setColor("black")} style={{ backgroundColor: "black", color: "white" }}>Dark</button>
        <button onClick={() => setColor("green")} style={{ backgroundColor: "green", color: "white" }}>Green</button>
        <button onClick={() => setColor("blue")} style={{ backgroundColor: "blue", color: "white" }}>Blue</button>

      </div>
    </div>
  )
}

export default App

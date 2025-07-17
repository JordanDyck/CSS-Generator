import CodeBox from "./components/CodeBox"
import Controls from "./components/Controls"
import TheSquare from "./components/TheSquare"
import {useState} from "react"

export type boxType = {
  options: {
    X: {value: number; max: number}
    Y: {value: number; max: number}
    blur: {value: number; max: number}
    spread: {value: number; max: number}
    opacity: {value: number; max: number}
  }
}
export type controlTypes = {
  height: {value: number; max: number}
  width: {value: number; max: number}
  padding: {value: number; max: number}
  margin: {value: number; max: number}
  border: {value: number; max: number}
  borderRadius: {value: number; max: number}
}

function App() {
  const [controls, setControls] = useState<controlTypes>({
    height: {value: 100, max: 200},
    width: {value: 100, max: 200},
    padding: {value: 0, max: 50},
    margin: {value: 0, max: 50},
    border: {value: 0, max: 50},
    borderRadius: {value: 0, max: 50},
  })
  const [boxShadow, setBoxShadow] = useState<boxType>({
    options: {
      opacity: {value: 0, max: 100},
      X: {value: 10, max: 50},
      Y: {value: 10, max: 50},
      blur: {value: 0, max: 100},
      spread: {value: 0, max: 100},
    },
  })
  return (
    <div className="container">
      <div className="canvas">
        <TheSquare controls={controls} boxShadow={boxShadow} />
      </div>
      <div className="sidebar">
        <Controls
          setControls={setControls}
          controls={controls}
          boxShadow={boxShadow}
          setBoxShadow={setBoxShadow}
        />
      </div>
      <div className="code-box-wrapper">
        <CodeBox controls={controls} boxShadow={boxShadow} />
      </div>
    </div>
  )
}

export default App

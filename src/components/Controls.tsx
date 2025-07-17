import {type controlTypes, type boxType} from "../App"

type StateTypes = {
  controls: controlTypes
  boxShadow: boxType
  setControls: React.Dispatch<React.SetStateAction<controlTypes>>
  setBoxShadow: React.Dispatch<React.SetStateAction<boxType>>
}

const Controls = ({controls, setControls, boxShadow, setBoxShadow}: StateTypes) => {
  type OptionType = keyof typeof boxShadow.options

  const handleControls = (name: string, value: number) => {
    setControls((prev) => ({
      ...prev,
      [name]: {
        ...prev[name as keyof controlTypes],
        value: value,
      },
    }))
  }

  const handleBoxShadow = (optionKey: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setBoxShadow((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        [optionKey]: {
          ...prev.options[optionKey as OptionType],
          value: parseInt(e.target.value),
        },
      },
    }))
  }

  const resetControls = (type: "control" | "boxShadow") => {
    if (type === "control") {
      setControls({
        height: {value: 100, max: 200},
        width: {value: 100, max: 200},
        padding: {value: 0, max: 50},
        margin: {value: 0, max: 50},
        border: {value: 0, max: 50},
        borderRadius: {value: 0, max: 50},
      })
    } else {
      setBoxShadow({
        options: {
          opacity: {value: 0, max: 100},
          X: {value: 10, max: 50},
          Y: {value: 10, max: 50},
          blur: {value: 0, max: 100},
          spread: {value: 0, max: 100},
        },
      })
    }
  }

  return (
    <div className="control-container">
      <div className="basic-control-container">
        {Object.entries(controls).map((inp) => {
          return (
            <div className="basic control-group" key={inp[0]}>
              <input
                name={inp[0]}
                type="range"
                min={0}
                value={inp[1].value}
                max={inp[1].max}
                onChange={(e) => handleControls(inp[0], parseInt(e.target.value))}
              />
              <label htmlFor={inp[0]} className="control-label">
                {inp[0]}: {inp[1].value}
                {inp[0] === "borderRadius" ? "%" : "px"}
              </label>
            </div>
          )
        })}
        <button className="reset-btn" onClick={() => resetControls("control")}>
          Reset
        </button>
      </div>

      <div className="box-shadow-container">
        <h3 className="title">Box Shadow:</h3>
        {Object.entries(boxShadow.options).map((inp) => {
          // Define the allowed keys for boxShadow.options
          const optionKey = inp[0] as OptionType
          return (
            <div className="box-shadow control-group" key={optionKey}>
              <input
                name={optionKey}
                type="range"
                min={optionKey !== "X" && optionKey !== "Y" ? 0 : -inp[1].max}
                max={inp[1].max}
                value={inp[1].value}
                onChange={(e) => handleBoxShadow(optionKey, e)}
              />
              <label htmlFor={optionKey} className="control-label">
                {optionKey}: {inp[1].value}
                {inp[0] === "opacity" ? "%" : "px"}
              </label>
            </div>
          )
        })}
        <button className="reset-btn" onClick={() => resetControls("boxShadow")}>
          Reset
        </button>
      </div>
    </div>
  )
}
export default Controls

import type {boxType, controlTypes} from "../App"

type SquareProps = {controls: controlTypes; boxShadow: boxType}

const TheSquare = ({controls, boxShadow}: SquareProps) => {
  return (
    <div
      className="outer-square"
      style={{
        border: `${controls.margin.value}px solid  #e4c382`,
      }}
    >
      <div
        className="padding-box"
        style={{
          border: `${controls.border.value}px solid #bd6b18`,
          borderRadius: `${controls.borderRadius.value}%`,
          padding: controls.padding.value,
          boxShadow: `${boxShadow.options.X.value}px ${boxShadow.options.Y.value}px ${
            boxShadow.options.blur.value
          }px ${boxShadow.options.spread.value}px rgba(0, 0, 0, ${
            boxShadow.options.opacity.value / 100
          })`,
        }}
      >
        <div
          className="square"
          style={{
            height: controls.height.value,
            width: controls.width.value,
            borderRadius: `${controls.borderRadius.value}%`,
          }}
        ></div>
      </div>
    </div>
  )
}
export default TheSquare

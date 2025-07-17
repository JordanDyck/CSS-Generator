import {type controlTypes, type boxType} from "../App"

type StateProps = {controls: controlTypes; boxShadow: boxType}

const CodeBox = ({controls, boxShadow}: StateProps) => {
  const percentageTypes = ["opacity", "borderRadius"]
  const isBoxShadowActive = Object.values(boxShadow.options).some((option) => option.value !== 0)

  return (
    <div className="code-box">
      <code className="div-start">{`.div {`}</code>
      {Object.entries(controls).map(
        ([key, value]) =>
          value.value !== 0 && (
            <div className="code-line" key={key}>
              <code className="code-key">
                {`${key === "borderRadius" ? "border-radius" : key}: `}
              </code>
              <code className="code-value">{`${value.value}${
                percentageTypes.includes(key) ? "%" : "px"
              }`}</code>
            </div>
          )
      )}
      {isBoxShadowActive && (
        <div className="code-line">
          <code className="code-key">box-shadow</code>
          <code className="code-value">
            {` ${boxShadow.options.X.value}px ${boxShadow.options.Y.value}px ${
              boxShadow.options.blur.value
            }px ${boxShadow.options.spread.value}px rgba(0, 0, 0, ${
              boxShadow.options.opacity.value / 100
            });`}
          </code>
        </div>
      )}
      <code className="div-end">{`}`}</code>
    </div>
  )
}
export default CodeBox

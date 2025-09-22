import { CSSProperties, FunctionComponent } from 'react'

interface ControlButtonProps {
  $prev: boolean
  children: React.ReactNode
  onClick?: () => void
}

const ControlButton: FunctionComponent<ControlButtonProps> = ({ children, $prev, onClick }) => {
  const style: CSSProperties = {
    position: "absolute",
    display: "block",
    top: "50%",
    left: $prev ? "4%" : "96%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(40, 44, 52, 50%)",
    borderRadius: "50%",
    color: "white",
    fontSize: "2em",
    border: "unset",
    cursor: "pointer",
    zIndex: 5,
    lineHeight: "2em",
    width: "2em",
    height: "2em",
  }

  return <button style={style} onClick={onClick}>{children}</button>
}


export default ControlButton

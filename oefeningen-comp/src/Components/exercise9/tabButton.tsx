import { FunctionComponent } from "react"

import './tabButton.css'

interface TabButtonProps {
  $isActive: boolean
  children: React.ReactNode
  onClick?: () => void
}

const TabButton: FunctionComponent<TabButtonProps> = ({ children, $isActive, onClick }) => {
  return <button className={`exercise9__tab-button ${$isActive ? 'active' : ''}`} onClick={onClick}>{children}</button>
}

export default TabButton

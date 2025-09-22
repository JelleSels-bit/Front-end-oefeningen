import { FunctionComponent } from 'react'

import './chevronBtn.css';

interface ChevronBtnProps {
  onClick: () => void,
  children: React.ReactNode
}

export const ChevronBtn: FunctionComponent<ChevronBtnProps> = ({ children, onClick }) => {
  return <button className="exercise__chevronBtn" onClick={onClick}>{children}</button>
}

export default ChevronBtn 

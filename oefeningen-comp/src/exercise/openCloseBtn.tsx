import { FunctionComponent } from 'react'

import './openCloseBtn.css';

interface OpenCloseBtnProps {
  onClick: () => void,
  children: React.ReactNode
}

const OpenCloseBtn: FunctionComponent<OpenCloseBtnProps> = ({ children, onClick }) => {
  return <div className="exercise__openCloseBtn" onClick={onClick}>{children}</div>
}

export default OpenCloseBtn

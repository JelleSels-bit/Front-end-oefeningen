import type { CSSProperties, FunctionComponent } from 'react'

interface TabPanelContainerProps {
  $isActive: boolean
  children: React.ReactNode
}

const TabPanelContentContainer: FunctionComponent<TabPanelContainerProps> = ({ children, $isActive }) => {
  const style: CSSProperties = {
    margin: '0 1.5em 1.5em 1.5em',
    display: $isActive ? 'flex' : 'none',
    justifySelf: 'stretch',
  };

  return <div style={style}>{children}</div>
}

export default TabPanelContentContainer

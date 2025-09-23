import type { CSSProperties, FunctionComponent, PropsWithChildren } from 'react'

const TabListContentContainer: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const style: CSSProperties = {
    margin: '1.5em 1.5em 1.5em 1.5em',
    display: 'flex',
    borderBottom: '2px solid rgba(58, 93, 155, 100%)',
    justifySelf: 'stretch',
  }

  return <div style={style}>{children}</div>
}

export default TabListContentContainer;

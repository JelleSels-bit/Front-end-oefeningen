import {FunctionComponent, PropsWithChildren, CSSProperties } from 'react'

const calculateBMI = (hoogteInCm: number, massa: number): number => {
    const hoogteInM = hoogteInCm / 100
    return Math.round(massa / (hoogteInM * hoogteInM))
}

const BmiLabel: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const style: CSSProperties = {
    fontFamily: 'Verdana, serif',
    fontSize: '20px',   
  }

  return <div style={style}>{children}</div>
}

const BMIContainer: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const style: CSSProperties = {
    padding: '20px 40px',
    border: '#333 2px dotted',
    width: '450px',
    borderRadius: '10px',
    textAlign: 'left',
    marginTop: '2em'
  }

  return <div style={style}>{children}</div>
}

const ExerciseSeven: FunctionComponent = () => {
    return (
        <>
        </>
    )
}

export default ExerciseSeven

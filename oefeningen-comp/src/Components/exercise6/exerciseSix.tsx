import {
  type FunctionComponent,
  type CSSProperties,
  type PropsWithChildren,
  useState,
  } from 'react'


const Calculator: FunctionComponent<PropsWithChildren> = ({children}) => {
  const style: CSSProperties = {
    padding: '1.5em 2em',
    backgroundColor: '#00ace6',
    maxWidth: '21em',
    borderRadius: '10px',
    textAlign: 'left',
    marginTop: '2em'
  }

  return <div style={style}>{children}</div>
}

const CalculatorButton: FunctionComponent<PropsWithChildren & {onClick: () => void}> = ({children, onClick}) => {
  const style: CSSProperties = {
    fontFamily: 'Verdana, serif',
    fontSize: '2rem',
    margin: '0.25em',
    fontWeight: 'bold',
    backgroundColor: '#cccccc',
    color: 'white',
    borderRadius: '5px',
    width: '3em',
    height: '2em',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: '2em',
    cursor: 'pointer'
  }

  return <div style={style} onClick={onClick}>{children}</div>
}

const CalculatorScreen: FunctionComponent<PropsWithChildren> = ({children}) => {
  const style: CSSProperties = {
    fontFamily: 'Verdana, serif',
    color: 'white',
    fontSize: '2em',
    minHeight: '2em'
  }

  return <div style={style}>{children}</div>
}
const buttons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', 'C', '0', 'Del']

const ExerciseSix: FunctionComponent = () => {

  const [nummer, setNummer] = useState<string>("")


  const clickHandler = (value: string) => {
    console.log(value)
      if (value == "C")
        setNummer("")
      else if (value == 'Del')
        setNummer(nummer.slice(0, nummer.length - 1))
      else setNummer(nummer + value)
    }


  return (
        <>
          <Calculator>

            <CalculatorScreen>
              {nummer}
            </CalculatorScreen>
            {buttons.map(b => <CalculatorButton key={b} onClick={() => clickHandler(b)} > {b} </CalculatorButton>)}
          </Calculator>
        </>
    )
}

export default ExerciseSix

import {
    type FunctionComponent,
    type PropsWithChildren,
    type CSSProperties,
    type ChangeEventHandler,
    useState
} from 'react'
import Slider from "./Slider.tsx";

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


    const [height, setHeight] = useState<number>(170)
    const [mass, setMass] = useState<number>(80)

    const lalla: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (event.target.name == "height")
            setHeight(Number(event.target.value))
        else if (event.target.name == "mass")
            setMass(Number(event.target.value))



    };

    return (
        <>
            <BMIContainer >

                <BmiLabel>Height: {height}</BmiLabel>
                <Slider value={Number(height)} min={1} max={220} changeHandler={lalla} name="height"></Slider>

                <BmiLabel>Mass: {mass}</BmiLabel>
                <Slider value={mass} min={1} max={150} changeHandler={lalla} name="mass"></Slider>


                <BmiLabel>
                    {calculateBMI(Number(height),Number(mass))}
                </BmiLabel>
            </BMIContainer>
        </>
    )
}

export default ExerciseSeven

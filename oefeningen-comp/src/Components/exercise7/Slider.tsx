import type {ChangeEventHandler, FunctionComponent} from "react";

interface Props {
    name: string
    value: number;
    min: number;
    max: number;
    changeHandler: ChangeEventHandler<HTMLInputElement>
}

const Slider: FunctionComponent<Props> = ({value,min,max,changeHandler,name}) => {

    return (
        <div>

            <input type="range" onChange={changeHandler} value={value} min={min} max={max} name={name}/>

        </div>
    )
}


export default Slider;
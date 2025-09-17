import type {FunctionComponent} from "react";
import Label from "./Label.tsx"
import Bar from "./Bar";

interface Props {
    percentage: number
    color: string
}

const Progressbar: FunctionComponent<Props> = ({percentage, color}) => {
    return (
        <svg className={"ProgressBar"}>
            <Label percentage={percentage} color={color}></Label>
            <Bar percentage={percentage} color={color}></Bar>
        </svg>
    )
}

export default Progressbar
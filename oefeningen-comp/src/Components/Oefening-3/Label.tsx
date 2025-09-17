import type {FunctionComponent} from "react";

interface Props {
    percentage: number
    color: string
}

const Label: FunctionComponent<Props> = ({percentage, color}) => {
    return (
        <svg>
            <text x="180" y="25" fill={color}>
                {percentage} %
            </text>
        </svg>
    )
}

export default Label
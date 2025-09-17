import type {FunctionComponent} from "react";

interface Props {
    percentage: number
    color: string
}

const Bar: FunctionComponent<Props> = ({percentage, color}) => {

    const length = (360 / 100) * percentage
    return (
        <svg>
            {/*De volledig bar, 100%*/}
            <g fill="none" stroke="lightgrey" stroke-width="25">
                <path stroke-linecap="round" d="M20 55 l360 0"/>
            </g>

            {/*Het voltooide gedeelte, l180 breed, of 180/360 = 50%*/}
            <g fill="none" stroke={color} stroke-width="25">
                <path stroke-linecap="round" d={`M20 55 l${length} 0`}/>
            </g>
        </svg>

    )
}

export default Bar
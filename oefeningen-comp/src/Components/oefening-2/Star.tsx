import type {FunctionComponent, ReactNode} from "react";
import {Icon} from "@iconify-icon/react";


interface Props {
    rating: number
    max: number
}

const Star: FunctionComponent<Props> = ({rating, max}) => {
   const output: ReactNode[] = []

    for (let i = 1 ; i <= max ; i++)
    {
        output.push(
            <Icon key={i}
            icon={i <= rating ? 'material-symbols:star' : 'material-symbols:star-outline'} />
        )
    }

    return (
        <div>{output}</div>

    )
}


export default Star;
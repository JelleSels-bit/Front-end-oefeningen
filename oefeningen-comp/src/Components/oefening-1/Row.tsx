import type {FunctionComponent} from "react";

interface Props {
    factor1: number;
    factor2: number;
}

const Row: FunctionComponent<Props> = ({factor1, factor2}) => {

    return (
        <div className={'row'}>{factor1} x {factor2} = {factor1 * factor2}</div>
    )
}

export default Row;
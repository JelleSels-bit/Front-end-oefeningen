import type {FunctionComponent} from "react";

interface Props {
    nummer: number
}

const Square: FunctionComponent<Props> = ({nummer}) => {
    return (
        <button className="square">{nummer}</button>
    )
}

export default Square;
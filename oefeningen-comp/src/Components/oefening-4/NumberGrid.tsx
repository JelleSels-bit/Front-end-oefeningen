import type {FunctionComponent, ReactNode} from "react";
import Square from "./Square.tsx";
import Row from "./Row.tsx";


interface Props {
    AmountOfRows: number;
    length: number;
}

const NumberGrid: FunctionComponent<Props> = ({AmountOfRows, length}) => {
    const Grid: ReactNode[] = []
    let SquaresInRow: ReactNode[] = []

    for (let i = 0; i < AmountOfRows; i++) {

        for (let l = 0; l < length; l++) {
            SquaresInRow.push(<Square key={l} nummer={i * AmountOfRows + l + 1}></Square>)
        }
        Grid.push(<Row key={i} data={SquaresInRow}></Row>)
        SquaresInRow = []

    }


    return (
        <div className="grid">
            {Grid}
        </div>
    )
}

export default NumberGrid
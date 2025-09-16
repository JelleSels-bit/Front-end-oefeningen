import type {FunctionComponent, ReactNode} from "react";
import Header from "./Header.tsx";
import Row from "./Row";

interface Props {
    table: number;
}

const MultiplicationTable: FunctionComponent<Props> = ({table}) => {
    const output: ReactNode[] = []
    for (let i = 1 ; i <= 10; i++)
    {
        output.push(
            <Row key={i} factor1={i} factor2={table}></Row>
        )
    }

    return (

        <div className={'table'}>
            <Header table={table}></Header>
            <div>{output}</div>
        </div>
    )
}

export default  MultiplicationTable
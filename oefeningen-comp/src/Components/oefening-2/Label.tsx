import type {FunctionComponent} from "react";
import type {IRatingGuide} from "../../Models/IRatingGuide.tsx";

interface Props {
    data: IRatingGuide[];
    score: number;
}

const Label: FunctionComponent<Props> = ({ data, score }: Props) => {

    let output: string = "temp";

    for (const item of data) {
        if( score <= item.score)
        {
           return output = item.description
        }


    }





    return (
        <div>{output}</div>
    )
}

export default Label;
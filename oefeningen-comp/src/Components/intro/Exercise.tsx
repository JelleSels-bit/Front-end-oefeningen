import type {FunctionComponent, ReactNode} from "react";
import type {IExerciseTitle} from "../../Models/IExerciseTitle.tsx";
import ExerciseTitle from "./ExerciseTitle.tsx";

interface Props {
    titles: IExerciseTitle[]
}

const Exercise: FunctionComponent<Props> = ({titles}) => {
    const output: ReactNode[] = []


    for (const title of titles) {

        output.push(
            <ExerciseTitle key={title.name} name={title.name}/>,
        )
    }

    return (
        <div>
            <h1>werk aub</h1>
            <ul> {output} </ul>
        </div>
    )
}

export default Exercise
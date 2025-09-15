import type {FunctionComponent} from "react";
import type {IExerciseTitle} from "../../Models/IExerciseTitle.tsx";

const ExerciseTitle: FunctionComponent<IExerciseTitle> = (props) => {

    const {name} = props
    return (
        <li>
            {name}
        </li>
    )
}


export default ExerciseTitle
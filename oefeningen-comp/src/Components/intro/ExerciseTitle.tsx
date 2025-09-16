import type {FunctionComponent} from "react";
import type {IExerciseTitle} from "../../Models/IExerciseTitle.tsx";

const ExerciseTitle: FunctionComponent<IExerciseTitle> = (props) => {

    const {name} = props
    return (
        <h2 className={'ExerciseTitle'}>
            {name}
        </h2>
    )
}


export default ExerciseTitle
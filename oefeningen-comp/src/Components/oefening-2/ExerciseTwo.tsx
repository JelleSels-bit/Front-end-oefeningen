import type {FunctionComponent} from "react";
import Rater from "./Rater.tsx";


const ExerciseTwo: FunctionComponent = () => {
    return (
        <div className={'exercise'}>
            <Rater rating={2} max={5}></Rater>
            <Rater rating={3} max={5}></Rater>
            <Rater rating={4} max={5}></Rater>

        </div>
    )
}

export default ExerciseTwo
import type {FunctionComponent} from "react";
import NumberGrid from "./NumberGrid.tsx";


const ExerciseFour: FunctionComponent = () => {
    return (
        <div>
            <NumberGrid AmountOfRows={5} length={5}></NumberGrid>
        </div>
    )
}

export default ExerciseFour
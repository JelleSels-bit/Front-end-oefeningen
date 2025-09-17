import type {FunctionComponent} from "react";
import Progressbar from "./Progressbar.tsx";

const ExerciseThree: FunctionComponent = () => {
    return (
        <div>
            <Progressbar percentage={75} color="#ce4b99"/>
            <Progressbar percentage={15} color="#ce1b29"/>
            <Progressbar percentage={65} color="#125b69"/>
        </div>
    )

}

export default ExerciseThree
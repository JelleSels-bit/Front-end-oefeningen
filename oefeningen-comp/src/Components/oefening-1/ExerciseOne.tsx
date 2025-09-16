import type {FunctionComponent} from "react";
import MultiplicationTable from "./MultiplicationTable.tsx";


const ExerciseOne: FunctionComponent = () => {
    return (
        <div className={'exercise'}>
           <MultiplicationTable table={9}></MultiplicationTable>
           <MultiplicationTable table={3}></MultiplicationTable>

        </div>

        )
}

export default ExerciseOne
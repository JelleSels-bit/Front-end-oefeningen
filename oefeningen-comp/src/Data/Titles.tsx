import type {IExerciseTitle} from "../Models/IExerciseTitle.tsx";
import ExerciseOne from "../Components/oefening-1/ExerciseOne.tsx";
import ExerciseTwo from "../Components/oefening-2/ExerciseTwo.tsx";
import ExerciseThree from "../Components/Oefening-3/ExerciseThree.tsx";
import ExerciseFour from "../Components/oefening-4/ExerciseFour.tsx";
import ExerciseSix from "../Components/exercise6/exerciseSix.tsx";

const titles: IExerciseTitle[] = [
    {name: 'Multiplication Table', opdracht: ExerciseOne},
    {name: 'Rater', opdracht: ExerciseTwo},
    {name: 'Progressbar', opdracht: ExerciseThree},
    {name: 'Number grid', opdracht: ExerciseFour},
    {name: 'Comment Card'},
    {name: 'Calculator', opdracht: ExerciseSix}
]

export default titles;
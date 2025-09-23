import type {IExerciseTitle} from "../Models/IExerciseTitle.tsx";
import ExerciseOne from "../Components/oefening-1/ExerciseOne.tsx";
import ExerciseTwo from "../Components/oefening-2/ExerciseTwo.tsx";
import ExerciseThree from "../Components/Oefening-3/ExerciseThree.tsx";
import ExerciseFour from "../Components/oefening-4/ExerciseFour.tsx";
import ExerciseSix from "../Components/exercise6/exerciseSix.tsx";
import ExerciseSeven from "../Components/exercise7/exerciseSeven.tsx";
import ExerciseEight from "../Components/exercise8/ExerciseEight.tsx";
import ExerciseNine from "../Components/exercise9/ExerciseNine.tsx";

const titles: IExerciseTitle[] = [
    {name: 'Multiplication Table', opdracht: ExerciseOne},
    {name: 'Rater', opdracht: ExerciseTwo},
    {name: 'Progressbar', opdracht: ExerciseThree},
    {name: 'Number grid', opdracht: ExerciseFour},
    {name: 'Comment Card'},
    {name: 'Calculator', opdracht: ExerciseSix},
    {name: 'BMI calculator', opdracht: ExerciseSeven},
    {name: 'image carousel', opdracht: ExerciseEight},
    {name: 'Tabs', opdracht: ExerciseNine}
]

export default titles;
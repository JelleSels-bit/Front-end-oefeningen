import type {IExerciseTitle} from "../Models/IExerciseTitle.tsx";
import ExerciseOne from "../Components/oefening-1/ExerciseOne.tsx";
import ExerciseTwo from "../Components/oefening-2/ExerciseTwo.tsx";
const titles: IExerciseTitle[] = [
    {name: 'Multiplication Table', opdracht: ExerciseOne },
    {name: 'Rater', opdracht: ExerciseTwo },
    {name: 'Progressbar'},
    {name: 'Number grid'},
    {name: 'Comment Card'}
]

export default titles;
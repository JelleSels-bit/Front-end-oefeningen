    import {type FunctionComponent, type ReactNode} from "react";
    import type {IExerciseTitle} from "../../Models/IExerciseTitle.tsx";
    import ExerciseTitle from "./ExerciseTitle.tsx";



    interface Props {
        titles: IExerciseTitle[]
        background?: string;

    }

    const Exercise: FunctionComponent<Props> = ({titles, background}) => {
        const output: ReactNode[] = []
        const bgcolor = background ?? "#EEEEEE"


        for (const title of titles) {
            const OpdrachtComponent = title.opdracht

            output.push(
                <div key={title.name}>
                    <ExerciseTitle name={title.name} />
                    {/*Linker kant checkt of het component bestaat, rechterkant rendert het in*/}
                    {OpdrachtComponent && <OpdrachtComponent />}
                </div>
            );


        }

        return (
            <div className={'ExerciseDivCSS'}
                 style={{backgroundColor: bgcolor}}>
                 {output}


            </div>
        )
    }

    export default Exercise
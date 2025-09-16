    import type {FunctionComponent} from "react";

    interface Props {
        table: number
    }



    const Header: FunctionComponent<Props> = ({table}: Props) => {


        const translate: Record<number, string> = {
            1: 'One',
            2: 'Two',
            3: 'Three',
            4: 'Four',
            5: 'Five',
            6: 'Six',
            7: 'Seven',
            8: 'Eight',
            9: 'Nine',
        }
        const output: string = translate[table]



        return (
                <div className={'header'}>{output}</div>
        )
    }

    export default Header
import type {FunctionComponent, ReactNode} from "react";

interface Props {
    data: ReactNode[]
}

const Row: FunctionComponent<Props> = ({data}) => {
    return (
        <div className='grid-row'>{data}</div>
    )
}

export default Row;
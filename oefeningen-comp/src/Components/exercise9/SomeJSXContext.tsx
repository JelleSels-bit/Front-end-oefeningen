import type {FunctionComponent} from "react";

interface Props {
    description: string;
}

const SomeJSXContext: FunctionComponent<Props> = ({description}) => {
    return (
        <p className="tabsinhoud">{description}</p>
    )
}

export default SomeJSXContext;
import type {FunctionComponent} from "react";
import TabPanelContentContainer from "./tabPanelContentContainer.tsx";

const tabPanel: FunctionComponent = () => {
    return (

        <TabPanelContentContainer $isActive={true}>
                someJSXContent
        </TabPanelContentContainer>
    )
}

export default tabPanel
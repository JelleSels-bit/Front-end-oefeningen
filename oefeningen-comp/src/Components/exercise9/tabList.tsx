import type {FunctionComponent, PropsWithChildren} from "react";
import TabListContentContainer from "./TabListContentContainer.tsx";

const tabList: FunctionComponent<PropsWithChildren> = ({children}) => {



    return (
       <TabListContentContainer>
           {children}
       </TabListContentContainer>
    )
}

export default tabList
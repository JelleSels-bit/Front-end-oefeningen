import {type FunctionComponent, type PropsWithChildren, useContext} from "react";
import TabPanelContentContainer from "./tabPanelContentContainer.tsx";
import {TabsContext} from "./Tabs.tsx";

interface TabPanelProps extends  PropsWithChildren {
    name: string;
}


const TabPanel: FunctionComponent<TabPanelProps> = ({name,children}) => {

    const { currentOpenKey} = useContext(TabsContext)
    const IsActive = currentOpenKey === name

    return (

        <TabPanelContentContainer $isActive={IsActive}>
            {children}
        </TabPanelContentContainer>
    )
}

export default TabPanel
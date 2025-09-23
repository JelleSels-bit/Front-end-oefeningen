import type {FunctionComponent} from "react";
import TabList from "./tabList.tsx";
import TabPanel from "./tabPanel.tsx";

const Tabs: FunctionComponent = () => {
    return (
        <div>
            <TabList></TabList>
            <TabPanel></TabPanel>
        </div>
    )
}

export default Tabs
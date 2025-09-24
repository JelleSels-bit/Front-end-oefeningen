import type {FunctionComponent, PropsWithChildren} from "react";
import Tabs from "./Tabs.tsx";
import TabList from "./tabList.tsx";
import {TabsData} from "../../Data/TabsData.ts";
import Tab from "./Tab.tsx";
import TabPanel from "./tabPanel.tsx";
import SomeJSXContext from "./SomeJSXContext.tsx";


const ExerciseNine: FunctionComponent<PropsWithChildren> = () => {




    return (

        <Tabs>
            <TabList>
                {TabsData.map( x => <Tab key={x.name} name={x.name}/>)}
            </TabList>

            {TabsData.map(x =>  <TabPanel  name={x.name}> <SomeJSXContext description={x.description}></SomeJSXContext> </TabPanel>)}


        </Tabs>
    )
}

export default ExerciseNine
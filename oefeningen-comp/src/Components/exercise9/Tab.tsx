import type {FunctionComponent, PropsWithChildren} from "react";
import TabButton from "./tabButton.tsx";
import {TabsContext} from "./Tabs.tsx";
import {useContext} from "react";

interface Props extends PropsWithChildren{
    name: string;

}

const Tab: FunctionComponent<Props> = ({name}) => {
    const {currentOpenKey, toggleOpenKey} = useContext(TabsContext)
    const isOpen = name === currentOpenKey


    return (
        <TabButton onClick={() => toggleOpenKey(name)} $isActive={isOpen}>{name}</TabButton>
    )
}

export default Tab
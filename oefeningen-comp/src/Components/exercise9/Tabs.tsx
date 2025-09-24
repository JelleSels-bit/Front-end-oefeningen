import {type FunctionComponent, type PropsWithChildren, useState} from "react";
import {createContext} from 'react'


interface ITabsContext {
    currentOpenKey: string | undefined;
    toggleOpenKey: (newOpenKey: string | undefined) => void
}

export const TabsContext = createContext<ITabsContext>({
    currentOpenKey: undefined,
    toggleOpenKey: (): void => {

    },
});

interface ITabsProps extends PropsWithChildren {
    defaultActiveKey?: string;
}

const Tabs: FunctionComponent<ITabsProps> = ({defaultActiveKey,children}) => {
    defaultActiveKey = "Tab 1"
    const [currentOpenKey, setCurrentOpenKey] = useState<string | undefined>(defaultActiveKey)

    const toggleOpenKey = (newOpenKey: string) => {
        if (currentOpenKey === newOpenKey)
            setCurrentOpenKey(undefined)
        else
            setCurrentOpenKey(newOpenKey)
    }


    return (
        <TabsContext.Provider value={ {currentOpenKey, toggleOpenKey} }>

        <div>
            {children}
        </div>
        </TabsContext.Provider>
    )
}


export default Tabs
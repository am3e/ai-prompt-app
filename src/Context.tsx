import React from 'react'
import { ResponseInfo } from './interfaces'
const Context = React.createContext<any>(null)

const ContextProvider = ({children} : {children : any}) => {
    const [ responsesData, setResponsesData ] = React.useState<ResponseInfo[]>(
        () => {
            const appData = localStorage.getItem("ai-prompt-app-data");
            if (!appData) {
                return [];
            }
            try {
                return JSON.parse(appData);
            } catch(e) {
                return [];
            }
        });

    React.useEffect(() => {
        localStorage.setItem("ai-prompt-app-data", JSON.stringify(responsesData))
    }, [responsesData])

    return (
        <Context.Provider value={{
            responsesData,
            setResponsesData
        }}>{children}</Context.Provider>
    )
}

export {ContextProvider, Context}
import { createContext } from "react";

const taskContext= createContext();

const TaskContextProvider=()=>{
    return(<TaskContextProvider>
        {
            children
        }
    </TaskContextProvider>)
}
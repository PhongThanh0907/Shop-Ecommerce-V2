import { useState } from "react";

export const useReducer = (reducer: any, initValue: any) => {
    const [state, setState] = useState(initValue);
    
    function dispatch(action: any) {
        const newState = reducer(state, action);
        setState(newState);
    }
    return [state, dispatch] 
}
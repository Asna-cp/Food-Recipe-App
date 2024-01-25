import React, { createContext } from 'react'
import { useReducer } from 'react'
const DispatchContext = createContext();
const StateContext = createContext();

const AppProvider = ({children}) => {
    const initialState={
        cartItem:[]

    }
    const reducer = (state,action)=> {
      
        switch (action.type) {
            case "add_to_cart":
                return{...state,cartItem:[...state.cartItem,action.payload]}
            default:{

                return state;
            }
        }

    }
    let[state, dispatch] = useReducer(reducer,initialState);
    console.log(state,"state isss00");
  return (
    <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
            {children}
        </StateContext.Provider>
    </DispatchContext.Provider>
   
  )
}

export {AppProvider,DispatchContext,StateContext} 

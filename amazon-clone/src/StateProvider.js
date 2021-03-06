//setup data layer

import React, {createContext, useContext, useReducer} from 'react';
//we need this to track the basket
export const StateContext = createContext();
//provider:
export const StateProvider = ({reducer, initialState, children}) =>(
<StateContext.Provider value={useReducer(reducer, initialState)}>
{children}
</StateContext.Provider>
);
//This is how we use it inside a component
export const useStateValue =()=> useContext(StateContext)
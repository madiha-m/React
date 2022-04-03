import React, { useReducer } from 'react'

const UseReducerHook = () => {
    const reducer = (
        state, //current state
        action //1 or * actions
    ) => {
        switch (action.type) {
            case 'INCREMENT':
                return {
                    count: state.count++,
                    showTxt: state.showTxt
                };
            case 'DECREMENT':
                return {
                    count: state.count--,
                    showTxt: !state.showTxt
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(
        reducer, //pure fun : it takes state and actio and return new state, it can be define in same or seprate file 
        {
            count: 0,
            showTxt: 'sample text, change it'
        }
    );

    //use reducer return current state and dispatch

    return (
        //for multiple state manage use it
        //if more then 1 action need to change, during execiting at same place reducer hook is preferred, or 
        //can say have multiple state work doen in 1 state 
        //triger the action method , this action method is in reducer function
        <div>
            <h3>useReducer() hook</h3>
            <p>{state.count}</p>
            <button
                onClick={() => {
                    dispatch({ type: 'INCREMENT' })

                }
                }
            >
                Increment
            </button>
            <button
                onClick={() => dispatch({ type: 'DECREMENT' })}
            >
                Descrement
            </button>
            {state.showTxt && <p>this is text</p>}
        </div>
    )
}

export default UseReducerHook;
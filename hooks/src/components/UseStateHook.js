import React, { useState } from 'react'

const UseStateHook = () => {
    const [counter, setCounter] = useState(0);
    const [inputVal, setInputVal] = useState('name');

    const increment = () => {
        // counter = 0; change it with setState setter var  
        setCounter(counter + 1);
        // console.log(counter); // its incrementing but not showing , so we use useState
        setInputVal(!inputVal);
    }

    // let onChangeInp =(event)=>{
    //     // setInputVal(event.target.value);
    //     setInputVal(!event.inputVal)
    // }
    return (
        <div>
            <h3>useState() hook</h3>
            <div>
                {counter}
                <button
                    // onClick={increment}
                    onClick={()=>{
                        setCounter(counter+1);
                        setInputVal(!inputVal);
                    }}
                >
                    Increment
                </button>
                {inputVal && <p>show and hide</p>}
            </div>
            {/* <div>
                <input
                    placeholder='plz enter something.. ' onChange={onChangeInp}
                />
                {inputVal}
            </div> */}
        </div>
    )
}

export default UseStateHook;

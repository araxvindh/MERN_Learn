import React, { useState, useCallback } from 'react';
const UseCallback = () => {
    var [num, setNum] = useState(0);
    var [theme, setTheme] = useState(true);
    var styling = {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black"
    }
    var numlist = useCallback((nul) => { return [num * 2*nul, num * 3*nul, num * 4*nul]; }, [num]);
    return (
        <>
            <div style={styling}>
                <button onClick={() => setTheme(!theme)} >DarkMode</button>
                <h1>   
                    Use CallBack
                </h1>
                Number Box : <input type="number" value={num} onChange={(e) => setNum(e.target.value)}></input>
                <h2>Number is : {num}</h2>
                <h2>Memo Number is : {numlist(10).map((val,index)=>(
                    <h2 key={index}>{val}</h2>
                ))}</h2>
            </div>
        </>
    )
}
export default UseCallback;
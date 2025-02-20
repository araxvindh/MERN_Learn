import {useState} from 'react';
function About()
{
    var init=0;
    var str="hello";
    var [str1,setstr]=useState(str);
    var [num,setNum]=useState(init);
    function handleDecrement()
    {
        setNum(num-1);
    }
    function handleIncrement()
    {
        setNum(num+1);
    }
    function handleReset()
    {
        setNum(init);
    }

    function handleStr(e)
    {
       setstr(str1=e.target.value);
    }

    return(
        <div>
            <h2>About Me</h2>   
            <h3>State inital Value is {init}</h3>
            <button onClick={handleDecrement}>-</button>
            <h4>updating:{num}</h4>
            <button onClick={()=>
                {
                    setNum(num+1);
                }
            }>+</button>
            <br/>
            <h4></h4>
            <button onClick={handleReset}>reset</button>

            <h3>State inital Value is {str}</h3>
            <input type="text" onChange={handleStr}/>
            <h3>State value change: {str1}</h3>
        </div>
    )
}
export  default About
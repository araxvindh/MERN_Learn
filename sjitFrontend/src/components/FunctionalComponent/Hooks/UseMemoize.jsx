import useMemoize from "./CustomHooks/MemorizingHook"


const handleEvent =()=>
{
    localStorage.removeItem("CustomerId")
    localStorage.removeItem("Password")
}
const UseMemoize =() =>
{
    var[custId,setCustId] =useMemoize("CustomerId","")
    var[pass,setPass] =useMemoize("Password","")
    return(
        <div>
            <h1>
                this is  done by useState
                <br />
                <hr />

                CustomerId: <input type="text" id="CustomerId" value={custId} onChange={(e)=>setCustId(e.target.value)} />
                <br />
                <hr />

                Password: <input type="text" id="Password" value={pass} onChange={(e)=>setPass(e.target.value)} />
                <hr />

                <button onClick={handleEvent}>Login</button>
            </h1>
        </div>
    )
}
export default UseMemoize
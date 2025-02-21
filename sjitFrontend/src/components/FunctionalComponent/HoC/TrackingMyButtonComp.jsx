const TrackingMyButtonComp=(Component)=>{
    return(props)=>{
        const handleClick=()=>{
            alert("The tracinkg info on Clicking This Button "+props.TrackingInfo.CustId)
        }
        return(
            <form onClick={handleClick}>
            Email: <input type="text" />
            Password : <input type="text" />
            <Component {...props}></Component>
            </form>
        )
    }
    
}
export default TrackingMyButtonComp
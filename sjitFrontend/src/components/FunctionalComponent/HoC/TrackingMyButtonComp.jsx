const trackingMyButtonComp =(Component) =>
{
    return(props)=>
    {
        const handlecllick =()=>
        {
            alert("the tracking info on clicking this button"+ props.TrackingInfo.CusId)
        }
        return(
            <form onClick={handlecllick}>
                Email : <input type="text" />
                <br />

                Password : <input type="text" />
                <br />

                <Component {...props}/>
            </form>
        )
    }
}

export default trackingMyButtonComp
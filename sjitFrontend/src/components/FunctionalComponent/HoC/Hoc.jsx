import Button from "./Button"
import TrackingMyButtonComp from "./trackingMyButtonComp"

const Hoc = () =>{
    const ButtonTrack=  TrackingMyButtonComp(Button)
    return(
        <div>
           <h1> Welcome to  Higher Order Components(HoC)</h1>
           <Button value={"LOGIN"}></Button>
           <ButtonTrack value ={"Login"} TrackingInfo={{CusId:"Hello",password:"Password"}}></ButtonTrack>
        </div>
    )
}

export  default Hoc
import Button from "./Button"
import trackingMyButtonComp from "./trackingMyButtonComp"

const HoC = () =>{
    const ButtonTrack=  trackingMyButtonComp(Button)
    return(
        <div>
           <h1> Welcome to  Higher Order Components(HoC)</h1>
           <Button value={"LOGIN"}></Button>
           <ButtonTrack value ={"Login"} trackingInfo={{CusId:"Hello",password:"Password"}}></ButtonTrack>
        </div>
    )
}
export default HoC
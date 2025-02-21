import Button from "./Button"
import TrackingMyButtonComp from "./TrackingMyButtonComp"
const Hoc = () =>{
    const ButtonTrack=  TrackingMyButtonComp(Button)
    return(
        <div>
           <h1> Welcome to  Higher Order Components(HoC)</h1>
           <Button value={"LOGIN"} />
           <ButtonTrack value ={"Login"} TrackingInfo={{CusId:"Hello",password:"Password"}}></ButtonTrack>
        </div>
    )
}
export default Hoc
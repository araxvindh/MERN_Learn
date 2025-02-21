import NumberFile from "./NumberFile"
import TextFile from "./TextFile"


const Memo = () =>
{
    return(
        <div>
            <h1>
                This is memo Components
            </h1>
            <h1>
                <NumberFile></NumberFile>
            </h1>
            <h2>
                <TextFile></TextFile>
            </h2>
        </div>
    )
}

export default Memo
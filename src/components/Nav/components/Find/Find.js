import './Find.css';
import { memo } from "react"

function Find({setFind}) {
    function Find_doing(event) {
        setFind(event.target.value)
    }
    return(
        <div className="Find">
            <input onChange={Find_doing} className='Find_doing' placeholder='Find doing'></input>
        </div>
    )
}
export default memo(Find)
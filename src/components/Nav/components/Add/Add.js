import './Add.css';
import { memo } from "react"

function Add({doings, setDoings}) {
    function Add_doing() {
      let newDoing = {
        name: "",
        desc: ""
      }
      newDoing.name = prompt("Введите название нового дела")
      newDoing.desc = prompt("Введите описание нового дела")
      let newDoings = doings.slice()
      newDoings.push(newDoing)
      setDoings(newDoings)
    }
    return(
        <div className="Add">
            <button className="Add_button" onClick={()=>Add_doing()}>Add doing</button>
        </div>
    )
}
export default memo(Add)
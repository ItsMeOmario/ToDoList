import './List.css';
import { memo } from "react"

function List({dela, mainDoing, find, setDoings}) {
    function x(num, e) {
        e.stopPropagation()
        let newDoings = dela.slice()
        newDoings.splice(num, 1)
        setDoings(newDoings)
    }
    const doings = dela.filter(doing => doing.name.includes(find)).map((doing, i)=>
    <div key={i} className='doing' onClick={()=>mainDoing(i)}>
        <p>{doing.name}</p>
        <p onClick={(e)=>x(i, e)} className='x'>x</p>
    </div>
    )
    return(
        <div className="List">{doings}</div>
    )
}
export default memo(List)
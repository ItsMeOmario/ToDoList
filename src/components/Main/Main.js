import './Main.css';
import { memo } from "react"

function Main({ doing }) {
    if (doing) {
        return <div className="Main">
        <h1>{doing.name}</h1>
        <p>{doing.desc}</p>
    </div>
    } else {
        return <div className="Main"></div>
    }
}
export default memo(Main)
import { memo } from "react";
import './Nav.css';
import Find from './components/Find/Find'
import List from './components/List/List'
import Add from './components/Add/Add'

function Nav({doings, setDoings, mainDoing, setFind, find}) {
    return (
        <div className="Nav">
            <Find setFind={setFind}/>
            <List find={find} dela={doings} mainDoing={mainDoing} setDoings={setDoings}/>
            <Add doings={doings} setDoings={setDoings}/>
        </div>
    );
}
export default memo(Nav)
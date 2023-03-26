import './App.css';
import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'
import {useState} from "react";

function App() {
  const [doings, setDoings] = useState([
    {
      name: "Помыть собаку",
      desc: "Тектстекстексттеткиопл"
    }, {
      name: "Погулять с посудой",
      desc: "рлвьобьвотбеулг"
    }, {
      name: "Посадить молоко",
      desc: "вубровипрьвпбеулг"
    }, {
      name: "Купить дерево",
      desc: "впрбьвпмаььелгнеу"
    }
])
  const [mainDoing, setMainDoing] = useState(null)
  const [find, setFind] = useState("")
  return (
    <div className="App">
      <Nav find={find} setFind={setFind}  doings={doings} setDoings={setDoings} mainDoing={setMainDoing}/>
      <Main doing={mainDoing!=null? doings[mainDoing] : false }/>
    </div>
  );
}

export default App;

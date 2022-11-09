import './App.css';
import {useEffect, useState} from "react";

function App() {

    const [chk1, setChk1] = useState(false);
    const [chk2, setChk2] = useState(false);
    const [chk3, setChk3] = useState(false);

    useEffect(() => {
        let chk1 = document.getElementById('chk1');
        let chk2 = document.getElementById('chk2');
        let chk3 = document.getElementById('chk3');
        let reset = document.getElementById('reset');

        chk1.onclick = function (){
            if (chk1.checked === false){
                setChk1(false);
            }else {
                setChk1(true);
            }
        }
        chk2.onclick = function (){
            if (chk2.checked === false){
                setChk2(false);
            }else {
                setChk2(true);
            }
        }
        chk3.onclick = function (){
            if (chk3.checked === false){
                setChk3(false);
            }else {
                setChk3(true);
            }
        }
        reset.onclick = function (){
            setChk1(false);
            chk1.checked = false;

            setChk2(false);
            chk2.checked = false;

            setChk3(false);
            chk3.checked = false;
        }
    });
    return (
    <div className="App">
      <h1>Mario - Game Matching</h1>
        <div className="box">
            <label>
                <input type="checkbox" disabled={!chk1 === true ? false : true} className="checkbox" id="chk1"/> :
                <i></i>
            </label>
            <label>
                <input type="checkbox" disabled={!chk2 === true ? false : true} className="checkbox" id="chk2"/>
                <i></i>
            </label>
            <label>
                <input type="checkbox"disabled={!chk3 === true ? false : true}  className="checkbox" id="chk3"/>
                <i></i>
            </label>
        </div>
        <button className="reset" id="reset" type="button">Play Again</button>
    </div>
  );
}

export default App;

import React, { useState, useRef} from 'react';
import './App.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
 
export default function App() {
  let [a,sm,number,upper] = ['abcdefghijklmnopqrstuvwxyz','@#$%&-','123456789','ABCDEFGHIJKLMNOPQRSTUVWXYZ'  ]
  const [st, setst] = useState();
  const [pass, setpass] = useState(" ");
  const [rang, setreng] = useState(6);
  const ref = useRef();
  let  p = useRef();
  let sym = useRef();
  let low = useRef(); 
  let upperc = useRef();
  
  const len = () => {
    let l = ref.current.value;
    setreng(l);
  };
  const num = () => {
    p.current.checked? setpass(number.concat(pass)): setpass(pass.replace(/[0-9]/g, ''));
  };
  const symbols = () => {
    sym.current.checked? setpass(sm.concat(pass)): setpass(pass.replace(/[!@#$%&-]/g, ''));
  };
  const submit = () => {
    let passwordd = [];
    for (let i = 0; i < rang; i++) {
      let pa = pass[Math.floor(Math.random() * pass.length)];
passwordd.push(pa)
      setst(pa);
    }
    setst(passwordd.join(""));
  };
  const lowercase = (lov) => {      
    low.current.checked? setpass(a.concat(pass)): setpass(pass.replace(/[a-z]/g, ''));
  };
  const upcas = () => {
    upperc.current.checked? setpass(upper.concat(pass)): setpass(pass.replace(/[A-Z]/g, ''));
  };
  const copy=()=>{
setst("")
  }
  return (
  
    <div className="conteiner">
      <div className="rand">
      <div className="copy">
        <input type='text' value={st} className='text' disabled='true' placeholder='Your password'/>
        <CopyToClipboard text={st}>
        <button className="btn" onClick={copy}>COPY</button>
        </CopyToClipboard>
        </div>
        <div className="settings">
          <label htmlFor="vol">Length of password: {rang}</label>
          <input
            type="range"
            id="vol"
            name="vol"
            min="6"
            max="16"
            value={rang}
            onChange={len}
            ref={ref}/>
        </div>
        <div className="settings">
          <label htmlFor="chack">Numbers (1,2,3)</label>
          <input type="checkbox" id="check" onClick={num} ref={p} />
        </div>
        <div className="settings">
          <label htmlFor="cha">Symbols ($,%,^)</label>
          <input type="checkbox" id="che" onClick={symbols} ref={sym} />
        </div>
        <div className="settings">
          <label htmlFor="chack">Lowercase (a,b,c)</label>
          <input type="checkbox" id="check" onClick={lowercase} ref={low} />
        </div>
        <div className="settings">
          <label htmlFor="up">UpperCase(A,B,C)</label>
          <input
            type="checkbox"
            id="up"
            name="up"
            onClick={upcas}
            ref={upperc}/>
        </div>
        <button onClick={submit} className='btn2'>Generate Password</button>
      </div>
    
      

    </div>
  );
}


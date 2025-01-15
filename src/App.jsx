import React, { useState } from "react";
import './App.css'
import Study from "./components/Study";
import Test from "./components/Test";
import Power from "./components/Power";

function App() {
  const [show, setShow] = useState("start");

  return (
    <div className="start">
 <>
      {show === 'start' ? (
        <>
        <div className='start-page'>
            <h1>חבלים</h1>
            <h2 className="txt">!חייל יקר
              <br />
              הלומדה הבאה עוסקת בחבלים 3
            </h2>
            <div className='btn-start-place'>
            <button className='btn-start' onClick={() => setShow("test")}>בא לי להיבחן</button>
            <button className='btn-start' onClick={() => setShow("study")}>יאללה, ללמוד</button>
            <button className='btn-start' onClick={() => setShow("power")}>פיסיקה בקטנה</button>
          </div>
          </div>
         
        </>
      ) : (
        <></>
      )}
      {show === 'study' ? (
        <Study setShow={setShow}/>
      ) : (
        <></>
      )
    }
    {show === 'test' ? (
        <Test setShow={setShow}/>
      ) : (
        <></>
      )
    }
     {show === 'power' ? (
        <Power setShow={setShow}/>
      ) : (
        <></>
      )
    }
    </>

    </div>
   
   
  );
}

export default App;

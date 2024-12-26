import React, { useState } from "react";
import './App.css'
import Study from "./components/Study";

function App() {
  const [show, setShow] = useState("start");

  return (
    <>
      {show === 'start' ? (
        <>
        <div className='start-page'>
            <h1>חבלים</h1>
            <h2>&#8252;חייל יקר
              <br />
              הלומדה הבאה עוסקת בחבלים 3
            </h2>
          </div>
          <div className='btn-start-place'>
            <button className='btn-start' onClick={() => setShow("test")}>בא לי להיבחן</button>
            <button className='btn-start' onClick={() => setShow("study")}>יאללה, אני רוצה ללמוד</button>
          </div>
        </>
      ) : (
        <></>
      )}
      {show === 'study' ? (
        <Study/>
      ) : (
        <></>
      )
    }
    </>
   
  );
}

export default App;

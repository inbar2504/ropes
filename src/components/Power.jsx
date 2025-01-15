import React, { useState, Component, useRef, useEffect } from "react";
import "./Power.css";
// import Typewriter from 'typewriter-effect/dist/core';
// import { TypeAnimation } from "react-type-animation";
import { TypeAnimation } from "react-type-animation";
import Swal from "sweetalert2";
import TypingAnimation from "./TypingAnimation";

function Power(props) {
  const [pageNumber, setPageNumber] = useState(0);
  const [finish3, setFinish3] = useState("false");
  const [timeLeft, setTimeLeft] = useState(3);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false); // כדי למנוע הפעלה כפולה של הטיימר
  const [showImage1, setShowImage1] = useState(false);
  const [showTimer1, setShowTimer1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const num = 0;
  const timeoutRef = useRef(null); // Reference for setTimeout
  const intervalRef = useRef(null); // Reference for setInterval

  const resetAll = (num) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimeLeft(3);
    setTimerRunning(false);
    setIsTimeUp(false);
    setShowImage1(false);
    setShowTimer1(false);
    setShowImage2(false);
    setPageNumber(num);
  };

  const startTimer = (timeToStartInSeconds) => {
    timeoutRef.current = setTimeout(() => {
      console.log("pageNumber", pageNumber);
      console.log("timeToStartInSeconds", timeToStartInSeconds);

      setShowTimer1(true);
      setTimeLeft(3); // אתחול הזמן ל-3 שניות
      setIsTimeUp(false); // אתחול הודעת הזמן נגמר
      setTimerRunning(true); // סימן שהטיימר רץ
    }, timeToStartInSeconds * 1000);
  };

  useEffect(() => {
    if (timerRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimeUp(true); // Show "time's up" message
      setTimerRunning(false); // Stop the timer
    }

    return () => {
      console.log("Cleaning up timers");
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [timeLeft, timerRunning]);

  useEffect(() => {
    if (finish3 === "true") {
      Swal.fire({
        title: "כל הכבוד",
        text: "סיימת את החלק של הפיסיקה! אם עשית את זה ,השאר קטן עלייך",
        icon: "success",
        heightAuto: false,
        confirmButtonText: "לחזרה לעמוד הבית",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    }
  }, [finish3]);

  useEffect(() => {
    if (pageNumber === 3) {
      console.log("hilo sir", "pageNumber 3");
      startTimer(11);
    } else if (pageNumber === 5) {
      console.log("hilo sir", "pageNumber 5");
      startTimer(7);
    } else if (pageNumber === 6) {
      console.log("hilo sir", "pageNumber 6");
      startTimer(11);
    } else if (pageNumber === 7) {
      console.log("hilo sir", "pageNumber 7");
      startTimer(25);
    }
    return () => {
      // Cleanup timeout when page changes
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [pageNumber]);

  return (
    <div className="power-study">
      {pageNumber === 0 ? (
        <>
          <div className="power">
            <h1>רווח כוח</h1>
            <TypingAnimation
              durationInSeconds={10}
              text={`
                         עקרון רווח הכוח מתאר את היכולת להגדיל את הכוח או האנרגיה במערכת בצורה יעילה, באמצעות שיפור ביצועים או אופטימיזציה של תהליכים טכנולוגיים או פיזיקליים\n 
                 יאללה לחצו על כפתור "הבא" על מנת להתחיל את החלק המעניין יותר
                         `}
            />
            {/* <TypeAnimation
            style={{
              whiteSpace: "pre-line",
              height: "195px",
              display: "block",
              textAlign: "center",
              direction: "rtl",
            }}
            sequence={[
              `
                      עקרון רווח הכוח מתאר את היכולת להגדיל את הכוח או האנרגיה במערכת בצורה יעילה, באמצעות שיפור ביצועים או אופטימיזציה של תהליכים טכנולוגיים או פיזיקליים\n 
              יאללה לחצו על כפתור "הבא" על מנת להתחיל את החלק המעניין יותר
                      `,
              1000,
            ]}
            // speed={50}
            // repeat={0}
          /> */}
            <div className="move-btns-p">
              <button
                className="last-btn"
                onClick={() => props.setShow("start")}
              >
                הקודם
              </button>
              <button className="next-btn" onClick={() => resetAll(1)}>
                הבא
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {pageNumber === 1 ? (
        <>
          <div className="power">
            <h2 className="blackHeader">למה אנחנו בכלל נוגעים ברווח כוח</h2>
            <TypingAnimation
              durationInSeconds={10}
              text={`כאשר אנו מנסים להרים מטען כבד אותו לא ניתן להרים באמצעות כוח ידיים, נבנה מערכת גלגלות באמצעותה נוכל להכפיל את הכוח שאנו מפעילים ונהפוך את תהליך ההרמה לקל יותר.`}
            />
            {/* <TypeAnimation
            style={{
              whiteSpace: "pre-line",
              height: "195px",
              display: "block",
              textAlign: "center",
              direction: "rtl",
              width: "60vw",
              marginBottom: "2vh",
            }}
            sequence={[
              "כאשר אנו מנסים להרים מטען כבד אותו לא ניתן להרים באמצעות כוח ידיים, נבנה מערכת גלגלות באמצעותה נוכל להכפיל את הכוח שאנו מפעילים ונהפוך את תהליך ההרמה לקל יותר.",
              1000, // הפסקה של שנייה
              () => {
                setShowImage1(true);
              },
            ]}
          /> */}
            {showImage1 ? (
              <>
                <img className="image1" src="assets/one.png"/>
                {/* <img src="assets/hand.gif" className="image1" /> */}
              </>
            ) : (
              <></>
            )}

            <div className="move-btns-p">
              <button className="last-btn" onClick={() => resetAll(0)}>
                הקודם
              </button>
              <button className="next-btn" onClick={() => resetAll(2)}>
                הבא
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {pageNumber === 2 ? (
        <>
          <div className="power">
            <h2 className="blackHeader">?איך עובדת גלגלת</h2>
            <TypeAnimation
              style={{
                whiteSpace: "pre-line",
                height: "195px",
                //   display: "block",
                textAlign: "center",
                direction: "rtl",
                display: "flex",
              }}
              sequence={[
                `מטרתה של גלגלת היא לשנות את הכיוון של החבל בחיכוך מינימלי. 
            העומס על החבלים אשר יוצא משני צידי הגלגלת יהיה שווה
            ולכן העומס שיהיה על הגלגלת תמיד יהיה סכום העומסים. במקרה הזה הגלגלת מחוברת לעגינה לכן העומס שפועל על העגינה יהיה שווה לעומס שפועל על הגלגלת
            נגדיר את העומס שעל החבל כ-T`,
                100,
                () => {
                  setShowImage2(true);
                },
              ]}
              cursor={false}
            />

            {showImage2 ? (
              <>
                <video
                  src="assets/video/01.mp4"
                  // width="1440"
                  // height="300"
                  controls
                  autoPlay
                  className="video-comp"
                />

                <TypeAnimation
                  style={{
                    whiteSpace: "pre-line",
                    height: "195px",
                    //   display: "block",
                    textAlign: "center",
                    direction: "rtl",
                    display: "contents",
                    width: "70vw",
                  }}
                  sequence={[
                    "בגלגלת תמיד נשאף שהחבלים יהיו ללא זווית (חבלים יוצאים מאותו כיוון) ",
                    100,
                  ]}
                  cursor={false}
                />
              </>
            ) : (
              <></>
            )}

            <div className="move-btns-p">
              <button className="last-btn" onClick={() => resetAll(1)}>
                הקודם
              </button>
              <button className="next-btn" onClick={() => resetAll(3)}>
                הבא
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {pageNumber === 3 ? (
        <>
          <div className="power">
            <h2 className="blueHeader">בואו נתרגל קצת</h2>

            <TypingAnimation
              durationInSeconds={10}
              text={`התבקשת להרים אדם השוקל T. 
              חשבו את העומסים כמו בהדגמה הקודמת ונסו להבין מה העומס על חבל המשיכה. 
              רמז: העומס על הגלגלת שווה לעומס שמפעיל הבן אדם
              .
               התשובה תופיע בעוד 
              `}
            />
            {showTimer1 ? (
              <>
                {isTimeUp ? (
                  <>
                    <h2 className="header-timer1">!הזמן נגמר</h2>
                  </>
                ) : (
                  <>
                    <h2 className="header-timer1">{timeLeft}</h2>
                  </>
                )}
              </>
            ) : (
              <></>
            )}
            {timeLeft === 0 ? (
              <>
                <video
                  src="assets/video/01.mp4"
                  // width="1440"
                  // height="300"
                  controls
                  autoPlay
                  className="video-comp1"
                />
                <TypeAnimation
                  style={{
                    whiteSpace: "pre-line",
                    height: "195px",
                    //   display: "block",
                    textAlign: "center",
                    direction: "rtl",
                    display: "flex",
                  }}
                  sequence={[
                    ` באמצעות השימוש בגלגלת, הורדתי את העומס על חבל המשיכה בחצי, כלומר-רווח כוח 2  
                  רווח כוח- היחס בין הכוח שאני מפעיל לכוח שמרגיש מטען החילוץ `,
                    100,
                  ]}
                  // speed={100}
                  cursor={false}
                />
              </>
            ) : (
              <></>
            )}
            <div className="move-btns-p">
              <button className="last-btn" onClick={() => resetAll(2)}>
                הקודם
              </button>
              <button className="next-btn" onClick={() => resetAll(4)}>
                הבא
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {pageNumber === 4 ? (
        <>
          <div className="power">
            <h2 className="blackHeader">קצת על גלגלות</h2>
            <video
              src="assets/video/02.mp4"
              // width="1440"
              // height="300"
              controls
              autoPlay
              className="video-comp1"
            />
            <TypeAnimation
              style={{
                whiteSpace: "pre-line",
                height: "195px",
                //   display: "block",
                textAlign: "center",
                direction: "rtl",
                display: "contents",
              }}
              sequence={[
                `גלגלת הקרובה לעגינה : גלגלת סטטית אשר אינה נעה במהלך המשיכה יוצרת שינוי כיוון(ללא יתרון כוח)
\n 
הגלגלת הרחוקה מהעגינה : גלגלת דינמית אשר הינה יוצרת יתרון כוח
`,
                100,
              ]}
              // speed={100}
              cursor={false}
            />
            <div className="move-btns-p">
              <button className="last-btn" onClick={() => resetAll(3)}>
                הקודם
              </button>
              <button className="next-btn" onClick={() => resetAll(5)}>
                הבא
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {pageNumber === 5 ? (
        <>
          <div className="power">
            <h2 className="blueHeader">בואו נתרגל קצת</h2>
            <img className="image2" src="assets/revah3.png" />
            <TypingAnimation
              durationInSeconds={6}
              text={` כמה רווח כוח יש לנו בתמונה?
              התשובה  תופיע בעוד
              `}
            />

            {showTimer1 ? (
              <>
                {isTimeUp ? (
                  <>
                    <h2 className="header-timer1">!הזמן נגמר</h2>
                  </>
                ) : (
                  <>
                    <h2 className="header-timer1">{timeLeft}</h2>
                  </>
                )}
              </>
            ) : (
              <></>
            )}
            {timeLeft === 0 ? (
              <>
                <video
                  src="assets/video/03.mp4"
                  // width="1440"
                  // height="300"
                  controls
                  autoPlay
                  className="video-comp1"
                />
                <TypeAnimation
                  style={{
                    whiteSpace: "pre-line",
                    height: "195px",
                    display: "contents",
                    textAlign: "center",
                    direction: "rtl",
                  }}
                  sequence={[
                    `במערכת זו לקחנו את מערכת רווח כוח 3 והוספנו 2 גלגלות -גלגלת אחת סטטית וגלגלת אחת דינמית ובסוף יצא רווח כוח 5`,
                    100,
                  ]}
                  // speed={100}
                  cursor={false}
                />
              </>
            ) : (
              <></>
            )}

            <div className="move-btns-p">
              <button className="last-btn" onClick={() => resetAll(4)}>
                הקודם
              </button>
              <button className="next-btn" onClick={() => resetAll(6)}>
                הבא
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {pageNumber === 6 ? (
        <>
          <div className="power">
            <h2 className="blueHeader">בואו נתרגל קצת</h2>
            <img className="image2" src="assets/revah3.png" />
            <TypingAnimation
              durationInSeconds={10}
              text={`בנינו מערכת רווח כוח 3-חשבו כיצד נוכל להכפיל את הכוח
              התשובה  תופיע בעוד
              `}
            />

            {showTimer1 ? (
              <div>
                {isTimeUp ? (
                  <>
                    <h2 className="header-timer1">!הזמן נגמר</h2>
                  </>
                ) : (
                  <>
                    <h2 className="header-timer1">{timeLeft}</h2>
                  </>
                )}
              </div>
            ) : (
              <></>
            )}
            {timeLeft === 0 ? (
              <>
                <video
                  src="assets/video/04.mp4"
                  // width="1440"
                  // height="300"
                  controls
                  autoPlay
                  className="video-comp1"
                />
                <TypeAnimation
                  style={{
                    //   whiteSpace: "pre-line",
                    //   height: "195px",
                    display: "contents",
                    textAlign: "center",
                    direction: "rtl",
                  }}
                  sequence={[
                    `על חבל המשיכה בניתי מערכת רווח כוח 3 נוספת ובכך הכפלתי את הכוח מרווח כוח 3 לרווח כוח 9 (3 בריבוע)`,
                    100,
                  ]}
                  // speed={100}
                  cursor={false}
                />
              </>
            ) : (
              <></>
            )}

            <div className="move-btns-p">
              <button className="last-btn" onClick={() => resetAll(5)}>
                הקודם
              </button>
              <button className="next-btn" onClick={() => resetAll(7)}>
                הבא
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {pageNumber === 7 ? (
        <>
          <div className="power">
            <h2 className="blueHeader">חידה</h2>
            <img className="image2" src="assets/revah3.png" />
            <TypingAnimation
              durationInSeconds={24}
              text={`יש לנו מערכת רווח כוח 3 ואנחנו צריכים להיפטר מגלגלת אחת(לשים במקומה טבעת), מאיזה גלגלת תבחר להיפטר?
              \n
              רמז: כאשר נוריד גלגלת אחת ונישאר רק עם טבעת באופן אוטומטי החיכוך יגדל, איפה היינו מעדיפים מחיכוך גדול יותר?באיזו נקודה?איפה החיכוך ישפיע פחות?
\n
              התשובה  תופיע בעוד
              `}
            />
            {/* <TypeAnimation
            style={{
              whiteSpace: "pre-line",
              height: "195px",
              display: "contents",
              textAlign: "center",
              direction: "rtl",
            }}
            sequence={[
              `יש לנו מערכת רווח כוח 3 ואנחנו צריכים להיפטר מגלגלת אחת(לשים במקומה טבעת), מאיזה גלגלת תבחר להיפטר?
              \n
              רמז: כאשר נוריד גלגלת אחת ונישאר רק עם טבעת באופן אוטומטי החיכוך יגדל, איפה היינו מעדיפים מחיכוך גדול יותר?באיזו נקודה?איפה החיכוך ישפיע פחות?
\n
              התשובה  תופיע בעוד
              `,
              100,
              () => startTimer(7), // הפונקציה startTimer תופעל אחרי שהאנימציה מסתיימת
            ]}
            // speed={100}
            cursor={false}
          /> */}

            {showTimer1 ? (
              <div>
                {isTimeUp ? (
                  <>
                    <h2 className="header-timer1">!הזמן נגמר</h2>
                  </>
                ) : (
                  <>
                    <h2 className="header-timer1">{timeLeft}</h2>
                  </>
                )}
              </div>
            ) : (
              <></>
            )}
            {timeLeft === 0 ? (
              <>
                <TypeAnimation
                  style={{
                    //   whiteSpace: "pre-line",
                    //   height: "195px",
                    display: "contents",
                    textAlign: "center",
                    direction: "rtl",
                  }}
                  sequence={[`נוריד את הגלגלת שקרובה לסדרן`, 100]}
                  // speed={100}
                  // cursor={false}
                />
              </>
            ) : (
              <></>
            )}
            <div className="move-btns-p">
              <button className="last-btn" onClick={() => resetAll(6)}>
                הקודם
              </button>
              <button className="next-btn" onClick={() => setFinish3("true")}>
                הבא
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Power;

// import React, { useState, Component, useRef, useEffect } from "react";
// import "./Power.css";
// // import Typewriter from 'typewriter-effect/dist/core';
// // import { TypeAnimation } from "react-type-animation";
// import { TypeAnimation } from "react-type-animation";
// import Swal from "sweetalert2";
// import TypingAnimation from "./TypingAnimation";

// function Power(props) {
//   const [pageNumber, setPageNumber] = useState(0);
//   const [finish3, setFinish3] = useState("false");
//   const [timeLeft, setTimeLeft] = useState(3);
//   const [isTimeUp, setIsTimeUp] = useState(false);
//   const [timerRunning, setTimerRunning] = useState(false); // כדי למנוע הפעלה כפולה של הטיימר
//   const [showImage1, setShowImage1] = useState(false);
//   const [showTimer1, setShowTimer1] = useState(false);
//   const [showImage2, setShowImage2] = useState(false);
//   const num = 0;
//   const timeoutRef = useRef(null); // Reference for setTimeout
//   const intervalRef = useRef(null); // Reference for setInterval

//   const resetAll = (num) => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }
//     setTimeLeft(3);
//     setTimerRunning(false);
//     setIsTimeUp(false);
//     setShowImage1(false);
//     setShowTimer1(false);
//     setShowImage2(false);
//     setPageNumber(num);
//   };

//   const startTimer = (timeToStartInSeconds) => {
//     timeoutRef.current = setTimeout(() => {
//       console.log("pageNumber", pageNumber);
//       console.log("timeToStartInSeconds", timeToStartInSeconds);

//       setShowTimer1(true);
//       setTimeLeft(3); // אתחול הזמן ל-3 שניות
//       setIsTimeUp(false); // אתחול הודעת הזמן נגמר
//       setTimerRunning(true); // סימן שהטיימר רץ
//     }, timeToStartInSeconds * 1000);
//   };

//   useEffect(() => {
//     if (timerRunning && timeLeft > 0) {
//       intervalRef.current = setInterval(() => {
//         setTimeLeft((prevTime) => prevTime - 1);
//       }, 1000);
//     } else if (timeLeft === 0) {
//       setIsTimeUp(true); // Show "time's up" message
//       setTimerRunning(false); // Stop the timer
//     }

//     return () => {
//       console.log("Cleaning up timers");
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     };
//   }, [timeLeft, timerRunning]);

//   useEffect(() => {
//     if (finish3 === "true") {
//       Swal.fire({
//         title: "כל הכבוד",
//         text: "סיימת את החלק של הפיסיקה! אם עשית את זה ,השאר קטן עלייך",
//         icon: "success",
//         heightAuto: false,
//         confirmButtonText: "לחזרה לעמוד הבית",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           window.location.reload();
//         }
//       });
//     }
//   }, [finish3]);

//   useEffect(() => {
//     if (pageNumber === 3) {
//       console.log("hilo sir", "pageNumber 3");
//       startTimer(11);
//     } else if (pageNumber === 5) {
//       console.log("hilo sir", "pageNumber 5");
//       startTimer(7);
//     } else if (pageNumber === 6) {
//       console.log("hilo sir", "pageNumber 6");
//       startTimer(11);
//     } else if (pageNumber === 7) {
//       console.log("hilo sir", "pageNumber 7");
//       startTimer(11);
//     }
//     return () => {
//       // Cleanup timeout when page changes
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//         timeoutRef.current = null;
//       }
//     };
//   }, [pageNumber]);

//   return (
//     <div className="power">
//       {pageNumber === 0 ? (
//         <>
//           <h1>רווח כוח</h1>
//           <TypingAnimation
//             durationInSeconds={10}
//             text={`
//                          עקרון רווח הכוח מתאר את היכולת להגדיל את הכוח או האנרגיה במערכת בצורה יעילה, באמצעות שיפור ביצועים או אופטימיזציה של תהליכים טכנולוגיים או פיזיקליים\n
//                  יאללה לחצו על כפתור "הבא" על מנת להתחיל את החלק המעניין יותר
//                          `}
//           />
//           <div className="move-btns-p">
//             <button className="last-btn" onClick={() => props.setShow("start")}>
//               הקודם
//             </button>
//             <button className="next-btn" onClick={() => resetAll(1)}>
//               הבא
//             </button>
//           </div>
//         </>
//       ) : (
//         <></>
//       )}
//       {pageNumber === 1 ? (
//         <>
//           <h2>למה אנחנו בכלל נוגעים ברווח כוח</h2>
//           <img className="image1" src="assets/one.png" />
//           <TypingAnimation
//           durationInSeconds={10}
//           text={`כאשר אנו מנסים להרים מטען כבד אותו לא ניתן להרים באמצעות כוח ידיים, נבנה מערכת גלגלות באמצעותה נוכל להכפיל את הכוח שאנו מפעילים ונהפוך את תהליך ההרמה לקל יותר.`}
//           />
//           {showImage1 ? (
//             <>
//               <img className="image1" src="assets/one.png" />
//             </>
//           ) : (
//             <></>
//           )}

//           <div className="move-btns-p">
//             <button className="last-btn" onClick={() => resetAll(0)}>
//               הקודם
//             </button>
//             <button className="next-btn" onClick={() => resetAll(2)}>
//               הבא
//             </button>
//           </div>
//         </>
//       ) : (
//         <></>
//       )}
//       {pageNumber === 2 ? (
//         <>
//           <h2>?איך עובדת גלגלת</h2>
//           <TypeAnimation
//             style={{
//               whiteSpace: "pre-line",
//               height: "195px",
//               //   display: "block",
//               textAlign: "center",
//               direction: "rtl",
//               display: "flex",
//             }}
//             sequence={[
//               `מטרתה של גלגלת היא לשנות את הכיוון של החבל בחיכוך מינימלי.
//             העומס על החבלים אשר יוצא משני צידי הגלגלת יהיה שווה
//             ולכן העומס שיהיה על הגלגלת תמיד יהיה סכום העומסים. במקרה הזה הגלגלת מחוברת לעגינה לכן העומס שפועל על העגינה יהיה שווה לעומס שפועל על הגלגלת

//             נגדיר את העומס שעל החבל כ-T`,
//               100,
//               () => {
//                 setShowImage2(true);
//               },
//             ]}
//             cursor={false}
//           />

//           {showImage2 ? (
//             <>
//               <video
//                 src="assets/video/1.mp4"
//                 // width="1440"
//                 // height="300"
//                 controls
//                 autoPlay
//                 className="video-comp"
//               />

//               <TypeAnimation
//                  durationInSeconds={10}
//                  text={
//                   "בגלגלת תמיד נשאף שהחבלים יהיו ללא זווית (חבלים יוצאים מאותו כיוון) "}
//               />
//             </>
//           ) : (
//             <></>
//           )}

//           <div className="move-btns-p">
//             <button className="last-btn" onClick={() => resetAll(1)}>
//               הקודם
//             </button>
//             <button className="next-btn" onClick={() => resetAll(3)}>
//               הבא
//             </button>
//           </div>
//         </>
//       ) : (
//         <></>
//       )}
//       {pageNumber === 3 ? (
//         <>
//           <h2>בואו נתרגל קצת</h2>

//           <TypingAnimation
//             durationInSeconds={10}
//             text={`התבקשתי להרים אדם השוקל T.
//               חשבו את העומסים כמו בהדגמה הקודמת ונסו להבין מה העומס על חבל המשיכה.
//               רמז : העומס על הגלגלת שווה לעומס שמפעיל הבן אדם
//                התשובה תופיע בעוד
//               `}
//           />
//           {showTimer1 ? (
//             <>
//               {isTimeUp ? (
//                 <>
//                   <h2 className="header-timer1">!הזמן נגמר</h2>
//                 </>
//               ) : (
//                 <>
//                   <h2 className="header-timer1">{timeLeft}</h2>
//                 </>
//               )}
//             </>
//           ) : (
//             <></>
//           )}
//           {timeLeft === 0 ? (
//             <>
//               <video
//                 src="assets/video/1.mp4"
//                 // width="1440"
//                 // height="300"
//                 controls
//                 autoPlay
//                 className="video-comp1"
//               />
//               <TypeAnimation
//                  durationInSeconds={10}
//                  text={
//                   ` באמצעות השימוש בגלגלת, הורדתי את העומס על חבל המשיכה בחצי, כלומר-רווח כוח 2
//                   רווח כוח- היחס בין הכוח שאני מפעיל לכוח שמרגיש מטען החילוץ `}
//               />
//             </>
//           ) : (
//             <></>
//           )}
//           <div className="move-btns-p">
//             <button className="last-btn" onClick={() => resetAll(2)}>
//               הקודם
//             </button>
//             <button className="next-btn" onClick={() => resetAll(4)}>
//               הבא
//             </button>
//           </div>
//         </>
//       ) : (
//         <></>
//       )}
//       {pageNumber === 4 ? (
//         <>
//           <h2>קצת על גלגלות</h2>
//           <video
//             src="assets/video/2.mp4"
//             // width="1440"
//             // height="300"
//             controls
//             autoPlay
//             className="video-comp1"
//           />
//           <TypeAnimation
//              durationInSeconds={10}
//              text={
//               `גלגלת הקרובה לעגינה : גלגלת סטטית אשר אינה נעה במהלך המשיכה יוצרת שינוי כיוון(ללא יתרון כוח)
// \n
// הגלגלת הרחוקה מהעגינה : גלגלת דינמית אשר הינה יוצרת יתרון כוח
// `}
//           />
//           <div className="move-btns-p">
//             <button className="last-btn" onClick={() => resetAll(3)}>
//               הקודם
//             </button>
//             <button className="next-btn" onClick={() => resetAll(5)}>
//               הבא
//             </button>
//           </div>
//         </>
//       ) : (
//         <></>
//       )}
//       {pageNumber === 5 ? (
//         <>
//           <h2>בואו נתרגל קצת</h2>
//           <img className="image2" src="assets/revah3.png" />
//           <TypingAnimation
//             durationInSeconds={6}
//             text={` כמה רווח כוח יש לנו בתמונה?
//               התשובה  תופיע בעוד
//               `}
//           />

//           {showTimer1 ? (
//             <>
//               {isTimeUp ? (
//                 <>
//                   <h2 className="header-timer1">!הזמן נגמר</h2>
//                 </>
//               ) : (
//                 <>
//                   <h2 className="header-timer1">{timeLeft}</h2>
//                 </>
//               )}
//             </>
//           ) : (
//             <></>
//           )}
//           {timeLeft === 0 ? (
//             <>
//               <video
//                 src="assets/video/3.mp4"
//                 // width="1440"
//                 // height="300"
//                 controls
//                 autoPlay
//                 className="video-comp1"
//               />
//               <TypeAnimation
//                  durationInSeconds={10}
//                  text={
//                   `במערכת זו לקחנו את מערכת רווח כוח 3 והוספנו 2 גלגלות -גלגלת אחת סטטית וגלגלת אחת דינמית ובסוף יצא רווח כוח 5`}
//               />
//             </>
//           ) : (
//             <></>
//           )}

//           <div className="move-btns-p">
//             <button className="last-btn" onClick={() => resetAll(4)}>
//               הקודם
//             </button>
//             <button className="next-btn" onClick={() => resetAll(6)}>
//               הבא
//             </button>
//           </div>
//         </>
//       ) : (
//         <></>
//       )}
//       {pageNumber === 6 ? (
//         <>
//           <h2>בואו נתרגל קצת</h2>
//           <img className="image2" src="assets/revah3.png" />
//           <TypeAnimation
//             durationInSeconds={10}
//             text={`בנינו מערכת רווח כוח 3-חשבו כיצד נוכל להכפיל את הכוח
//               התשובה  תופיע בעוד
//               `}
//           />

//           {showTimer1 ? (
//             <div>
//               {isTimeUp ? (
//                 <>
//                   <h2 className="header-timer">!הזמן נגמר</h2>
//                 </>
//               ) : (
//                 <>
//                   <h2 className="header-timer">{timeLeft}</h2>
//                 </>
//               )}
//             </div>
//           ) : (
//             <></>
//           )}
//           {timeLeft === 0 ? (
//             <>
//               <video
//                 src="assets/video/04.mp4"
//                 // width="1440"
//                 // height="300"
//                 controls
//                 autoPlay
//                 className="video-comp1"
//               />
//               <TypeAnimation
//                  durationInSeconds={10}
//                  text={
//                   `על חבל המשיכה בניתי מערכת רווח כוח 3 נוספת ובכך הכפלתי את הכוח מרווח כוח 3 לרווח כוח 9 (3 בריבוע)`}
//               />
//             </>
//           ) : (
//             <></>
//           )}

//           <div className="move-btns-p">
//             <button className="last-btn" onClick={() => resetAll(5)}>
//               הקודם
//             </button>
//             <button className="next-btn" onClick={() => resetAll(7)}>
//               הבא
//             </button>
//           </div>
//         </>
//       ) : (
//         <></>
//       )}
//       {pageNumber === 7 ? (
//         <>
//           <h2>חידה</h2>
//           <img className="image2" src="assets/revah3.png" />
//           <TypeAnimation
//             durationInSeconds={10}
//             text={`יש לנו מערכת רווח כוח 3 ואנחנו צריכים להיפטר מגלגלת אחת(לשים במקומה טבעת), מאיזה גלגלת תבחר להיפטר?
//               \n
//               רמז: כאשר נוריד גלגלת אחת ונישאר רק עם טבעת באופן אוטומטי החיכוך יגדל, איפה היינו מעדיפים מחיכוך גדול יותר?באיזו נקודה?איפה החיכוך ישפיע פחות?
// \n
//               התשובה  תופיע בעוד
//               `}
//           />

//           {showTimer1 ? (
//             <div>
//               {isTimeUp ? (
//                 <>
//                   <h2 className="header-timer1">!הזמן נגמר</h2>
//                 </>
//               ) : (
//                 <>
//                   <h2 className="header-timer1">{timeLeft}</h2>
//                 </>
//               )}
//             </div>
//           ) : (
//             <></>
//           )}
//           {timeLeft === 0 ? (
//             <>
//               <TypeAnimation
//                 durationInSeconds={10}
//             text={`נוריד את הגלגלת שקרובה לסדרן`}
//               />
//             </>
//           ) : (
//             <></>
//           )}
//           <div className="move-btns-p">
//             <button className="last-btn" onClick={() => resetAll(6)}>
//               הקודם
//             </button>
//             <button className="next-btn" onClick={() => setFinish3("true")}>
//               הבא
//             </button>
//           </div>
//         </>
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// }

// export default Power;

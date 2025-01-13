import React, { useState, Component, useRef, useEffect } from "react";
import "./Test.css";
import Answers from "./Answers";

function Test() {
  const questions = [
    {
      questionText: "מה ההפסד בהגדלת רווח הכוח",
      answerOptions: [
        {
          answerText:
            "א. אין הפסד, יותר קל להרים באופן זה ואפשר לבצע את המשימה יותר מהר",
          isCorrect: false,
        },
        {
          answerText:
            "ב. על כל רווח כוח משלמים ביחס ישר בכמות החבל הנדרשת להרמה. 3 מטר חבל על מטר הרמה ברווח 3",
          isCorrect: false,
        },
        {
          answerText:
            "ג. על כל רווח כוח משלמים ביחס כפול בכמות החבל הנדרשת להרמה. 6 מטר חבל על מטר הרמה ברווח 3",
          isCorrect: false,
        },
        {
          answerText:
            "ד. על כל רווח כוח משלמים ביחס ישר בכמות החבל הנדרשת להרמה. 5 מטר חבל על מטר הרמה ברווח 5",
          isCorrect: false,
        },
        { answerText: "ה. ב ו-ד הן התשובות נכונות", isCorrect: true },
      ],
    },
    {
      questionText:
        "האם העומס של המערכת שונה בהרמה ושילוח (הנח שמשקל המחלצים זהה)",
      answerOptions: [
        {
          answerText:
            "א. כן, בהרמה החיכוך פועל נגד התנועה ומוסיף כוח נגד המערכת. יותר עומס על המערכת",
          isCorrect: true,
        },
        {
          answerText:
            "ב. לא, העומס זהה,למה שיהיה שונה אם יש לי את אותה המשקולת בקצה",
          isCorrect: false,
        },
        {
          answerText:
            "ג. כן, בהרמה החיכוך פועל עם התנועה ומוריד כוח מהמערכת. פחות עומס על המערכת פשוט קשה יותר להרים מלהוריד",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "למה נועד הסופג אנרגיה",
      answerOptions: [
        {
          answerText: "א. לחבר את הגלגלות בצורה יותר מסודרת לטיבלוק",
          isCorrect: false,
        },
        {
          answerText: "ב. לכשול ולהתריע לפני שהמערכת כושלת בעומס גדול מדי",
          isCorrect: true,
        },
        {
          answerText: "ג. לחלק את העומס של הטיבלוק בצורה שווה של החבל",
          isCorrect: false,
        },
        {
          answerText: "ד. להאריך את נקודת החיבור מהחבל אל הגלגלות",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "מה עושים כאשר מכונת ההרמה לא פועלת חשמלית בתחילת ההרמה",
      answerOptions: [
        {
          answerText:
            "א. מעביר עומס בעזרת כפתור השילוח בחירום ואז מעבר למערכת רווח כוח",
          isCorrect: false,
        },
        {
          answerText:
            "ב. בונים מערכת רווח כוח מרימים עד שאין עומס על המכונה ומנתקים אותה",
          isCorrect: false,
        },
        {
          answerText:
            "ג. לוחץ על כפתור ההפעלה, בודק חיבור סוללה ובמידת הצורך מחליף סוללה",
          isCorrect: false,
        },
        { answerText: "ד. א ו-ג נכונות", isCorrect: true },
        { answerText: "ה. ב ו-ג נכונות", isCorrect: false },
      ],
    },
    {
      questionText:
        "מה עושים כאשר מכונת ההרמה עובדת אבל לא מצליחה להרים את המחלץ והפצוע",
      answerOptions: [
        {
          answerText:
            "א. עוברים כמה שיותר מהר חזרה למאסטרו ובונים מערכת רווח כוח,העומס של המחלץ והפצוע גדול מהעומס שהמכונה מסוגלת להרים",
          isCorrect: false,
        },
        {
          answerText:
            "ב. מחליפים למכונה סוללה, אולי הסוללה חלשה מדי בשביל לבצע את ההרמה",
          isCorrect: false,
        },
        {
          answerText:
            "ג. מנסים לעזור למכונה על ידי משיכת חבל על מנת להתגבר על החיכוך הסטטי",
          isCorrect: false,
        },
        {
          answerText:
            "ד. מנסים לעזור למכונה על ידי משיכת חבל על מנת להתגבר על החיכוך הדינמי",
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "למה יש בחצובה גלגלת בגובה ביצים",
      answerOptions: [
        {
          answerText: "א. שבעת העלייה יהיה יותר קל לשחרר את המחלץ מהמערכת",
          isCorrect: false,
        },
        {
          answerText: "ב. שאם החצובה תקרוס הנפילה של המחלץ תהיה יותר קטנה",
          isCorrect: true,
        },
        {
          answerText: "ג. שייה יותר קל לחבר את החלץ לפני הירידה",
          isCorrect: false,
        },
        {
          answerText:
            "ד. לא ניתן לחבר לראש החצובה את שני החבלים, זה מעמיס את הראש מעבר לתקן",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "לאיזה גלגלת נחבר את מכונת ההרמה אקטסייף",
      answerOptions: [
        {
          answerText:
            "א. לגלגת הגבוהה כי ככה יותר קל לשמור על וקטור הכוחות במקום הנכון",
          isCorrect: false,
        },
        {
          answerText:
            "ב. לגלגלת הנמוכה ,אסור להעמיס את ראש החצובה במשקל גדול מדי",
          isCorrect: false,
        },
        {
          answerText:
            "ג. לגלגלת הנמוכה כי ככה יותר קל לשמור על וקטור הכוחות במקום הנכון ",
          isCorrect: false,
        },
        {
          answerText:
            "ד. לגלגלת הגבוהה ,ככה נוריד יותר חיכוך וההרמה תהיה קלה יותר",
          isCorrect: true,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [item, setItem] = useState([""]);
  const [newItem, setNewItem] = useState("");
  // const [test,setShowTest] = useState(true);

  const handleAnswerOptionClick = (isCorrect, answerOption, questionText) => {
    let newItem = "";
    if (isCorrect) {
      setScore(score + 1);
      newItem = "correct";
    } else {
      newItem = "incorrect";
    }
    
    // הוספת הערך למערך לאחר החלטת התשובה
    setItem(prevItem => [...prevItem, newItem]);
  
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const TryAgain = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };
  return (
    <div className="test">
      {showScore ? (
        <div className="score-section">
          <Answers brand={score} que={item} />
          
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>{currentQuestion + 1}</span>/{questions.length} שאלה
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="test-btns"
                onClick={() =>
                  handleAnswerOptionClick(
                    answerOption.isCorrect,
                    answerOption,
                    questions[currentQuestion].questionText
                  )
                }
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Test;

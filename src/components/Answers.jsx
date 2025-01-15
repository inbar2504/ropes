import React, { useState, Component, useRef, useEffect } from "react";
import "./Answers.css";
// import * as React from 'react';
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function Answers(props) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [finish2, setFinish2] = useState("false");

  useEffect(() => {
    if (finish2 === "true") {
      Swal.fire({
        title: "כל הכבוד",
        text: "סיימת את ההמבחן! מקווים שלמדת והחכמת",
        icon: "success",
        heightAuto: false,
        confirmButtonText: "לחזרה לעמוד הבית",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    }
  }, [finish2]);
  return (
    <div className="answers">
      <p className="center-header">
        ענית נכון על {props.brand} שאלות מתוך 7
        <br />
        להלן השאלות בצירוף עם התשובות הנכונות
      </p>
      {/* <p className="center-header">להלן השאלות בצירוף עם התשובות הנכונות</p> */}
      <div>
        <Accordion
          dir="rtl"
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            className={props.que[1]}
          >
            <Typography component="span">מה ההפסד בהגדלת רווח הכוח?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              התשובה הנכונה היא ה': תשובות ב' ו-ד' נכונות
              <br />
              ב. על כל רווח כוח משלמים ביחס ישר בכמות החבל הנדרשת להרמה. 3 מטר
              חבל על מטר הרמה ברווח 3
              <br />
              ד. על כל רווח כוח משלמים ביחס ישר בכמות החבל הנדרשת להרמה. 5 מטר
              חבל על מטר הרמה ברווח 5
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          dir="rtl"
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
            className={props.que[2]}
          >
            <Typography component="span">
              האם העומס של המערכת שונה בהרמה ושילוח (הנח שמשקל המחלצים זהה)?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              התשובה הנכונה הינה א': <br />
              א. כן, בהרמה החיכוך פועל נגד התנועה ומוסיף כוח נגד המערכת. יותר
              עומס על המערכת
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          dir="rtl"
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            className={props.que[3]}
          >
            <Typography component="span">למה נועד הסופג אנרגיה?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              התשובה הנכונה הינה ב':
              <br />
              ב. לכשול ולהתריע לפני שהמערכת כושלת בעומס גדול מדי
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          dir="rtl"
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            aria-controls="panel4d-content"
            id="panel4d-header"
            className={props.que[4]}
          >
            <Typography component="span">
              מה עושים כאשר מכונת ההרמה לא פועלת חשמלית בתחילת ההרמה?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              התשובה הנכונה הינה ג':
              <br />
              ג. לוחץ על כפתור ההפעלה, בודק חיבור סוללה ובמידת הצורך מחליף סוללה
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          dir="rtl"
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            aria-controls="panel5d-content"
            id="panel5d-header"
            className={props.que[5]}
          >
            <Typography component="span">
              מה עושים כאשר מכונת ההרמה עובדת אבל לא מצליחה להרים את המחלץ
              והפצוע?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              התשובה הנכונה הינה ד':
              <br />
              ד. מנסים לעזור למכונה על ידי משיכת חבל על מנת להתגבר על החיכוך
              הדינמי
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          dir="rtl"
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            aria-controls="panel6d-content"
            id="panel6d-header"
            className={props.que[6]}
          >
            <Typography component="span">
              למה יש בחצובה גלגלת בגובה מותן?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              התשובה הנכונה הינה ב':
              <br />
              ב. שאם החצובה תקרוס הנפילה של המחלץ תהיה יותר קטנה
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          dir="rtl"
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            aria-controls="panel7d-content"
            id="panel7d-header"
            className={props.que[7]}
          >
            <Typography component="span">
              לאיזה גלגלת נחבר את מכונת ההרמה אקטסייף?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              התשובה הנכונה הינה ד':
              <br />
              ד. לגלגלת הגבוהה ,ככה נוריד יותר חיכוך וההרמה תהיה קלה יותר
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <button id="end-btn2" onClick={() => setFinish2("true")}>
        סיימתי
      </button>
    </div>
  );
}

export default Answers;

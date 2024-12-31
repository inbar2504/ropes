import React, { useState, Component, useRef } from "react";
import './Study.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

// import { ScratchCard } from "next-scratchcard";

function Study() {
//   const [show, setShow] = useState("start");
  const [pageNum,setPageNum] = useState(0);
  
  return (
    <div className="study">
 {pageNum === 0 ? ( 
  <>
    <div className="study-page">
      <h1>חבלים 3</h1>
      
      <h2>"מעבר להרמה"</h2>
      <h3>דפדפו כדי לראות את סדר הפעולות</h3>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide>
          <div className="text">
            <b>
            שלב 1
          <br />
          מעבר מהורדה להרמה עם אקטסייף
            </b>
        
          <br /><br />
          א. לאחר ווידוא חיבורים וקבלת אישור מהמחלץ התחל בהרמה באמצעות מכונת ההרמה(אקטסייף) בחבל הראשי

          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className="text">
            <b>
            שלב 1
          <br />
          מעבר מהורדה להרמה עם אקטסייף
            </b>
        
          <br /><br />
        ב. יש לצמצם את החבל המשני דרך המאסטרו על ידי משיכת החבל הרפוי
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text">
        <b>
            שלב 1
          <br />
          מעבר מהורדה להרמה עם אקטסייף
            </b>
        
          <br /><br />
      ג. במידה ובחבל המשני קיים אמצעי חיכוך פתוח,יש לצמצם את האמצעי באופן שיבטיח החזקה של החבל ביד בכל רגע נתון
          </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="text-small">
        <b>
            שלב 1
          <br />
          מעבר מהורדה להרמה עם אקטסייף
            </b>
                    
             <br /><br />
            ד. במקרה של עצירת המכוננ בשל עומס מקסימלי , יש לפעול לפי הסדר הבא<br >
            </br>

            בדוק כי שום אמצעי לא נתקע ושהחבלים עוברים בשפת המצוק על מקטיני חיכוך,אם לא,תקן את הבעיה והמשך להרים
            <br ></br>

            אם לא זיהית בעיה ניתן לעזור למכונה למשוך בחלקים הקשים על ידי משיכת החבל המתוח לתוך המכונה, או על ידי חיבור טיבלוק ורולקליפ לחבל ההרמה המתוח ולעזור למכונה בהרמה על ידי משיכת החבל ברווח כוח 3
            <br />

            &#x2714;&#x2714;אל תעזור למכונה לאורך כל ההרמה אלא רק בקטעים הקשים

          </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="text">
        <b>
            שלב 2
          <br />
          מעבר מהורדה להרמה עם מאסטרו
            </b>
        
          <br /><br />
א. ניתן לעבור לצמצום/הרמה ללא רווח כוח על ידי משיכת החבל לכיוון הגוגל-מוגל
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text">
        <b>
            שלב 2
          <br />
          מעבר מהורדה להרמה עם מאסטרו
            </b>
        
          <br /><br />
          ב. בניית רווח כוח-חבר על כל חבל טיבלוק ולכל טיבלוק חבר טבעת + סופג אנרגיה 
          + רולקליפ
          </div>
         
        </SwiperSlide>
        <SwiperSlide>
        <div className="text">
        <b>
            שלב 2
          <br />
          מעבר מהורדה להרמה עם מאסטרו
            </b>
        
          <br /><br />
          ג. שני המשלוחים ימשכו כל אחד את החבל שלו בתיאום מושלם על מנת להרים ברווח כוח 6(רווח כוח 3 על כל חבל=רווח כוח 6 על כל המערכת)
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text">
        <b>
            שלב 2
          <br />
          מעבר מהורדה להרמה עם מאסטרו
            </b>
        
          <br /><br />
          ד. לא נדרש לאחוז בידית של המאסטרו במהלך ההרמה
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text">
        <b>
            שלב 2
          <br />
          מעבר מהורדה להרמה עם מאסטרו
            </b>
        
          <br /><br />
ה. המאסטרו ננעל אוטומטית
          </div>
        </SwiperSlide>
      </Swiper>
     
      </div>
      <div className="move-btns">
      <button className="last-btn" disabled>הקודם</button>
      <button className="next-btn" onClick={() => setPageNum(1)}>הבא</button> 
    </div>
    </>
     ) : (
            <></>
          )}
          {pageNum === 1 ? (
             <>
             <div className="study-page">
               <h1>חבלים 3</h1>
               
               <h2>"מעבר קשר בהרמה - מכונת הרמה"</h2>
               <h3>דפדפו כדי לראות את סדר הפעולות</h3>
               <Swiper
                 pagination={{
                   type: 'fraction',
                 }}
                 navigation={true}
                 modules={[Pagination, Navigation]}
                 className="mySwiper"
                 
               >
                 <SwiperSlide>
                   <div className="text">
                     <b>
                     שלב 1
                     </b>
                   <br /><br />
                   משוך את החבל עד הגעת הקשר למכונה
                   </div>
                   </SwiperSlide>
                 <SwiperSlide>
                 <div className="text">
                     <b>
                     שלב 2
                     </b>
                   <br /><br></br>
                  הרכב טיבלוק עם חבל עיגון מעבר לקשר ונעל אותו באיטלקי (יש להשאיר מספיק מקום בין הקשר והטיבלוק לחיבור של המכונה)
                   </div>
                 </SwiperSlide>
                 <SwiperSlide>
                   <div className="text">
                 <b>
                     שלב 3
                   <br />             
                     </b>
                 
                   <br /><br />
                  שלח מעט באותו החבל והעבר את המתח אל הטיבלוק
                   </div>
         
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="text">
                 <b>
                     שלב 4
                     </b>  
                     <br />       
                      <br /><br />
                    נתק את המכונה וחבר אותה מחדש מעבר לקשר בעזרת הארכה ע"י סלינג
                   </div>
         
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="text">
                 <b>
                     שלב 5
                   <br />
                     </b>
                   <br /><br />
                  העבר מתח אל המכונה תוך כדי הרמה, נתק את הטיבלוק והמשך בהרמה
                   </div>
                 </SwiperSlide>
               </Swiper>
               </div>
               <div className="move-btns">
                  <button className="last-btn" onClick={() => setPageNum(0)}>הקודם</button>
                  <button className="next-btn" onClick={() => setPageNum(2)}>הבא</button> 
             </div>
             </>
          ) : (
            <></>
          )}
            {pageNum === 2 ? (
             <>
             <div className="study-page">
               <h1>חבלים 3</h1>
               
               <h2>"מעבר קשר בהרמה - רווח כוח"</h2>
               <h3>דפדפו כדי לראות את סדר הפעולות</h3>
               <Swiper
                 pagination={{
                   type: 'fraction',
                 }}
                 navigation={true}
                 modules={[Pagination, Navigation]}
                 className="mySwiper"
                 
               >
                 <SwiperSlide>
                   <div className="text">
                     <b>
                     שלב 1
                     </b>
                   <br /><br />
                   משוך את החבלים עד הגעת הקשר לטיבלוק
                   </div>
                   </SwiperSlide>
                 <SwiperSlide>
                 <div className="text">
                     <b>
                     שלב 2
                     </b>
                   <br /><br></br>
                  העבר את הטיבלוק מעבר לקשר ומשוך בחבלים עד להגעת הקשר למאסטרו
                   </div>
                 </SwiperSlide>
                 <SwiperSlide>
                   <div className="text">
                 <b>
                     שלב 3
                   <br />             
                     </b>
                 
                   <br /><br />
                 הרכב טיבלוק חדש מעבר לקשר וחבר אותו בחבל עיגון לסדרן באיטלקי
                   </div>
         
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="text">
                 <b>
                     שלב 4
                     </b>  
                     <br />       
                      <br /><br />
                    העבר את המתח מהמאסטרו לטיבלוק. וודא כי הטיבלוק נמצא בעומס
                   </div>
         
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="text">
                 <b>
                     שלב 5
                   <br />
                     </b>
                   <br /><br />
                  נתק את המאסטרו וחבר אותו מחדש אחרי הקשר באמצעות סלינג 2 רץ שמחובר לסדרן
                   </div>
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="text">
                 <b>
                     שלב 6
                   <br />
                     </b>
                   <br /><br />
                  נתק את הטיבלוק והמשך בהרמה. ניתן לדחות את המעבר קשר בגלגלת הדינמית בעזרת הזזת הטיבלוק
                   </div>
                 </SwiperSlide>
               </Swiper>
               </div>
               <div className="move-btns">
                  <button className="last-btn" onClick={() => setPageNum(1)}>הקודם</button>
                  <button className="next-btn" onClick={() => setPageNum(3)}>הבא</button> 
             </div>
             </>
          ) : (
            <></>
          )}
     {pageNum === 3 ? (
             <>
             <div className="study-page">
               <h1>חבלים 3</h1>
               
               <h2>"גולש אחרון"</h2>
               <h3>דפדפו כדי לראות את סדר הפעולות</h3>
               <Swiper
                 pagination={{
                   type: 'fraction',
                 }}
                 navigation={true}
                 modules={[Pagination, Navigation]}
                 className="mySwiper"
                 
               >
                 <SwiperSlide>
                   <div className="text">
                     <b>
                     שלב 1
                     </b>
                   <br /><br />
                   בהגעה לנקודת אל חזור ,תבנה עמדת שילוח
                   </div>
                   </SwiperSlide>
                 <SwiperSlide>
                 <div className="text">
                     <b>
                     שלב 2
                     </b>
                   <br /><br></br>
                 שלח את הכווח הראשוני (לוחם אחד או שניים) לתחתית המצוק עם הציוד הרלוונטי
                   </div>
                 </SwiperSlide>
                 <SwiperSlide>
                   <div className="text-small">
                 <b>
                     שלב 3
                   <br />             
                     </b>
                 
                   <br /><br />
                :גלישה עצמאית של שאר הכוח
                <br />
                א. גלישה עצמאית בזוגות- כל אחד מבני הזוג יתחבר לחבל אחד בתצורה של גלישה באבטחה עצמית (כולל פרוסיק אבטחה) וסלינג שמחבר בין רתמות הזוג ומהווה את המאה אחוז השני
                <br />
                ב. ירידה עם כל הציוד-יש לוודא כי כל גולש יורד עם תיק תלוי על רצועת הארכה זאת בכדי שלא יישאר ציוד מיותר לגולשים האחרונים
                   </div>
         
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="text-small">
                 <b>
                     שלב 4
                     </b>  
                     <br />       
                      <br /><br />
                   :בניית נוהל גולש אחרון
                   <br />
                   א. שלב זה יחל לאחר שנשארו רק שלושה או ארבעה לוחמים ליד העגינות
                   <br />
                   ב. עומס הגולשים לפני האחרון יהיה על החבל ולא על השקול בעת הגלישה
                   <br />
                   <b>?איך נבצע את זה</b>
                   <br />
                   נעביר את החבל הראשי מאחורי/בתוך עגינה של מאה אחוז ונחבר אותו בקשר פלמי לחבל המשני
                  ונפרק את אמצעי החיכוך שהיו נעולים ונשלח את הגוגל מוגל כולו למטה
                   </div>
         
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="text-small">
                 <b>
                     שלב 5
                   <br />
                     </b>
                   <br /><br />
                 בצע בדיקת משיכה ומעבר הקשר את שפת המצוק
                 <br />
                 א. לוחם שמשמש כבקר התחתון מחבר בקשר פלמי את שתי הקצוות שלמטה
                 <br />
                 ב. באמצעות הלוחם שמשמש כבקר התחתון בצעו בדיקה שהקשר פלמי העליון המחבר את שני החבלים עובר את שפת המצוק ומקמו אותו חזרה בסמוך לבולטים
                 <br />
                 ג. על הלוחם שמשמש בקר תחתון לסמן בקשר את חבל המשיכה
                   </div>
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="text">
                 <b>
                     שלב 6
                   <br />
                     </b>
                   <br /><br />
                  ניצור לולאה אלפינית על שני החבלים ונחבר אותה לשקול (האלפיני צריך להיות בבוש על מנת שהעומס יהיה על העיגון הסופי)
                   </div>
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="text">
                 <b>
                     7 שלב 
                   <br />
                     </b>
                   <br /><br />
                  חבר את הגולשים בסבב לפני אחרון ובצעו בדיקה הדדית
                   </div>
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="text">
                 <b>
                     שלב 8
                   <br />
                     </b>
                   <br /><br />
                 לאחר שהגולשים בסבב הלפני אחרון מגיעים למטה , על אחד מהם להישאר ולהיות בקר תחתוו
                   </div>
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="text">
                 <b>
                     שלב 9
                   <br />
                     </b>
                   <br /><br />
                 על הגולשים האחרונים לנתק את הלולאה האלפינית , לפרק את העגינה הקודמת ולאסוף את הציוד
                   </div>
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="text">
                 <b>
                     שלב 10
                   <br />
                     </b>
                   <br /><br />
                  על הגולשים האחרונים לבצע סריקה אחרונה על המצוק
                   </div>
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="text-small">
                 <b>
                     שלב 11
                   <br />
                     </b>
                   <br /><br />
                 על הגולשים האחרונים להתחבר לחבלים אחרי הקשר הפלמי באופן של גלישה באבטחה עצמית וחיבור עם סלינג ביניהם באותו אופן של שאר הגולשים הקודמים
                 <br />
                 <p className="red-text">דגש:ישנה עדיפות לירידה אחרונה של שני לוחמים ולא לוחם בודד על מנת לצמצם מקום לטעויות אנוש ולבצע בדיקה הדדית, זאת למרות ששניהם תלויים על חבל בודד של 100%</p>
                   </div>
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="text">
                 <b>
                     שלב 12
                   <br />
                     </b>
                   <br /><br />
                  בצעו בדיקה הדדית וגלוש למטה
                   </div>
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="text">
                 <b>
                     שלב 13
                   <br />
                     </b>
                   <br /><br />
                  בהגעתך אל הקרקע התנתק מהחבלים
                   </div>
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="text">
                 <b>
                     שלב 14
                   <br />
                     </b>
                   <br /><br />
                 פתח את הפלמי התחתון, לא את הקשר האלפיני
                   </div>
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="text">
                 <b>
                     שלב 15
                   <br />
                     </b>
                   <br /><br />
                  משוך בחבל המסומן בקשר אלפיני תוך כדי התרחקות מהמצוק ופתיחת זווית
                   </div>
                 </SwiperSlide>
               </Swiper>
               </div>
               <div className="move-btns">
                  <button className="last-btn" onClick={() => setPageNum(2)}>הקודם</button>
                  <button className="next-btn" onClick={() => setPageNum(4)}>הבא</button> 
             </div>
             </>
          ) : (
            <></>
          )}
           {pageNum === 4 ? (
             <>
             <div className="study-page">
               <h1>חבלים 3</h1>
               
               <h2>מצא את הפריט החסר מעמדת הגלישה</h2>
               <img src="" alt="תמונה של עמדת גלישה" />
               {/* <ScratchCard finishPercent={30} brushSize={20}>
                  <img
                    height={150}
                    width={300}
                    src="https://images.pexels.com/photos/14686115/pexels-photo-14686115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  />
              </ScratchCard> */}
               </div>
               <div className="move-btns">
                  <button className="last-btn" onClick={() => setPageNum(3)}>הקודם</button>
                  <button className="next-btn" onClick={() => setPageNum(5)}>הבא</button> 
             </div>
             </>
          ) : (
            <></>
          )}
  
    </div>
   
  )
};

export default Study

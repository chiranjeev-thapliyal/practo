import React, { useState } from "react";
import "./Slider.css";
//import "../icoons/ionicons.min.css";

export default function Slider() {
  const [position, setPosition] = useState(0);
  let arr = [
    "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg",
    "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg",
    "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg",
    "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg",
    "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg",
    "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg",
    "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-doctor@2x.jpg",
    "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-pediatrician@2x.jpg",
    "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gastroenterologist@2x.jpg",
  ];
  let commentArr = [
    [
      "Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.",
      "Amit Sharma",
      "ion-ios7-person-outline",
    ],
    [
      "Very easy to book,maintain history. Hassle free from older versions of booking appointment via telephone.. Thanks Practo for making it simple.",
      "Jyoti Bhatia",
      "ion-ios7-person-outline",
    ],
    [
      "Very good app. Well thought out about booking/rescheduling/canceling an appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way",
      "Avinash Kumar",
      "ion-ios7-person-outline",
    ],
  ];

  const handleNext = () => {
    if (position >= 0 && position < 5) {
      setPosition(position + 1);
    }
  };
  const handlePrev = () => {
    if (position >= 1) {
      setPosition(position - 1);
    }
  };

  return (
    <div className="main">
      <div style={{display: "flex",
    justifyContent: "space-between"}}>
        <div>
          <h2 style={{margin:0,fontWeight:700,fontSize:"24px"}}>Book an appointment of in clinic appointment</h2>
          <div style={{fontSize: "16px",
    lineHeight: 1.5,marginTop:"5px"}}>Find experienced doctors all accross the specialities</div>
        </div>
      </div>
      <div className="slider" style={{marginTop:"20px"}}>
        <div className="slide" style={{ left: `${position * -310}px` }}>
          {arr.map((el) => (
            <div className="item">
              <img src={el} alt="img" />
            </div>
          ))}
        </div>
        <button
          className="ctrl-btn pro-prev"
          onClick={handlePrev}
          style={{ visibility: position === 0 && "hidden" }}
        >
          <i className="ion-ios7-arrow-back" />
        </button>
        <button
          className="ctrl-btn pro-next"
          onClick={handleNext}
          style={{ visibility: position === 4 && "hidden" }}
        >
          <i className="ion-ios7-arrow-forward" />
        </button>
      </div>
      
    </div>
  );
}

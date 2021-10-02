import React from "react";
import style from "./howitworks.module.css";

const Howitworks = () => {
  return (
    <div className={style.howitworks}>
      <div className={style.howitworkswrap}>
        <h2 className={style.howitworkshead}>How it works</h2>
        <div className={style.howitworkssection}>
          <div className={style.eachprop}>
            <div className={style.eachpropimg}>
              <img
                src="https://img.icons8.com/wired/64/000000/chat.png"
                alt="m"
                style={{ width: "60px", height: "60px" }}
                className={style.icon}
              />
            </div>
            <div className={style.eachpropcontent}>
              <p className={style.desc}>Select a speciality or symptom</p>
            </div>
          </div>
          <div className={style.eachprop}>
            <div className={style.eachpropimg}>
              <img
                src="https://img.icons8.com/wired/64/000000/chat.png"
                alt="m"
                style={{ width: "60px", height: "60px" }}
                className={style.icon}
              />
            </div>
            <div className={style.eachpropcontent}>
              <p className={style.desc}>
                Audio/ video call with a verified doctor
              </p>
            </div>
          </div>
          <div className={style.eachprop}>
            <div className={style.eachpropimg}>
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M0 17V1C0 0.734784 0.107099 0.48043 0.297739 0.292893C0.488379 0.105357 0.746942 0 1.01655 0H7.11583C8.42851 0.000432942 9.69011 0.500439 10.6365 1.39532C11.5828 2.2902 12.1405 3.51055 12.1928 4.80084C12.2451 6.09112 11.7879 7.35128 10.917 8.31742C10.046 9.28357 8.82889 9.88078 7.52042 9.984L12.1986 14.586L16.5626 10.293L18 11.707L13.636 16L18 20.293L16.5626 21.707L12.1986 17.414L7.83453 21.707L6.39713 20.293L10.7612 16L4.66189 10H2.03309V17H0ZM2.03309 8H7.11583C7.92464 8 8.70033 7.68393 9.27225 7.12132C9.84417 6.55871 10.1655 5.79565 10.1655 5C10.1655 4.20435 9.84417 3.44129 9.27225 2.87868C8.70033 2.31607 7.92464 2 7.11583 2H2.03309V8Z" fill="black"/>
</svg>

            </div>
            <div className={style.eachpropcontent}>
              <p className={style.desc}>
                Get a digital prescription & a free follow-up
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;

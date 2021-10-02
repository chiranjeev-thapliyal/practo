import React from "react";
import style from "./black.module.css"
const Black=()=>{
    return (
        <div className={style.trustmetrics}>
            <div className={style.black}>
                <div className={style.wrap} >
                <div className={style.eachmetric}>
                  <p className={style.metriccount}>2,00,000+</p>
                  <p className={style.namemetric}>Happy Users</p>
                </div>
                <div className={style.eachmetric}>
                  <p className={style.metriccount}>20,000+</p>
                  <p className={style.namemetric}>Verified Doctors</p>
                </div>
                <div className={style.eachmetric}>
                  <p className={style.metriccount}>25+</p>
                  <p className={style.namemetric}>Specialities</p>
                </div>
                <div className={style.eachmetric}>
                  <p className={style.metriccount}>4.5 / <sub>5</sub></p>
                  <p className={style.namemetric}>App Rating</p>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Black
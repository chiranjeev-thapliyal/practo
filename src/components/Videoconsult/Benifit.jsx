import React from "react";
import style from "./benifit.module.css";

const Benifit = () => {
  return (
    <div className={style.benifitsection}>
      <div className={style.wrap}>
        <h2 className={style.heading}>Benefits of Online Consultation</h2>
        <div className={style.card}>
          <div className={style.grid} id="benifit_card">
            <div className={style.gridcont}>
              <div className={style.gridcont1}>
                <h3 className={style.gridcont1head}>
                <img src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png" alt="a"
                className={style.tick}
                />
                  Consult Top Doctors 24x7
                </h3>
                <p className={style.gridcont1para}>
                  Connect instantly with a 24x7 specialist or choose to video
                  visit a particular doctor.
                </p>
              </div>
            </div>
            <div className={style.gridcont}>
              <div className={style.gridcont1}>
                <h3 className={style.gridcont1head}>
                <img src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png" alt="a"
                className={style.tick}
                />
                  Convenient and Easy
                </h3>
                <p className={style.gridcont1para}>
                Start an instant consultation within 2 minutes or do video consultation at the scheduled time.
                </p>
              </div>
            </div>
            <div className={style.gridcont}>
              <div className={style.gridcont1}>
                <h3 className={style.gridcont1head}>
                <img src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png" alt="a"
                className={style.tick}
                />
                  100% Safe Consultations
                </h3>
                <p className={style.gridcont1para}>
                Be assured that your online consultation will be fully private and secured.
                </p>
              </div>
            </div>
            <div className={style.gridcont}>
              <div className={style.gridcont1}>
                <h3 className={style.gridcont1head}>
                <img src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png" alt="a"
                className={style.tick}
                />
                Similar Clinic Experience
                </h3>
                <p className={style.gridcont1para}>
                Experience clinic-like consultation through a video call with the doctor. Video consultation is available only on the Practo app.
                </p>
              </div>
            </div>
            <div className={style.gridcont}>
              <div className={style.gridcont1}>
                <h3 className={style.gridcont1head}>
                <img src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png" alt="a"
                className={style.tick}
                />
                  Free Follow-up
                </h3>
                <p className={style.gridcont1para}>
                Get a valid digital prescription and a 7-day, free follow-up for further clarifications.
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default Benifit;

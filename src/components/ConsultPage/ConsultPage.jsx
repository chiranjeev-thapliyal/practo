import React from "react";
import styles from "./ConsultPage.module.css";

export default function ConsultPage() {
  return (
    <div className={styles.ConsultPageSection}>
      <div>
        <div className={styles.flexBox}>
          <div className={styles.flex2}>
            <div className={styles.flex12}>
              <div className={styles.flex12Header}>
                <i className={`ion-home ${styles.icons}`}></i>
                <span>
                  <h3 style={{ display: "inline" }}>In-clinic Appointment</h3>
                </span>
              </div>
              <div className={styles.dateTimeDiv}>
                <div className={styles.dateTime}>
                  <div>
                    <i
                      className={`ion-ios7-calendar-outline ${styles.icons}`}
                    ></i>
                    <span>
                      On <strong>Sep 30, 2021</strong>
                    </span>
                  </div>
                  <div className={styles.dateTimeChange}>
                    Change Date & Time
                  </div>
                </div>
                <div className={styles.dateTime}>
                  <i className={`ion-ios7-clock-outline ${styles.icons}`}></i>
                  <span>
                    At <strong>11:41 PM</strong>
                  </span>
                </div>
              </div>
              <div className={styles.posterDiv}>
                <div className={styles.posterDivImgBox}>
                  <img
                    src="https://images1-fabric.practo.com/practices/1272173/smile-care-orthodontic-center-and-multispeciality-dental-clinic-bangalore-5de10d366e186.jpg"
                    alt="img"
                  ></img>
                </div>
                <div className={styles.posterDetail}>
                  <h3>
                    Smile Care Orthodontic Center and Multispeciality Dental
                    Clinic
                  </h3>
                  <h4>
                    first floor, shridhar building, Devasthanagalu, Balagere
                    road, varthur, Bangalore
                  </h4>
                  <a href="//maps.google.com/maps?f=d&amp;daddr=12.938853,77.74081(Smile%20Care%20Orthodontic%20Center%20and%20Multispeciality%20Dental%20Clinic)&amp;hl=undefined">
                    Get Directions
                  </a>
                </div>
              </div>
              <div className={styles.posterDiv}>
                <div className={styles.posterDivImgBox}>
                  <img
                    src="https://images1-fabric.practo.com/practices/1272173/smile-care-orthodontic-center-and-multispeciality-dental-clinic-bangalore-5de10d366e186.jpg"
                    alt="img"
                  ></img>
                </div>
                <div className={styles.posterDetail}>
                  <h3>
                    Smile Care Orthodontic Center and Multispeciality Dental
                    Clinic
                  </h3>
                  <h4>
                    first floor, shridhar building, Devasthanagalu, Balagere
                    road, varthur, Bangalore
                  </h4>
                  <a href="//maps.google.com/maps?f=d&amp;daddr=12.938853,77.74081(Smile%20Care%20Orthodontic%20Center%20and%20Multispeciality%20Dental%20Clinic)&amp;hl=undefined">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.flex21}>
            <div className={styles.flex1}>
              <div className={styles.PatientHeader}>
                <h2>Patient Details</h2>
                <div>This in-clinic appointment is for:</div>
              </div>
              <div>
                <div
                  style={{ borderBottom: "none" }}
                  className={styles.inputNameBox}
                >
                  <i
                    className={`ion-ios7-circle-filled ${styles.iconCercle}`}
                  ></i>
                  <input type="text" placeholder="name" />
                </div>
                <div className={styles.inputNameBox}>
                  <i
                    className={`ion-ios7-circle-filled ${styles.iconCercle}`}
                  ></i>
                  <input type="text" placeholder="Someone Else" />
                </div>
                <div className={styles.followingDiv}>
                  Please provide following information about Patient
                </div>
              </div>
              <div>
                <div>
                  <div className={styles.fullNameLabel}>Full Name *</div>
                  <div className={styles.inputFullNameBox}>
                    <input type="text" placeholder="name" />
                  </div>
                </div>
                <div>
                  <div className={styles.fullNameLabel}>Mobile *</div>
                  <div
                    className={`${styles.inputFullNameBox} ${styles.mobileInput}`}
                  >
                    <input type="text" placeholder="Someone Else" />
                    <i
                      className={`ion-ios7-locked-outline ${styles.iconCercle}`}
                    ></i>
                  </div>
                </div>
              </div>
              <div className={styles.inputFullNameBox}>
                <input type="text" />
              </div>
              <div
                className={`${styles.inputFullNameBox} ${styles.confirmDiv}`}
              >
                <div className={styles.confirmBox}>Confirm</div>
              </div>
              <div className={styles.mobileNumberDiv}>
                Updates will be sent to +919443504410
              </div>
              <div className={styles.termsDiv}>
                By booking this appointment, you agree to Practo’s Terms and
                Conditions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import styles from "./ConsultPage.module.css";

let doctor = {
  id: 1,
  img: "https://images1-fabric.practo.com/doctor/450655/dr-raghu-t-narayan-5d7b138476661.jpg/thumbnail",
  date: "Sep 30,2021",
  time: "At 11:41 PM",
  name: "Dr. Mahantesh",
  titleMain: "BDS, MDS - Orthodontics and Dentofacial",
  titleOther: "Dentist, Orthodontist, Cosmetic/Aesthetic",
};

export default function ConsultPage() {
  const [data, setData] = useState(doctor);
  const [name, setName] = useState("");
  const [someone, setSomeOne] = useState("");
  const [logIn, setLogIn] = useState(true);
  const [numb, setNumb] = useState(0);
  const [otp, setOtp] = useState(false);

  // useEffect(() => {
  //   getData();
  // }, []);
  // let getData = async () => {
  //   let res = await axios.get("http://localhost:3001/consult");
  //   setData(res.data[0]);
  // };

  const handleChangeName = (e) => {
    setName(e.target.value);
    setSomeOne("");
  };
  const handleChangeSomeOne = (e) => {
    console.log(e.target.value);
    setSomeOne(e.target.value);
    setName("");
  };

  const handleConfirm = () => {
    console.log(numb);
    if (numb === 0) return;
    setOtp(true);
    setLogIn(true);
  };

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
                      On <strong>{data.date}</strong>
                    </span>
                  </div>
                  <div className={styles.dateTimeChange}>
                    Change Date & Time
                  </div>
                </div>
                <div className={styles.dateTime}>
                  <i className={`ion-ios7-clock-outline ${styles.icons}`}></i>
                  <span>
                    At <strong>{data.time}</strong>
                  </span>
                </div>
              </div>
              <div className={styles.posterDiv}>
                <div className={styles.posterDivImgBox}>
                  <img src={data.img} alt={data.name}></img>
                </div>
                <div className={styles.posterDetail}>
                  <h3>{data.name}</h3>
                  <h4>{data.titleMain}</h4>
                  <h4>{data.titleOther}</h4>
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
            {!logIn && (
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
                      className={`${
                        name !== ""
                          ? "ion-ios7-circle-filled"
                          : "ion-ios7-circle-outline"
                      } ${styles.iconCercle}`}
                    ></i>
                    <input
                      value={name}
                      onChange={handleChangeName}
                      type="text"
                      placeholder="name"
                    />
                  </div>
                  <div className={styles.inputNameBox}>
                    <i
                      className={`${
                        someone !== ""
                          ? "ion-ios7-circle-filled"
                          : "ion-ios7-circle-outline"
                      } ${styles.iconCercle}`}
                    ></i>
                    <input
                      value={someone}
                      onChange={handleChangeSomeOne}
                      type="text"
                      placeholder="Someone Else"
                    />
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
                      onChange={(e) => {
                        console.log(e.target.value);
                        setNumb(e.target.value);
                      }}
                      className={`${styles.inputFullNameBox} ${styles.mobileInput}`}
                    >
                      <input type="text" placeholder="Mobile" />
                      <i
                        className={`ion-ios7-locked-outline ${styles.iconCercle}`}
                      ></i>
                    </div>
                  </div>
                </div>
                {/* <div className={styles.inputFullNameBox}>
                <input type="text" />
              </div> */}
                <div
                  onClick={handleConfirm}
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
            )}
            {logIn && !otp && (
              <div className={styles.flex1}>
                <div className={styles.PatientHeader}>
                  <h2>Enter your moblie number</h2>
                  <div className={styles.fullNameLabel}>Mobile *</div>
                  <div
                    className={`${styles.inputFullNameBox} ${styles.mobileInput}`}
                  >
                    <input
                      // value={numb === 0 ? null : numb}
                      type="number"
                      placeholder="Mobile"
                      onChange={(e) => {
                        console.log(e.target.value);
                        setNumb(e.target.value);
                      }}
                    />
                    <i
                      className={`ion-ios7-locked-outline ${styles.iconCercle}`}
                    ></i>
                  </div>
                </div>
                <div className={styles.mobileNumberDiv}>
                  1. You will receive an OTP shortly
                </div>
                <div className={styles.mobileNumberDiv}>
                  2. We will send appointment related communication on this
                  number
                </div>
                <div
                  onClick={handleConfirm}
                  className={`${styles.inputFullNameBox} ${styles.confirmDiv}`}
                >
                  <div className={styles.confirmBox}>Confirm</div>
                </div>
              </div>
            )}
            {otp && (
              <div className={styles.wholeOtpBox}>
                <div className={`${styles.flex1} ${styles.flex5}`}>
                  <div className={`${styles.otpBox} ${styles.PatientHeader}`}>
                    <div className={styles.mobileNumberDiv}>
                      We have sent you an OTP on
                    </div>
                    <h2>+91 {numb}</h2>
                    <div className={styles.mobileNumberDiv}>OTP</div>
                    <div
                      className={`${styles.inputFullNameBox} ${styles.mobileInput} ${styles.inputOtpBox}`}
                    >
                      <input
                        type="text"
                        placeholder="Please enter the 6 digit OTP here"
                        onChange={(e) => setNumb(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={styles.resendOtpBox}>
                    <div className={styles.mobileNumberDiv}>
                      Still not received otp?<span> Get via call</span>
                    </div>
                    <div className={styles.mobileNumberDiv}>Resend OTP</div>
                  </div>
                  <div
                    className={`${styles.inputFullNameBox} ${styles.confirmDiv}`}
                  >
                    <div onCLick={handleConfirm} className={styles.confirmBox}>
                      Continue to booking
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

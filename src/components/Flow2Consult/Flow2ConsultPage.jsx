// import React from "react";
// import styles from "./Flow2ConsultPage.module.css";

// export default function Flow2ConsultPage() {
//   return (
//     <div className={styles.ConsultPageSection}>
//       <div>
//         <div className={styles.flexBox}>
//           <div className={styles.flex2}>
//             <div className={styles.flex12}>
//               <div className={styles.flex12Header}>
//                 <i className={`ion-home ${styles.icons}`}></i>
//                 <span>
//                   <h3 style={{ display: "inline" }}>In-clinic Appointment</h3>
//                 </span>
//               </div>
//               <div className={styles.dateTimeDiv}>
//                 <div className={styles.dateTime}>
//                   <div>
//                     <i
//                       className={`ion-ios7-calendar-outline ${styles.icons}`}
//                     ></i>
//                     <span>
//                       On <strong>{data.date}</strong>
//                     </span>
//                   </div>
//                   <div className={styles.dateTimeChange}>
//                     Change Date & Time
//                   </div>
//                 </div>
//                 <div className={styles.dateTime}>
//                   <i className={`ion-ios7-clock-outline ${styles.icons}`}></i>
//                   <span>
//                     At <strong>{data.time}</strong>
//                   </span>
//                 </div>
//               </div>
//               <div className={styles.posterDiv}>
//                 <div className={styles.posterDivImgBox}>
//                   <img src={data.img} alt={data.name}></img>
//                 </div>
//                 <div className={styles.posterDetail}>
//                   <h3>{data.name}</h3>
//                   <h4>{data.titleMain}</h4>
//                   <h4>{data.titleOther}</h4>
//                 </div>
//               </div>
//               <div className={styles.posterDiv}>
//                 <div className={styles.posterDivImgBox}>
//                   <img
//                     src="https://images1-fabric.practo.com/practices/1272173/smile-care-orthodontic-center-and-multispeciality-dental-clinic-bangalore-5de10d366e186.jpg"
//                     alt="img"
//                   ></img>
//                 </div>
//                 <div className={styles.posterDetail}>
//                   <h3>
//                     Smile Care Orthodontic Center and Multispeciality Dental
//                     Clinic
//                   </h3>
//                   <h4>
//                     first floor, shridhar building, Devasthanagalu, Balagere
//                     road, varthur, Bangalore
//                   </h4>
//                   <a href="//maps.google.com/maps?f=d&amp;daddr=12.938853,77.74081(Smile%20Care%20Orthodontic%20Center%20and%20Multispeciality%20Dental%20Clinic)&amp;hl=undefined">
//                     Get Directions
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className={styles.flex21}>
//             <div className={styles.flex1}>
//               <div className={styles.PatientHeader}>
//                 <h2>Enter your moblie number</h2>
//                 <div className={styles.fullNameLabel}>Mobile *</div>
//                 <div
//                   className={`${styles.inputFullNameBox} ${styles.mobileInput}`}
//                 >
//                   <input
//                     // value={numb === 0 ? null : numb}
//                     type="number"
//                     placeholder="Mobile"
//                     onChange={(e) => {
//                       console.log(e.target.value);
//                       setNumb(e.target.value);
//                     }}
//                   />
//                   <i
//                     className={`ion-ios7-locked-outline ${styles.iconCercle}`}
//                   ></i>
//                 </div>
//               </div>
//               <div className={styles.mobileNumberDiv}>
//                 1. You will receive an OTP shortly
//               </div>
//               <div className={styles.mobileNumberDiv}>
//                 2. We will send appointment related communication on this number
//               </div>
//               <div
//                 onClick={handleConfirm}
//                 className={`${styles.inputFullNameBox} ${styles.confirmDiv}`}
//               >
//                 <div className={styles.confirmBox}>Confirm</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

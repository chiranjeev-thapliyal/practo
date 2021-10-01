import React, { useState } from "react";
import styles from "./FindDoctors.module.css";
import SearchBar from "../SearchBar/Searchbar";
import cart from "./shopping-cart-simple.png";
import record from "./notebook.png";
import article from "./book-open.png";

export default function FindDoctors() {
  const [position, setPosition] = useState(0);
  const [position1, setPosition1] = useState(0);

  let arr = [
    {
      img: "https://www.practostatic.com/fit/e5df380532ad97807c4b2e414a458cc292b1a53e",

      title: "6 Weight Loss Tips to Follow",
      spanDoctors: "Dr. Yogesh Kumar, Alternative Medicine",
      likeSpan: "309 Likes● 36501Views",
    },
    {
      img: "https://www.practostatic.com/fit/1da3446c1aca11295e4ea403b52fe8bc80b4c7c1",

      title: "6 Weight Loss Tips to Follow",
      spanDoctors: "Dr. Yogesh Kumar, Alternative Medicine",
      likeSpan: "309 Likes● 36501Views",
    },
    {
      img: "https://www.practostatic.com/fit/6147081e5f5d09a285ee9904bfdd26bf96998d47",

      title: "6 Weight Loss Tips to Follow",
      spanDoctors: "Dr. Yogesh Kumar, Alternative Medicine",
      likeSpan: "309 Likes● 36501Views",
    },
    {
      img: "https://www.practostatic.com/fit/1248187c88fa20fb11116f02779b39d48c3c9b3d",

      title: "6 Weight Loss Tips to Follow",
      spanDoctors: "Dr. Yogesh Kumar, Alternative Medicine",
      likeSpan: "309 Likes● 36501Views",
    },
    {
      img: "https://www.practostatic.com/fit/eb77fb7edc101645ee455f878299f68f8a3766c4",

      title: "6 Weight Loss Tips to Follow",
      spanDoctors: "Dr. Yogesh Kumar, Alternative Medicine",
      likeSpan: "309 Likes● 36501Views",
    },
  ];

  const commentArr1 = [
    {
      starIcon: "ion-ios7-star",
      summary:
        " Very helpful. Far easier than doing same things oncomputer. Allows quick and easy search with speedybooking. Even maintains history of doctors visited.",
      personIcon: "ion-ios7-person-outline",
      name: "Amit Sharma",
    },
    {
      starIcon: "ion-ios7-star",
      summary:
        "Boon for patients.God bless who made this app.I would not recover so soon if this app would not be there. Feedback- Practo has doctor for common disease or complications.It should focus on those complications which is uncommon because it is hard to find suitable doctor in some cases like Varicocele,Esinophill count increase",
      personIcon: "ion-ios7-person-outline",
      name: "Anoop Kumar",
    },
    {
      starIcon: "ion-ios7-star",
      summary:
        "Very good app. Well thought out about booking/rescheduling/cancelling an appointment. Also Doctor's feedbac k mechanism is good and describes all the basics in good way.",
      personIcon: "ion-ios7-person-outline",
      name: "Avinash Kumar",
    },
    {
      starIcon: "ion-ios7-star",
      summary:
        "Very easy to use, user interface is amazing. The option Where I can book a cab truly showed how much this app-makers cares about the patient's health👍",
      personIcon: "ion-ios7-person-outline",
      name: "Anjani Sirivella",
    },
  ];
  const handleNext1 = () => {
    if (position1 >= 0 && position1 < 4) {
      setPosition1(position1 + 1);
    }
  };

  const handleNext = () => {
    if (position >= 0 && position < 3) {
      setPosition(position + 1);
    }
  };
  const handlePrev1 = () => {
    if (position1 >= 1) {
      setPosition1(position1 - 1);
    }
  };
  const handlePrev = () => {
    if (position >= 1) {
      setPosition(position - 1);
    }
  };

  return (
    <>
      <div className={styles.headerDiv}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <h1>Your home for health</h1>
          </div>
          <div className={styles.headerSmallTitle}>
            <h3>Find and Book</h3>
          </div>
          <div className={styles.headerSearchBar}>
            <div>
              <SearchBar />
              <div className={styles.headerPopularSearchDiv}>
                <div className={styles.headerPopularSearch}>
                  <span>Popular searches:</span>
                  <span href="/">Dermatologist</span>
                  <span href="/">Pediatrician</span>
                  <span href="/">Gynecologist/Obstetrician</span>
                  <span href="/">Other</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerIconDiv}>
        <div>
          <div className={styles.headerIcon}>
            <div>
            <svg className={`${styles.icons}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8478 7.07227H17.6956V8.23798H18.8478V15.2323H17.4598C17.1636 15.7855 16.6147 16.1831 15.9674 16.2711V16.5338L15.5646 16.2894H9.14501C9.29266 16.3591 9.45724 16.398 9.63065 16.398H13.5036L17.1196 18.5936V16.398H18.8478C19.4832 16.398 19.9999 15.8752 19.9999 15.2323V8.23798C19.9999 7.59509 19.4832 7.07227 18.8478 7.07227ZM8.47852 15.2336V8.23673C8.47852 8.23715 8.47852 8.23757 8.47852 8.23798V15.2323C8.47852 15.2327 8.47852 15.2331 8.47852 15.2336Z" fill="white"/>
            <path d="M16.8256 4H4.53618C3.68898 4 3 4.68898 3 5.53618V14.7533C3 15.6005 3.68898 16.2894 4.53618 16.2894H6.84045V19.1828L11.6618 16.2894H16.8256C17.6728 16.2894 18.3618 15.6005 18.3618 14.7533V5.53618C18.3618 4.68898 17.6728 4 16.8256 4ZM16.8256 14.7533H11.2362L8.37663 16.4684V14.7533H4.53618V5.53618H16.8256V14.7533Z" fill="white"/>
            <path d="M6.84033 7.84033H14.5213V9.37651H6.84033V7.84033ZM6.84033 10.9127H12.217V12.4489H6.84033V10.9127Z" fill="white"/>
            </svg>
            
              <div>Consult with a doctor</div>
            </div>
            <div>
              <img src={cart} alt="cart" className={styles.icons} />
              <div>Order Medicines</div>
            </div>
            <div>
              <img src={record} className={styles.icons} alt="records" />
              <div>View medical records</div>
            </div>
            <div>
              <div>
                <i className={`ion-beaker ${styles.icons}`}></i>
                <span
                  style={{
                    background: "yellow",
                    color: "black",
                    padding: "2px 3px",
                    marginLeft: "3px",
                    borderRadius: "1px",
                  }}
                >
                  New
                </span>
              </div>
              <div>Book test</div>
            </div>
            <div>
              <img src={article} alt="articles" className={styles.icons} />
              <div>Read articles</div>
            </div>
            <div>
              <i className={`ion-briefcase ${styles.icons}`}></i>
              <div>For healthcare providers</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondPage}>
        <div className={styles.secondPageSubject}>
          <div className={styles.secondPageFlexbox}>
            <div className={styles.flex1}>
              <div>
                <div className={styles.flex1Heading}>
                  <h2>Safety of your data is our</h2>
                  <h2>top priority.</h2>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Multi-level security checks</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Multiple data backups</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Stringent data privacy policies</span>
                  </div>
                </div>
                <div className={styles.readMoreBox}>
                  <a href="/">Read more</a>
                </div>
              </div>
            </div>
            <div className={styles.flex2}>
              <div>
                <div>
                  <img
                    src="//www.practostatic.com/web-assets/home/assets/images/security_1.4f45ac92aba979dac915f864df632d90.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.iconBox}>
            <div>
              <img
                src="//www.practostatic.com/web-assets/home/assets/images/security_2.654a7085bfa74c726f26b64edaafd9a5.png"
                alt="img"
              />
              <div>
                <p>256-bit</p>
                <p>encryption</p>
              </div>
            </div>
            <div>
              <img
                src="//www.practostatic.com/web-assets/home/assets/images/security_3.a73921ca6e980ed186518d7cb0ce64bf.png"
                alt="img"
              />
              <div>
                <p>ISO 27001</p>
                <p>certified</p>
              </div>
            </div>
            <div>
              <img
                src="//www.practostatic.com/web-assets/home/assets/images/security_4.216e25d35038f0e7f6d8a514727fa67a.png"
                alt="img"
              />
              <div>
                <p>HIPAA</p>
                <p>compliant data centers</p>
              </div>
            </div>
            <div>
              <img
                src="//www.practostatic.com/web-assets/home/assets/images/security_5.cf6e04c57178071a67c219b43066ffcf.png"
                alt="img"
              />
              <div>
                <p>DSCI</p>
                <p>member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thirdPage}>
        <div className={styles.secondPageSubject}>
          <div className={styles.secondPageFlexbox}>
            <div className={styles.flex1}>
              <div style={{ position: "relative" }}>
                <div className={styles.flex1Heading}>
                  <h2 styles={{ display: "inline" }}>
                    Instant appointment with doctors.
                    <strong>Guaranteed.</strong>
                  </h2>
                  <div className={styles.flex1Heading2ndH2}></div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>100,000 Verified doctors</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>3M+ Patient recommendations</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>25M Patients/year</span>
                  </div>
                </div>
                <div className={`${styles.readMoreBox} ${styles.readMoreBox2}`}>
                  <a href="/">Find me the right doctor</a>
                </div>
                <div style={{ position: "relative" }}>
                  <div className={styles.testimonials}>
                    <div
                      className={styles.slide1}
                      style={{
                        left: `${position1 * -460}px`,
                      }}
                    >
                      {commentArr1.map((el) => (
                        <div key={el.name} className={styles.testimonialseach}>
                          <div className={styles.starsDiv}>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                          </div>
                          <div>{el.summary}</div>
                          <div>
                            <div className={styles.profileIcon}>
                              <i className={el.personIcon}></i>
                            </div>
                            <span>{el.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    className={`${styles["ctrl-btnTest"]} ${styles["pro-prevTest"]} ${styles["ctrl-btnTestWhite"]}`}
                    onClick={handlePrev1}
                    style={{ visibility: position1 === 0 && "hidden" }}
                  >
                    <i className="ion-chevron-left" />
                  </button>
                  <button
                    className={`${styles["ctrl-btnTest"]} ${styles["pro-next-Test"]} ${styles["ctrl-btnTestWhite"]}`}
                    onClick={handleNext1}
                    style={{ visibility: position1 === 3 && "hidden" }}
                  >
                    <i className="ion-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.flex2}>
              <div>
                <div>
                  <video autoPlay loop muted>
                    <source
                      type="video/webm"
                      src="//www.practostatic.com/web-assets/home/assets/videos/appointment.700ce682eaec91bf93b6574cb8f09cd0.webm"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.iconBox}>
            <a href="/"> </a>
            <a href="/"> </a>
            <a href="/"> </a>
            <a href="/"> </a>
            <a href="/"> </a>
            <a href="/"> </a>
          </div>
        </div>
      </div>

      <div className={styles.fourthPage}>
        <div className={styles.secondPageSubject}>
          <div className={styles.secondPageFlexbox}>
            <div className={styles.flex2}>
              <div>
                <div>
                  <video autoPlay loop muted>
                    <source
                      src="//www.practostatic.com/web-assets/home/assets/videos/consult.099446892618434cc8a038d7844c4380.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
              </div>
            </div>
            <div className={`${styles.flex1} ${styles.flex12}`}>
              <div>
                <div className={styles.flex1Heading}>
                  <h2 styles={{ display: "inline" }}>
                    Skip the waiting room.<strong>Consult with a doctor</strong>
                  </h2>
                  <div className={styles.flex1Heading2ndH2}></div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Fees starting at <span className="rupees_symbol">₹</span> 99</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Verified doctors respond in 5 minutes</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>100% Private and confidential</span>
                  </div>
                </div>
                <div className={styles.spanBox}>
                  <div className={`${styles.readMoreBox}`}>
                    <a href="/">Consult now</a>
                  </div>
                  <i
                    className={`ion-ios7-circle-filled ${styles.cercleIcon}`}
                  ></i>
                  <span>55629 doctors online</span>
                </div>
                <div style={{ position: "relative" }}>
                  <div className={styles.testimonials}>
                    <div
                      className={styles.slide1}
                      style={{
                        left: `${position1 * -460}px`,
                      }}
                    >
                      {commentArr1.map((el, indx) => (
                        <div key={indx} className={styles.testimonialseach}>
                          <div className={styles.starsDiv}>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                          </div>
                          <div>{el.summary}</div>
                          <div>
                            <div className={styles.profileIcon}>
                              <i className={el.personIcon}></i>
                            </div>
                            <span>{el.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    className={`${styles["ctrl-btnTest"]} ${styles["pro-prevTest"]}`}
                    onClick={handlePrev1}
                    style={{ visibility: position1 === 0 && "hidden" }}
                  >
                    <i className="ion-chevron-left" />
                  </button>
                  <button
                    className={`${styles["ctrl-btnTest"]} ${styles["pro-next-Test"]}`}
                    onClick={handleNext1}
                    style={{ visibility: position1 === 3 && "hidden" }}
                  >
                    <i className="ion-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eighthPage}>
        <div className={styles.secondPageSubject}>
          <h2 className={styles.secondPageSubjectHeading}>
            Read top articles from health experts
          </h2>
          <div className={styles.secondPageSubjectData}>
            <div className={styles.slider}>
              <div
                className={styles.slide}
                style={{ left: `${position * -350}px` }}
              >
                {arr.map((el, indx) => (
                  <div key={indx} className={styles.item}>
                    <div className={styles.imageBox}>
                      <img src={el.img} alt="img" />
                    </div>
                    <div className={styles.detailBox}>
                      <h2>{el.title}</h2>
                      <span>{el.spanDoctors}</span>
                      <br />
                      <span>{el.likeSpan}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              className={`${styles["ctrl-btn"]} ${styles["pro-prev"]}`}
              onClick={handlePrev}
              style={{ visibility: position === 0 && "hidden" }}
            >
              <i className="ion-ios7-arrow-back" />
            </button>
            <button
              className={`${styles["ctrl-btn"]} ${styles["pro-next"]}`}
              onClick={handleNext}
              style={{ visibility: position === 2 && "hidden" }}
            >
              <i className="ion-ios7-arrow-forward" />
            </button>
          </div>
          <div className={styles.secondPageSubjectReadmoreDiv}>
            <div className={styles.secondPageSubjectReadmore} style={{}}>
              More articles
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fifthPage}>
        <div className={styles.secondPageSubject}>
          <div className={styles.secondPageFlexbox}>
            <div className={styles.flex1}>
              <div>
                <div className={styles.flex1Heading}>
                  <h2>Get all your medicines.</h2>
                  <h2>
                    <strong>Everytime. On time.</strong>
                  </h2>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Guaranteed availability</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Over 130,000+ genuine medicines</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Home delivery in 24hrs </span>
                  </div>
                </div>
                <div className={styles.readMoreBox4}>
                  <div
                    className={`${styles.readMoreBox} ${styles.readMoreBox3}`}
                  >
                    <a href="/">Order Medicines</a>
                  </div>
                  <i
                    className={`ion-ios7-circle-filled ${styles.cercleIcon} ${styles.cercleIcon2}`}
                  ></i>
                  <div className={styles.spanBox2}>
                    <span>
                      Last order delivered<span> 2 mins </span>
                      ago
                      <br /> in Andheri West, Mumbai
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.flex2}>
              <div>
                <div>
                  <img
                    src="//www.practostatic.com/web-assets/home/assets/images/order.c84fc07b0be8a7e8d4db432eb4e606a2.svg"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sixthPage}>
        <div className={styles.secondPageSubject}>
          <div className={styles.secondPageFlexbox}>
            <div className={styles.flex2}>
              <div>
                <div>
                  <img
                    src="//www.practostatic.com/web-assets/home/assets/images/record.bfc5241f9b15340a32c98eb360d1005a.svg"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className={styles.flex1}>
              <div>
                <div className={styles.flex1Heading}>
                  <h2>All your medical records</h2>
                  <h2>In one secure app.</h2>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>256-bit end to end encryption</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Records are accessible only by you</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Access your records across 8000+ centers</span>
                  </div>
                </div>
                <div className={`${styles.readMoreBox} ${styles.readMoreBox5}`}>
                  <a href="/">Find out more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondPage}>
        <div className={styles.secondPageSubject}>
          <div className={styles.secondPageFlexbox}>
            <div className={styles.flex1}>
              <div>
                <div className={styles.flex1Heading}>
                  <h2>Leading Healthcare Providers.</h2>
                  <h2>Trust us for Business</h2>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Get seen by 25M+ patients on Practo.com</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>
                      The most advanced software for clinics and hospitals
                    </span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>
                      State of the art business analytics for enterprises
                    </span>
                  </div>
                </div>
                <div className={styles.spanBox}>
                  <div className={styles.readMoreBox}>
                    <a href="/">Learn more</a>
                  </div>
                </div>
                <div style={{ position: "relative" }}>
                  <div className={styles.testimonials}>
                    <div
                      className={styles.slide1}
                      style={{
                        left: `${position1 * -460}px`,
                      }}
                    >
                      {commentArr1.map((el, indx) => (
                        <div key={indx} className={styles.testimonialseach}>
                          <div className={styles.starsDiv}>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                          </div>
                          <div>{el.summary}</div>
                          <div>
                            <div className={styles.profileIcon}>
                              <i className={el.personIcon}></i>
                            </div>
                            <span>{el.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    className={`${styles["ctrl-btnTest"]} ${styles["pro-prevTest"]}`}
                    onClick={handlePrev1}
                    style={{ visibility: position1 === 0 && "hidden" }}
                  >
                    <i className="ion-chevron-left" />
                  </button>
                  <button
                    className={`${styles["ctrl-btnTest"]} ${styles["pro-next-Test"]}`}
                    onClick={handleNext1}
                    style={{ visibility: position1 === 3 && "hidden" }}
                  >
                    <i className="ion-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
            <div className={`${styles.flex2} ${styles.flex4}`}>
              <div>
                <div>
                  <img
                    src="//www.practostatic.com/web-assets/home/assets/images/provider.c4a3d938da109434de6ce3a9046bbf42.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.seventhPage}>
        <div className={styles.secondPageSubject}>
          <div className={styles.secondPageFlexbox}>
            <div className={styles.flex2}>
              <div>
                <div>
                  <img
                    src="//www.practostatic.com/web-assets/home/assets/images/download.a9fb5307ceed47df0af1f39cf4e95519.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className={styles.flex1}>
              <div>
                <div className={styles.flex1Heading}>
                  <h2>Download the Practo app</h2>
                  <h2>In one secure app.</h2>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Book appointments and lab tests</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Order medicines</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Consult doctors online</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Set medicine reminders</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Store health records</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Read health tips</span>
                  </div>
                </div>
                <div className={`${styles.appDownloadIcons}`}>
                  <a href="https://app.appsflyer.com/com.practo.fabric?pid=web&amp;amp;c=homepage">
                    <img
                      src="//www.practostatic.com/web-assets/home/assets/images/google_badge.bfeb9607baa4c7c0b6897ad8c3adbebe.png"
                      alt="Get it on Google Play"
                    />
                  </a>
                  <a href="https://app.appsflyer.com/id953772015?pid=web&amp;amp;c=homepage">
                    <img
                      src="//www.practostatic.com/web-assets/home/assets/images/appstore_badge.adc5473a4cad8e6b9d80f29477b68ae5.png"
                      alt="Get it on App Store"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import style from "./appdownload.module.css"

const Appdownload=()=>{
    return (
  <div className={style.appdownlod}>
      <div className={style.grey}>
                <div className={`${style.appdownlodsection} content`} id="download">
              <figure className={style.fig}>
                 <img  className={style.img} src="https://www.practo.com/consult/static/images/app-download-banner-web.png" alt="" />
              </figure>
              <div className={style.content} id="downloadsub2"> 
                  <h2 className={style.head}>Download the Practo app</h2>
                  <p  className={style.desc}>Get ₹200 HealthCash</p>
                  <ul  className={style.ul} >
                      <li className={style.li}>
                      <i className="ion-checkmark-round" style={{marginRight:"10px",color:"#14bef0"}}></i>
                      Video consult with Doctors
                      </li>
                      <li className={style.li}>
                      <i className="ion-checkmark-round" style={{marginRight:"10px", color:"#14bef0"}}></i>
                      Live medicine order tracking
                      </li>
                      <li className={style.li}>
                      <i className="ion-checkmark-round" style={{marginRight:"10px",color:"#14bef0"}}></i>
                      Exclusive healthcare packages
                      </li>
                      <li className={style.li}>
                      <i className="ion-checkmark-round" style={{marginRight:"10px",color:"#14bef0"}}></i>
                      Ask free questions
                      </li>
                  </ul>
                  <div className={style.applinkwrap}>
                      <h4 className={style.heading}>Get the link to download the app</h4>
                      <form  className={style.form}>
                          <div className={style.inpcontainer}>
                              <div className={style.code} >
                                  +91
                              </div>
                              <input type="tel" placeholder="Enter phone number" className={style.inp} />
                          </div>
                          <button className={style.btn}>Send app link</button>
                      </form>
                  </div>
                  <div className={style.storylink}>
                      <a href="/doctor" className={style.link}>
                          <img src="https://www.practo.com/consult/static/images/google-play-badge.png" alt="p" style={{width:"130px",height:"40px",    marginRight: "15px"}} />
                      </a>
                      <a href="/doctor" className={style.link}>
                          <img src="https://www.practo.com/consult/static/images/app-store-badge.png" alt="a" style={{width:"130px",height:"40px",marginRight:"15px"}}/>
                      </a>
                  </div>
              </div>

          </div>

      </div>

  </div>
    )
}

export default Appdownload
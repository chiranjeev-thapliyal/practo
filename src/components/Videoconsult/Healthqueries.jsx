import React from "react";
import style from "./healthqueries.module.css"

const Healthqueries=()=>{
    return (
        <div className={style.section}>
            <div className={style.wrap}>
                <h2 className={style.heading}>Health Queries</h2>
                  <div className={style.healthquaries}>
                    <div className={style.healthquarie}>
                        <div className={style.quaryheader}>
                        <b>After covid recovered</b>
                         <div> 13 views</div>
                        </div>
                        <p className={style.quarycontent}>
                            <span>After covid recovered some time anixtey Strees ghbrat problems negative thoughts... </span>
                           <a  className={style.link} href="/video=consult">Read more</a>
                        </p>
                    </div>
                    <div className={style.healthquarie}>
                        <div className={style.quaryheader}>
                        <b>About covid vaccine</b>
                         <div> 319 views</div>
                        </div>
                        <p className={style.quarycontent}>
                            <span>Hi i have 50days old baby and I am breastfeeding mother can i take covid vaccine...  </span>
                           <a  className={style.link} href="/video=consult">Read more</a>
                        </p>
                    </div>
                    <div className={style.healthquarie}>
                        <div className={style.quaryheader}>
                        <b>Irritated skin after applying lemon juic</b>
                         <div> 15 views</div>
                        </div>
                        <p className={style.quarycontent}>
                            <span>Hi,
 Without knowing the adverse side effect I applied lemon juice on my face ye...  </span>
                           <a  className={style.link} href="/video=consult">Read more</a>
                        </p>
                    </div>
                    <div className={style.footer}>
                       <p style={{    margin: "2px 0 10px"}}>
                           <small style={{fontSize: "10px"}}>
                           Last updated: 
                           02 Oct 2021 | 6:52 PM 
                           </small>
                       </p>
                       <span className={{cursor: "pointer",
    fontWeight: "700"}}>
                           view more
                       </span>
                    </div>
                    
                  </div>
            </div>

        </div>
    )
}

export default  Healthqueries
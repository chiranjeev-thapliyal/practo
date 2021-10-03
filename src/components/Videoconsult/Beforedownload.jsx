import React from "react";
import style from "./beforedownload.module.css"

const Beforedownload=()=>{
     return (
         <div className={style.lvl1}>
             <div className={style.lvl2}>
             <div className={style.lvl3} id="beforedownload">
                 <div className={style.sub1}>
                     <h2 className={style.head1}>Still delaying your health concerns ?</h2>
                     <p className={style.para1}>Connect with India's top doctors online</p>
                 </div>
                 <div className={style.sub2}>
           <a href="/doctor" className={style.link} >Consult now</a>
                 </div>
                 
             </div >

             </div>

         </div>
     )
}

export default Beforedownload
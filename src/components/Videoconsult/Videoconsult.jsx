import React from "react";
import Appdownload from "./Appdownload";
import Beforedownload from "./Beforedownload";
import Benifit from "./Benifit";
import Black from "./black";
import CommonConcerns from "./CommonConcerns";
import Healthqueries from "./Healthqueries";
import Howitworks from "./Howitwoks";
import Offers from "./Offers";
import OurDoctors from "./OurDoctors";
import Pinkheader from "./Pinkheader";
import Specialities from "./Specialities";
import Faq from "./Faq"

const Videoconsult=()=>{
    return(
       <div className="bg-white">
       <Pinkheader/>
       <Specialities />
       <CommonConcerns />
        <Offers />
        <OurDoctors />
       <Howitworks/>
       <Black/>
       <Benifit/>
       <Faq/>
       <Healthqueries/>
       <Beforedownload/>
       <Appdownload/>
        </div>
    )
}
export default Videoconsult
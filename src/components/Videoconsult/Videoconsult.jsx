import React from "react";
import Appdownload from "./Appdownload";
import Beforedownload from "./Beforedownload";
import Benifit from "./Benifit";
import Black from "./black";
import CommonConcerns from "./CommonConcerns";
import Howitworks from "./Howitwoks";
import Offers from "./Offers";
import OurDoctors from "./OurDoctors";
import Pinkheader from "./Pinkheader";
import Specialities from "./Specialities";

const Videoconsult=()=>{
    return(
       <>
       <Pinkheader/>
       <Specialities />
       <CommonConcerns />
        <Offers />
        <OurDoctors />
       <Howitworks/>
       <Black/>
       <Benifit/>
       <Beforedownload/>
       <Appdownload/>
        </>
    )
}
export default Videoconsult
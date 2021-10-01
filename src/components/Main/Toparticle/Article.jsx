import React from "react";
import Section from "../Section/Section";
import Wrapper from "./articlestyle";


const Article=()=>{
    return(
        <Section style={{marginBottom:"60px"}}>
            <Wrapper>
                <div className="sub">
                    <div className="sub1">
                        <div className="sub2" >
                           <div className="subcard">
                              <div className="subcard1">
                                  <h3 className="head1">Read top articles from health experts</h3>
                                  <div style={{marginTop:"5px",fontSize:"14px"}}>Health articles that keep you informed about good health practices and achieve your goals.</div>
                                  <button className="btn">See all articles</button>

                              </div>
                           </div>
                           <div className="subcard">
                           <div className="subcard2">
                                  <div style={{width:"200px",height:"200px"}}>
                                      <span>
                                          <img src="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910" alt="" style={{bordeRadius: "4px",
                                                 verticalAlign: "bottom",
                                                   width: "100%",
                                                 height: "100%"}} />
                                      </span>
                                  </div>
                                  <div style={{marginTop: "15px",color: "#358588",textTransform: "uppercase",fontSize: "12px",
                                   lineHeight: "1.25",fontWeight:700}}>Coronavirus</div>
                                   <div style={{marginTop:"5px"}}>
                                       <h6 style={{margin:"0px",fontSize: "16px",
                                         lineHeight: "1.5",fontWeight:700}}>12 Coronavirus Myths and Facts That You Should Be Aware Of</h6>
                                   </div>
                                   <div style={{marginTop: "10px",fontSize:"14px"}}>Dr. Diana Borgio</div>
                           </div>
                           </div>
                           <div className="subcard">
                           <div className="subcard2">
                                  <div style={{width:"200px",height:"200px"}}>
                                      <span>
                                          <img src="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c" alt="" style={{bordeRadius: "4px",
                                                 verticalAlign: "bottom",
                                                   width: "100%",
                                                 height: "100%"}} />
                                      </span>
                                  </div>
                                  <div style={{marginTop: "15px",color: "#358588",textTransform: "uppercase",fontSize: "12px",
                                   lineHeight: "1.25",fontWeight:700}}>Vitamins and Supplements</div>
                                   <div style={{marginTop:"5px"}}>
                                       <h6 style={{margin:"0px",fontSize: "16px",
                                         lineHeight: "1.5",fontWeight:700}}>Eating Right to Build Immunity Against Cold and Viral Infections</h6>
                                   </div>
                                   <div style={{marginTop: "10px",fontSize:"14px"}}>Dr. Diana Borgio</div>
                           </div>

                           </div>
                        </div>
                    </div>
                </div>
            </Wrapper>

        </Section>
    )
}

export default Article
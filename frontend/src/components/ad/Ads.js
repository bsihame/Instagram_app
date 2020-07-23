import React from "react";
import healthIcon from "../../images/healthIcon.png";
import "../../CSS/Ads.css"

export default function Ads() {
 
  return(
    <div className="healthInsuranceLink">
          <div>
            <img src={healthIcon} alt="healthIcon" className="healthIcon"></img>
      
            <h4 className="adTitleAd" >Health Insurance May Be Available </h4>
          </div>
          <div>
              <p className="insuranceInfoAd" >
                Millions have recently lost their jobs and health insurance. If
                you or someone you know is looking for coverage, visit
                healthcare.gov to see who’s eligible.
              </p>
          </div>
          <div className="linkBtn">
              <a
                className="healthInsuranceLinkAn"
                href={"https://www.healthcare.gov/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to healthcare.gov
              </a>
          </div>
    </div >
  )
}
import React, { useState } from 'react'
import useWindowSize from '../use window size/UseWindowSize'
import './socialMedia.css'

function SocialMedia() {
    const { width } = useWindowSize();
    const [socialMedia, setSocialMedia] = useState([
        {
        
            background: "#F5F9F5",
            icon: "pi pi-tablet",
            backgroundIcon: "#52B141",
            socialName: "Show All",
            campaign: "67,124 Campaign"
        },
        {
         
            background: "#FCF4F6",
            icon: "pi pi-camera",
            backgroundIcon: "#FF285C",
            socialName: "Instagram",
            campaign: "457 Campaign"
        },
        {
            
            background: "#F5F5FA",
            icon: "pi pi-facebook",
            backgroundIcon: "#5856CE ",
            socialName: "Facebook",
            campaign: "125 Campaign"
        },
        {
            
            background: "#F5FAFA",
            icon: "pi pi-twitter",
            backgroundIcon: "#56C7CE",
            socialName: "Twitter",
            campaign: "5125 Campaign"
        }
    ])
    return (
        <div className={`${width>768?"p-grid mr container-social-media":"p-grid mr container-social-media-mobile"}`}>
            {socialMedia.map((el, i) => (
                <div className="p-col  container-button-social-media" style={{backgroundColor:`${el.background}`}} >
                    <div className=" container-icon-social-media"style={{backgroundColor:`${el.backgroundIcon}`}}>
                        <i className={`${el.icon} icon-secial-media`}></i>
                    </div>
                    <div className="container-details-social-media">
                        <span className="social-name">{el.socialName}</span>
                        <span className="campaign">{el.campaign}</span>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default SocialMedia

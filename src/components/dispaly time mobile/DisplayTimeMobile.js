import React,{useEffect,useState} from 'react'
import './displayTimeMobile.css'

function DisplayTimeMobile() {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);
    return (
        <div className="p-grid p-dir-col-rev mr container-display-time-mobile">
        <div className="p-col-12  container-text-display-time">
            <span className="title-display-time-mobile">Lorem ipsum dolor sit amet</span>
            <span><span className="subtitle1-display-time">Lorem /</span><span className="subtitle2-display-time"> Lorem ipsum dolor</span></span>
        </div>
        <div className="p-col-12 ">
            <div className=" container-date-settings">
                <div className="container-date">
                    <span className="time-display-time">{dateTime.getHours()}:{dateTime.getMinutes()}</span>
                    <span className="date-display-time">{dateTime.toLocaleDateString()}</span>
                </div>
                <div className=" container-settings-display-time">
                    <button className="settings-display-time"><i className="pi pi-spin pi-cog icon-settings-display-time"></i></button>
                </div>
            </div>
        </div>

    </div>
    )
}

export default DisplayTimeMobile

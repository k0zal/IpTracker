import React, {useContext} from 'react'
import "./Information.css"
import {Context} from "./ContextProvider"

function Information() {
const {info, loading} = useContext(Context)
    return (
        <div className="informationcontainer">
         
            <div className="informationstats">
                {info ?
                <div className="allinformation">
                    <div className="infodiv">
                    <p className="infotitles">IP ADDRESS</p>
                <p className="infotext">{info.ip}</p>
                </div>
                    
                <div className="streck"></div>

                <div className="infodiv">
                <p className="infotitles">LOCATION</p>
                <p className="infotext">{info.location.city}, {info.location.country}</p>
                
                </div>
                <div className="streck"></div>

                <div className="infodiv">
                <p className="infotitles">TIMEZONE</p>
                <p className="infotext">{info.location.timezone}</p>
                </div>

                <div className="streck"></div>
                <div className="infodiv">
                <p className="infotitles">ISP</p>
                <p className="infotext">{info.isp}</p>
                </div>

                </div>
                : <div className="loading">
                    <img src="https://zelly.se/wp-content/uploads/2021/06/loading-buffering.gif"/>
                </div>
                }
            </div>
        </div>
        
    )
}

export default Information

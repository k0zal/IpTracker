import React, {useContext, useState} from 'react'
import "./Header.css"
import searchicon from "./utilities/images/icon-arrow.svg"
import {Context} from "./ContextProvider"

function Header() {

    const {searchIp, theirIp, setTheirIp, inputRef} = useContext(Context)
    const [btn, setBtn] = useState(true)
    const formatcheck = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

function enterClick(e){
    e.preventDefault()
    console.log("hej")
    

}

    //console.log(theirIp.length)
    return (
        <div className="headercontainer">
            
            <div className="headertext">
                <p>IP Adress Tracker</p>
            </div>
            <div className="searchdiv">
            <div className="searchinput">
                
                <input type="text" onKeyPress={event => { if(event.key === "Enter" && theirIp.match(formatcheck)){searchIp(event)}}} ref={inputRef} className={theirIp.match(formatcheck) && "greenoutlined"} required value={theirIp} onChange={(e) => setTheirIp(e.target.value)} placeholder="Search for any IP adress or domain"/>
    
                </div>
                <button className="searchbutton" disabled={theirIp.match(formatcheck) ? false : true} onClick={searchIp}>
                <img src={searchicon} alt="" />
            </button>
            </div>
            
        </div>
    )
}

export default Header

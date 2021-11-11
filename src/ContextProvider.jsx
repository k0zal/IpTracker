import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
const Context = React.createContext()



function ContextProvider({children}) {
    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState()
    const [myip, setMyIp] = useState()
    const [theirIp, setTheirIp] = useState("")
    // const geoipifyApiKey = process.env.GEOIPIFY_API_KEY; //xxxxxxxx
    // const freeGeoipApiKey = process.env.FREEGEOIP_API_KEY; //xxxxxxxx
    
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=xxxxxxipAddress=`
    const inputRef = useRef(null)
    const [loc, setLoc] = useState([])

    async function firstFetch(){
        const ipRes = await fetch(`https://api.freegeoip.app/json/?apikey=xxxxxxx`)
        const ipData = await ipRes.json()

        const response = await fetch(url+ipData.ip)
        const data = await response.json()
        setInfo(data);
        setLoc([data.location.lat, data.location.lng])
        console.log(info) 
        inputRef.current.focus();
    }

    async function searchIp(e){
        e.preventDefault()
        setInfo("")
        const response = await fetch(url+theirIp)
        const settingTheirIp = await response.json()
        
            if(!settingTheirIp){
                setInfo("")
                
            }
            else{
                setInfo(settingTheirIp)
                setLoc([])
                setLoc([settingTheirIp.location.lat, settingTheirIp.location.lng])
                
            }
            
    }
 
    useEffect(() => {
    firstFetch()
    setLoading(false)
    }, [])


useEffect(() => {
   console.log(info)
    console.log(loc)
    
}, [info, loc])

    return (

            <Context.Provider value={{info, loading, searchIp, theirIp, setTheirIp, inputRef, loc}}>
            {children}
            </Context.Provider>
    )
}

export {ContextProvider, Context}

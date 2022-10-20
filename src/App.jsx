import { useState } from 'react'
import bg_header from "./assets/pattern-bg.png"
import Alert from './components/alert'
import Header from './components/header'
import Main from './components/main'

function App() {  
  
  const [alert, setAlert] = useState({ isShow: false, text: "Text default for test", type: "info" })
  const [info, setInfo] = useState({
      ip_address: "",
      location: "",
      geo: [0, 0],
      timezone: "",
      isp: ""
  })

  const geoIpify = async (api_key, ip) => {
    await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${ api_key }&ipAddress=${ ip }`).then(response => response.json()).then(data => {
      setInfo({
        ip_address: data.ip,
        location: `${ data.location.city }, ${ data.location.region }, ${ data.location.country }`,
        geo: [data.location.lat, data.location.lng],
        timezone: data.location.timezone,
        isp: data.isp
      })
    }).catch(err => {
      console.log(err)
    })
  }

  const submitForm = (e) => {
    const api_key = import.meta.env.VITE_IPIFY_API_KEY
    const ip = document.getElementById("ip-address").value
    const pattern = /^((?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])[.]){3}(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/
     
    if(ip !== "" && pattern.test(ip)) {
      geoIpify(api_key, ip)
    } else
        handleAlert("info", "Por favor ingresa una IP válida")

    e.preventDefault()
  }

  const handleAlert = (type = "", text = "") => {
    setAlert({ isShow: true, text: text, type: type })
    setTimeout(() => {
      setAlert({ ...alert, isShow: false })
    }, 4000)
  }

  return (
    <>
      <Header background={ bg_header } title="IP Address Tracker" submitForm={ submitForm } />
      <Main info={ info } />
      <Alert isShow={ alert.isShow } text={ alert.text } type={ alert.type } />
    </>
  )
}

export default App

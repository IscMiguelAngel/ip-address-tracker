import { useEffect, useState } from "react"
import Button from "./button"
import icon_button from "../assets/icon-arrow.svg"
import Input from "./input"

const Header = ({ background, title }) => {

    const [value, setValue] = useState("")
    const handleValue = (e) => {
        let ip = e.target.value.replace(/[^0-9,.]/g, '').replace(/,/g, '.').trim()
        setValue(ip)
    }

    const submitForm = (e) => {     
        const api_key = "at_VT0iShWlkGtdAuRMKikwUYHHbuANH"
        const ip = document.getElementById("ip-address").value
        const pattern = /^((?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])[.]){3}(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/
        if(ip !== "" && pattern.test(ip)) {
            useEffect(() => {
              fetch(`https://geo.ipify.org/api/v1?api_key=${ api_key }&ipAddress=${ ip }`)
              .then(response => response.json)
              .then(data => console.log(data))
            }, [])
        } else
            alert("Por favor ingresa una IP válida")

        e.preventDefault()
    }

    return (
        <header style={ { backgroundImage: `url(${ background })` } }>
            <h1>{ title }</h1>
            <form id="form" onSubmit={ submitForm }>
                <div className="form-input">
                    <Input type="text" name="ip-address" value={ value } handleValue={ handleValue } />
                    <Button type="submit" text="" icon={ icon_button } withIcon={ true } withText={ false } />
                </div>
            </form>
        </header>
    )
}

export default Header
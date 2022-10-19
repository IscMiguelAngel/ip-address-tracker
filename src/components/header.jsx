import { useState } from "react"
import Button from "./button"
import icon_button from "../assets/icon-arrow.svg"
import Input from "./input"

const Header = ({ background, title, submitForm }) => {

    const [value, setValue] = useState("")

    const handleValue = (e) => {
        let ip = e.target.value.replace(/[^0-9,.]/g, '').replace(/,/g, '.').trim()
        setValue(ip)
    }

    return (
        <header style={ { backgroundImage: `url(${ background })` } }>
            <h1>{ title }</h1>
            <form id="form" onSubmit={ submitForm }>
                <div className="form-input">
                    <Input type="text" name="ip-address" value={ value } handleValue={ handleValue } placeholder="Search for any IP address or domain" />
                    <Button type="submit" text="" icon={ icon_button } withIcon={ true } withText={ false } />
                </div>
            </form>
        </header>
    )
}

export default Header
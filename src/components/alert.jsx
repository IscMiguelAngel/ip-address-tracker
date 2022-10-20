import icon_info from "../assets/info.png"

const Alert = ({ isShow, text="Text default for test", type = "info" }) => {
    return (
        <div className={ `alert ${ type } ${ isShow ? "show" : "" }` }>
            <div className="alert-header">
                <img src={ icon_info } alt="Information" />
            </div>
            <div className="alert-body">
                <p>{ text }</p>
            </div>
            <div className="clear"></div>
        </div>
    )
}

export default Alert
const Button = ({ type, text, icon, withIcon = false, withText = true, action = false }) => {
    return (
        <button type={ type }>
            <img className={ withIcon ? "show" : "" } src={ icon } alt="Icon Button" />
            <span className={ withText ? "show" : "" }>{ text }</span>
        </button>
    )
}

export default Button
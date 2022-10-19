const Input = ({ type, name, value, handleValue, placeholder }) => {

    return (
        <input type={ type } name={ name } id={ name } value={ value } onChange={ handleValue } placeholder={ placeholder } />
    )
}

export default Input
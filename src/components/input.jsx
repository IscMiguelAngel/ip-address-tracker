const Input = ({ type, name, value, handleValue }) => {

    return (
        <input type={ type } name={ name } id={ name } value={ value } onChange={ handleValue } />
    )
}

export default Input
const InfoSection = ({ stl, title, text }) => {
    return (
        <div className={`info-section ${ stl }`}>
            <p><small>{ title }</small></p>
            <p>{ text }</p>
        </div>
    )
}

export default InfoSection
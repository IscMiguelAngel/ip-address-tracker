const Info = ({ ip, location, timezone, isp }) => {
    return (
        <div className="info">
            <div className="info-section address">
                <label htmlFor="ip-address">IP ADDRESS</label>
                <p id="ip-address">{ ip }</p>
            </div>
            <div className="info-section location">
                <label htmlFor="location">LOCATION</label>
                <p id="location">{ location }</p>
            </div>
            <div className="info-section timezone">
                <label htmlFor="timezone">TIMEZONE</label>
                <p id="timezone">{ timezone }</p>
            </div>
            <div className="info-section isp">
                <label htmlFor="isp">ISP</label>
                <p id="isp">{ isp }</p>
            </div>
        </div>
    )
}

export default Info
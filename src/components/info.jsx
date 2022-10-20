import InfoSection from "./info-section"

const Info = ({ ip, location, timezone, isp }) => {
    return (
        <div className="info">
            <InfoSection stl="ip" title="IP ADDRESS" text={ ip } />
            <InfoSection stl="location" title="LOCATION" text={ location } />
            <InfoSection stl="timezone" title="TIMEZONE" text={ timezone } />
            <InfoSection stl="isp" title="ISP" text={ isp } />
        </div>
    )
}

export default Info
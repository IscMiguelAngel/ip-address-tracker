import Info from "./info"
import Map from "./map"

const Main = ({ info }) => {
    const [lat, lng] = info.geo
    return (
        <main>
            <Info ip={ info.ip_address } location={ info.location } timezone={ info.timezone } isp={ info.isp } />
            <Map lat={ lat } lng={ lng } />
        </main>
    )
}

export default Main
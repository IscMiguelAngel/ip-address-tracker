import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useCallback, useState } from 'react';
import icon_marker from "../assets/icon-location.svg"

const Map = ({ lat, lng }) => {
    let center = {
        lat: (lat === 0) ? 25.5800846 : lat,
        lng: (lng === 0) ? -103.4953778 : lng
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center)
        map.fitBounds(bounds)
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <div id="map">
            {
                isLoaded ? (
                    <GoogleMap
                        center={ center }
                        markers={ center }
                        zoom={ 10 }
                        onLoad={ onLoad }
                        onUnmount={ onUnmount }
                        mapContainerStyle={{
                            width: "100%",
                            height: "100%"
                        }}
                        options={{
                            zoomControl: false,
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false
                        }}
                        >
                        <Marker position={ center } icon={ icon_marker } />
                        { /* Child components, such as markers, info windows, etc. */ }
                        <></>
                    </GoogleMap>
                ) : <></>
            }
        </div>
    )
}

export default Map
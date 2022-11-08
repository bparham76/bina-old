import { MapContainer, TileLayer } from "react-leaflet";
import { useRef, useEffect } from "react";
import "leaflet/dist/leaflet.css";

const MapViewer = (props) => {
    const { mapHeight, mapCenter, ...other } = props;
    const mapRef = useRef();

    useEffect(() => {
        document
            .querySelector("div.leaflet-control-attribution.leaflet-control")
            .remove();

        setTimeout(() => {
            const map = mapRef.current.leafletElement;
            map.invalidateSize();
        }, 250);
    }, []);

    return (
        <MapContainer
            style={{ height: mapHeight + "px", m: 4 }}
            ref={mapRef}
            center={mapCenter}
            zoom={14}
            scrollWheelZoom={false}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
    );
};

export default MapViewer;

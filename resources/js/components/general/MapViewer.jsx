import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

const MapViewer = (props) => {
    const { height, width, mapCenter, mobile, ...other } = props;

    const [render, setRender] = useState(true);

    useEffect(() => {
        setRender(false);
        setTimeout(() => {
            setRender(true);
        }, 10);
    }, [mobile]);

    if (!render) return;
    return (
        <MapContainer
            style={{ height: height, width: width }}
            center={mapCenter}
            zoom={12}
            {...other}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={mapCenter} />
        </MapContainer>
    );
};

export default MapViewer;

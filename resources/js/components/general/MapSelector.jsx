import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

const MapSelector = ({ mobile, data }) => {
    const [render, setRender] = useState(true);
    const { position, setPosition } = data;

    useEffect(() => {
        setRender(false);
        setTimeout(() => {
            setRender(true);
        }, 10);
    }, [mobile]);

    const MapLayer = () => {
        useMapEvents({
            click: (e) => setPosition([e.latlng.lat, e.latlng.lng]),
            contextmenu: (e) => null,
            dblclick: (e) => e.originalEvent.stopPropagation(),
        });

        return (
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        );
    };

    if (!render) return;
    return (
        <MapContainer
            style={{ height: "100%", width: "100%", zIndex: 10 }}
            center={position}
            zoom={5}
            attributionControl={false}
        >
            <MapLayer />
            <Marker position={position} />
        </MapContainer>
    );
};

export default MapSelector;

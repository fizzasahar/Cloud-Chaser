import React from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

interface MapProps {
    mapCoordinates: { lat: number; lng: number } | null;
    setMapCoordinates: React.Dispatch<React.SetStateAction<{ lat: number; lng: number } | null>>;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const LocationMarker: React.FC<{
    mapCoordinates: { lat: number; lng: number } | null;
    setMapCoordinates: React.Dispatch<React.SetStateAction<{ lat: number; lng: number } | null>>;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
}> = ({ mapCoordinates, setMapCoordinates, setLocation }) => {
    useMapEvents({
        click(e) {
            setMapCoordinates(e.latlng);
            setLocation(`Lat: ${e.latlng.lat.toFixed(2)}, Lon: ${e.latlng.lng.toFixed(2)}`);
        },
    });

    return mapCoordinates ? <Marker position={[mapCoordinates.lat, mapCoordinates.lng]} /> : null;
};

const Map: React.FC<MapProps> = ({ mapCoordinates, setMapCoordinates, setLocation }) => {
    return (
        <div className="mt-4">
            <MapContainer
                center={[20, 0]}
                zoom={2}
                style={{ height: "300px", width: "100%", borderRadius: "8px" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
                <LocationMarker
                    mapCoordinates={mapCoordinates}
                    setMapCoordinates={setMapCoordinates}
                    setLocation={setLocation}
                />
            </MapContainer>

            <p className="text-sm text-muted-foreground mt-2">
                Click anywhere on the map to drop a pin
            </p>
        </div>
    );
};

export default Map;

import React, { MutableRefObject, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMapEvent,
} from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
1;
function SetViewOnClick({
  animateRef,
}: {
  animateRef: MutableRefObject<Boolean>;
}) {
  const map = useMapEvent("click", (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: !animateRef.current || false,
    });
  });

  return null;
}

export default function RMap() {
  const animateRef = useRef(false);

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/4284/4284088.png",
    iconSize: [30, 30],
  });

  return (
    <>
      {1 + 1 == 0 ? (
        "Hola"
      ) : (
        <MapContainer
          center={{ lat: 10.488, lng: -66.8792 }}
          zoom={10}
          scrollWheelZoom={true}
          zoomAnimation
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <SetViewOnClick animateRef={animateRef} />
          <Marker position={{ lat: 10.488, lng: -66.8792 }} icon={customIcon}>
            <Popup>¡You are here!</Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  );
}

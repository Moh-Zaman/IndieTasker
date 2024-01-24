import React from "react";
import { useRef, useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

import "./GoogleMaps.css"

function Maps() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBLe7vdeUj-k2dbU8NU_YW4Kq0xwN93J3w",
      });
      const center = useMemo(() => ({ lat: 0, lng: 0 }), []);
    
    return (
    <div className="googleMaps">
        {!isLoaded ? (<h1>Loading...</h1>) : 
        (
        <GoogleMap mapContainerClassName="maps-container" center={center} zoom={3}>
        </GoogleMap>
        )}
    </div>
    );
}

export default Maps
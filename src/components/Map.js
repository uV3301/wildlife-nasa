import GoogleMapReact from "google-map-react";
import LocationMarker from "./locationMarker";
import LocationInfoBox from "./locationInfo";
import { useState } from "react";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    }
    return null;
  });
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDwiLf7G1dR_ZskhWU1Rb9siTFOBoSrPmA" }}
        defaultZoom={zoom}
        defaultCenter={center}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 40.3565228372859,
    lng: -98.19440271477669,
  },
  zoom: 5,
};

export default Map;

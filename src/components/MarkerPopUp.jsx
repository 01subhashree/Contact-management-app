import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
// import { FaMapMarkerAlt } from "react-icons/fa";

export default function MarkerPopUp({ countriesData }) {
  const customMarker = L.icon({
    iconUrl: "https://clipground.com/images/marker-icon-clipart-9.jpg",
    iconSize: [20, 25],
    iconAnchor: [15, 30],
  });

  return (
    <div>
      {countriesData?.map((country) => (
        <Marker
          icon={customMarker}
          key={country.countryInfo._id}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <div>
              <h2>{country.country}</h2>
              <p>
                Active Cases: {country.active} <br />
                Recovered Cases: {country.recovered} <br />
                Deaths: {country.deaths}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </div>
  );
}

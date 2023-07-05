import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngBoundsLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ChatsMap() {
  const center: [number, number] = [20, 40];
  const bounds: LatLngBoundsLiteral = [
    [-60, -180],
    [85, 180],
  ];

  const [countriesData, setCountriesData] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios.get("https://disease.sh/v3/covid-19/countries").then((res) => {
      const data = res.data;
      setCountriesData(data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((res) => {
        const data = res.data;

        console.log(data.cases);
      });

    //   const newChartData = {
    //     labels: Object.keys(data.cases),
    //     datasets: [
    //       {
    //         label: "Cases",
    //         data: Object.values(data.cases),
    //         fill: false,
    //         borderColor: "#f50057",
    //         tension: 0.2,
    //       },
    //     ],
    //   };

    //   setChartData(newChartData);
    // });
  }, []);

  return (
    <div className="z-[-1]">
      <h1>Chat & Map</h1>
      <MapContainer
        center={center}
        bounds={bounds}
        zoom={2}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

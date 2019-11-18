const mapboxgl = require("mapbox-gl");
const buildMarker = require('../src/marker.js')

mapboxgl.accessToken = 'pk.eyJ1IjoibGlseXRhbjEyMzI0IiwiYSI6ImNrMzRvcTF0azEwOWozY29xanVha2RxeDkifQ.r5JFrncg4OSV8lla8y6SJA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(document.getElementById(markerDomEl)).setLngLat([-74.009151, 40.705086]).addTo(map);

// const newMarker = document.addEventListerer('click', function() {
//   buildMarker(type, coordinates, map)
// })

// map.on('click', function (e) {
//   const long = e.point.x
//   const lat = e.point.y
//   // console.log('xcoord', xcoord)
//   buildMarker('restaurant', [lat,long], map)
// })

const marker = buildMarker("activity", [-73.008314, 40.713568])
marker.addTo(map)

// import things into here from marker.js

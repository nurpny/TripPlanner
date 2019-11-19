// export into index.js
const mapboxgl = require("mapbox-gl");

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};


const buildMarker = (type, coordinates) => {
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  // markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  switch (type) {
    case 'activity':
      markerDomEl.style.backgroundImage = iconURLs.activities;
      break;
    case 'hotel':
      markerDomEl.style.backgroundImage = iconURLs.hotels;
      break;
    case 'restaurant':
      markerDomEl.style.backgroundImage = iconURLs.restaurants;
      break;
    }
  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates)
}

module.exports = buildMarker

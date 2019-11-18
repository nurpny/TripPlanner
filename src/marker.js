// export into index.js
const mapboxgl = require("mapbox-gl");



const buildMarker = (type = 'hotel', coordinates) => {
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  // markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

  if (type === 'activity') {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }
  if (type === 'hotel') {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  } if (type === 'restaurant') {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }
  return new mapboxgl.Marker(document.getElementById(markerDomEl)).setLngLat(coordinates)
}

module.exports = buildMarker

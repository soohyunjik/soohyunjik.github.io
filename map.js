// Initialize and add the map
function initMap() {
  const mylatlong = { lat: 37.564388, lng: 126.980048 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: mylatlong,
  });
  const marker = new google.maps.Marker({
    position: mylatlong,
    map: map,
  });
}

window.initMap = initMap;

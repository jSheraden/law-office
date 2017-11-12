function initMap() {
  var location = { lat: 30.2364671, lng: -97.7410959 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

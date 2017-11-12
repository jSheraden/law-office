function initMap() {
  var location = { 30.2364671, -97.7410959 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

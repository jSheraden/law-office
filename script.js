function initMap() {
  var location = {};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

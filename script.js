function initMap() {
  var location = { lat: 30.236467, lng: -97.738907 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

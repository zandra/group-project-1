var yelpAPIKey = 'hPcWiF0_oAXcrl1uKlWo8UVOM2hHcJcGQSknTUFUJuGtxyBjMGg36aEUHKVhuaP3XMuTb2L6fDYuQftQkRsOYvnJmAolx50lvb8bjs16DfhgKSMJK3qaaX2DIgnUXXYx';
var yelpClientID = 'Iq2PaQBdNpdokFECCx-ZpA';

$(document).ready(function(){
  $('.munchi-intro').fadeIn();
  $('#zipInput').focus();

  $('#zipInput').on('keyup', function(event){
    if (event.keyCode === 13) {
      event.preventDefault();
      alert($('#zipInput').val());
    }
  });

  $('#currentLocation').on('click', function(){

    navigator.geolocation.getCurrentPosition(function(pos) {
      var latitude = pos.coords.latitude;
      var longitude = pos.coords.longitude;

      alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    });
  });
});

var Mapi = (function () {
  'use strict';
  // placeholder for cached DOM elements
  var DOM = {};
  /* =================== private methods ================= */
  // cache DOM elements
  function cacheDom() {
  }
  /* =================== public methods ================== */

    // leaflet access token
    const accessToken = 'pk.eyJ1IjoianlvbmdlIiwiYSI6ImNrMzFzOTJhOTAzczUzbG9iNzJkbThqNGgifQ.P8qxxnXrweFPSDAk0myObw';
    // mock response

    // get average of response businesses latitudes
    const getLatRange = mock_response.businesses
      .map( business => business.coordinates.latitude )
      .reduce( (acc, total) => acc + total) / mock_response.businesses.length;

    // get average of response businesses longitude
    const getLongRange = mock_response.businesses
      .map( business => business.coordinates.longitude )
      .reduce( (acc, total) => acc + total) / mock_response.businesses.length;
    
    let latMap = getLatRange;
    let longMap = getLongRange;
    let zoom = 13;

    var mymap = L.map('mapid',{ zoomControl: false }).setView([latMap, longMap], zoom);

    new L.Control.Zoom({ position: 'bottomright'}).addTo(mymap);

    L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${accessToken}`, {
      // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: accessToken
    }).addTo(mymap);

    function mapMe2(arr) {

    //  $('#mapid').css({ opacity: 0.6 });

    const markerCoords = arr.map( business => ([business.coordinates.latitude, business.coordinates.longitude]) );
    const popupMarkup = arr.map( business => {
      return `
      <b>${business.name}</b><br>
      ${business.location.address1}<br>
      ${business.location.address2 ? business.location.address2 + '<br>' : ''}
      ${business.location.city}, ${business.location.state} ${business.location.zip_code}<br>
      ${business.is_closed  ? '<b>Closed</b>' : '<b>Open</b>'}
      ${business.price ? 'Price: ' + '<b>'+business.price+'</b>'  : ''}
      `
    });
    
    /* ${business.rating ? 'Rating: ' + business.rating : ''} */
    for (let i=0; i<arr.length; i++) {
      var marker = L.marker([markerCoords[i][0], markerCoords[i][1]]).addTo(mymap);
      marker.bindPopup(popupMarkup[i]).openPopup();
    }
  }

  // mapMe2(mock_response.businesses);


  // main init method
  function init() {
    cacheDom();
  }
  /* =============== export public methods =============== */
  return {
    init: init,
    mymap, mymap,
    mapMe2: mapMe2
  };

}());
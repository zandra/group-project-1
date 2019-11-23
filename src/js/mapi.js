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

   
    var mymap = L.map('mapid',{ zoomControl: false }).setView([30.2672, -97.7431], 13);
    new L.Control.Zoom({ position: 'bottomright'}).addTo(mymap);


    L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${accessToken}`, {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: accessToken
    }).addTo(mymap);

    function mapMe2(arr) {

    const businesses = arr.map( business => {
      return {
        name: business.name,
        image_url: business.image_url,
        phone: business.phone,
        rating: business.rating,
        latitude: business.coordinates.latitude,
        longitude: business.coordinates.longitude,
        address1: business.location.address1,
        address2: business.location.address2,
        city: business.location.city,
        state: business.location.state,
        zip_code: business.location.zip_code,
        is_closed: business.is_closed,
        price: business.price
      }
    });
    
    const popupMarkup = arr.map( business => {
      return `
      <span class='name'><b>${business.name}</b></span><br>
      ${business.location.address1}<br>
      ${business.location.address2 ? business.location.address2 + '<br>' : ''}
      ${business.location.city}, ${business.location.state} ${business.location.zip_code}<br>
      ${business.is_closed  ? '<b>Closed</b>' : '<b>Open</b>'}
      ${business.price ? 'Price: ' + '<b>'+business.price+'</b><br>'  : ''}
      <a id='view' href'#'>Go to restaurant page</a>
      `
    });

    for (let i=0; i<arr.length; i++) {
      var marker = L.marker([businesses[i].latitude, businesses[i].longitude]).addTo(mymap);
      marker.bindPopup(popupMarkup[i]).openPopup();
    }

    mymap.on('popupopen', function() {
      $('a').on('click', function(event) {
        let selected = event.target.parentElement.firstElementChild.innerText;
        let myRestaurant = businesses.find(business => business.name === selected);
        View.viewRestaurant(myRestaurant);
        return false;
      })
    })
  }

  // main init method
  function init() {
    cacheDom();
  }
  /* =============== export public methods =============== */
  return {
    init: init,
    mymap: mymap,
    mapMe2: mapMe2
  };

}());

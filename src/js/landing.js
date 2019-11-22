// var yelpAPIKey = 'hPcWiF0_oAXcrl1uKlWo8UVOM2hHcJcGQSknTUFUJuGtxyBjMGg36aEUHKVhuaP3XMuTb2L6fDYuQftQkRsOYvnJmAolx50lvb8bjs16DfhgKSMJK3qaaX2DIgnUXXYx';
// var yelpClientID = 'Iq2PaQBdNpdokFECCx-ZpA';
var Landing = (function () {
  'use strict';
  // placeholder for cached DOM elements
  var DOM = {};
  /* =================== private methods ================= */
  // cache DOM elements
  function cacheDom() {
    DOM.$login = $('.login');
    DOM.$intro = $('.munchi-intro');
    DOM.$term = $('#termInput');
    DOM.$current = $('#currentLocation');
  }

  function landingHTMLRender() {
    $('.landingHTML').append(`<div class="container login"></div>`);
    $('.login').append(`<h4 class="loginLink">LOGIN</h4>`);
    $('.login').append(`<h4 class="signUpLink">SIGN UP</h4>`);
    $('.landingHTML').append(`<div class="container munchi-intro"></div>`);
    $('.munchi-intro').append(`<div class="row munchiRow"></div>`);
    $('.munchiRow').append(`<div class="col s5 munchiLogo"></div>`);
    $('.munchiLogo').append(`<img src="src/images/munchi-logo3.png" alt="munchi-logo">`);
    $('.munchiRow').append(`<div class="col s7 munchi-input"></div>`);
    $('.munchi-input').append(`<label>What would you like to eat?</label>`);
    $('.munchi-input').append(`<input placeholder="Food, Starbucks ,Mexican, etc..." id="termInput">`);
    $('.munchi-input').append(`<div class="whereAboutsLabel"></div>`);
    $('.whereAboutsLabel').append(`<label>Whereabout?</label>`);
    $('.munchi-input').append(`<div class="inputSearch"></div>`);
    $('.inputSearch').append(`<input placeholder="Address, Zip, or City" id="zipInput">`);
    $('.inputSearch').append(`<button type="button" id="searchButton" name="button"><img src="src/images/magnify-search.png" alt="magnify-search" id="magnifySearch" class="img-rounded center-block"></button>`);
    $('.munchi-input').append(`<h4 id="orLabel">or</h4>`);
    $('.munchi-input').append(`<a href="#" id="currentLocation">Search where I am!</a>`);
  }

  function search() {

    DOM.$term.focus();

    // event when user presses the 'enter' key
    $('#zipInput').on('keyup', function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        Calls.yelpBusinessSearch();
        // 'hide' here is a materialize class that is added with jQuery
      $('.landingHTML').addClass('hide');
      }
    });

    // event when user presses the 'search button'
    $('#searchButton').on('click', function (event) {

      event.preventDefault();
      Calls.yelpBusinessSearch();
      // 'hide' here is a materialize class that is added with jQuery
      $('.landingHTML').addClass('hide');

    });
  }

  function getLocation() {

    var openCageDataAPIKey = '3b1b0a05260b4c9aa16e12351315a923';
    var openCageDataURL = 'https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=3b1b0a05260b4c9aa16e12351315a923';

    $('#currentLocation').on('click', function () {

      // from https://medium.com/better-programming/how-to-detect-the-location-of-your-websites-visitor-using-javascript-92f9e91c095f
      if ("geolocation" in navigator) {
        // check if geolocation is supported/enabled on current browser
        navigator.geolocation.getCurrentPosition(
          function success(position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            // for when getting location is a success
            // console.log('latitude', latitude, 'longitude', longitude);

            $.ajax({
              url: `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=3b1b0a05260b4c9aa16e12351315a923`,
              method: 'GET'
            }).then(function (data) {
              const currentAddress = data.results[0].components.road;
              const currentCity = data.results[0].components.city;
              const currentState = data.results[0].components.state_code;
              // console.log(data);
              //When user clicks on #currentLocation, geolocated city and state displays in #zipInput input
              $('#zipInput').val(currentAddress + ' ' + currentCity + ', ' + currentState);
            });
            // Calls.yelpBusinessSearch(searchTerms, latitude=position.coords.latitude, );
          },
          function error(error_message) {
            // for when getting location results in an error
            console.error('An error has occured while retrieving location', error_message);
          }
        );
      } else {
        // geolocation is not supported
        // get your location some other way
        console.log('geolocation is not enabled on this browser');
      }
    });
  }

  /* =================== public methods ================== */
  // main init method
  function init() {
    landingHTMLRender();
    cacheDom();
    search();
    getLocation();
  }
  /* =============== export public methods =============== */
  return {
    init: init
  };

}());
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
        DOM.$zip = $('#zipInput');
      }

      function search() {

        DOM.$intro.fadeIn();
        DOM.$zip.focus();

        $('#zipInput').on('keyup', function (event) {
          if (event.keyCode === 13) {
            event.preventDefault();
            alert($('#zipInput').val());
          }
        });
      }

      function yelpGetResults() {
        $('#currentLocation').on('click', function() {

          navigator.geolocation.getCurrentPosition(function (pos) {
            var latitude = pos.coords.latitude;
            var longitude = pos.coords.longitude;

          
            const token = 'Bearer ERyByTkumJyy5HXbiMBTukTvSxjGzdWa6mo9HtSNsxWXK_bvwvbGeSMCfNWObo18bChYAF_p4-UpQvr1ye20KqWLiFdgRTVJ9bqWSlBOU6p8U4Yo-286thb_vGbQXXYx';
            const cors_url = 'https://cors-anywhere.herokuapp.com';
            const yelp_search_url = 'https://api.yelp.com/v3/businesses/search';
            let searchTerm = 'restaurants';
            let searchLocation = '78722';
            
            $.ajax({
              url: cors_url + '/' + yelp_search_url,
              data: {
                term: searchTerm,
                // location: searchLocation
                longitude: longitude,
                latitude: latitude
              },
              headers: {
                'Authorization': token
              },
              method: 'GET'
            }).then(function (response){
              console.log(response);
            });
            
          });
        })
      }
        /* =================== public methods ================== */
        // main init method
        function init() {
          cacheDom();
          search();
          yelpGetResults();
        }
        /* =============== export public methods =============== */
        return {
          init: init
        };

  }());
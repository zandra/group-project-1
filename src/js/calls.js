// var yelpAPIKey = 'hPcWiF0_oAXcrl1uKlWo8UVOM2hHcJcGQSknTUFUJuGtxyBjMGg36aEUHKVhuaP3XMuTb2L6fDYuQftQkRsOYvnJmAolx50lvb8bjs16DfhgKSMJK3qaaX2DIgnUXXYx';
// var yelpClientID = 'Iq2PaQBdNpdokFECCx-ZpA';
var Calls = (function () {
    'use strict';
    // placeholder for cached DOM elements
    var DOM = {};

    /* =================== private methods ================= */

      const token = 'Bearer ERyByTkumJyy5HXbiMBTukTvSxjGzdWa6mo9HtSNsxWXK_bvwvbGeSMCfNWObo18bChYAF_p4-UpQvr1ye20KqWLiFdgRTVJ9bqWSlBOU6p8U4Yo-286thb_vGbQXXYx';
      const cors_url = 'https://cors-anywhere.herokuapp.com';

    
    // cache DOM elements
    function cacheDom() {
    }

    function yelpBusinessSearch(searchTerm, searchLocation, latitude, longitude) {
      const yelp_business_search_url = 'https://api.yelp.com/v3/businesses/search';
      const auth1 = token;
      // let searchTerm = DOM.$searchLocation;
      // let searchLocation = '78722';
      
      
      $.ajax({
        url:  'https://cors-anywhere.herokuapp.com/' + yelp_business_search_url,
        data: {
          term: searchTerm,
          location: searchLocation
          // longitude: longitude,
          // latitude: latitude
        },
        headers: {
          'Authorization': auth1
        },
        method: 'GET'
      }).then(function (response){
        console.log(response);
      });
          
    }

    function yelpBusinessMatch(id) {
      const yelp_business_match_url = `https://api.yelp.com/v3/businesses/${id}`;
      const auth2 = token;

      $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/' + yelp_business_match_url,
        headers: {'Authorization': auth2},
        method: 'GET'
      }).then(function (response){
        console.log(response);
      });
    }

      // yelpBusinessSearch('coffee', '78746');
      // yelpBusinessMatch("WavvLdfdP6g8aZTtbBQHTw");
      /* =================== public methods ================== */
      // main init method
      function init() {
        cacheDom();
        yelpBusinessSearch();
        yelpBusinessMatch();
      }
      /* =============== export public methods =============== */
      return {
        init: init,
        yelpBusinessSearch: yelpBusinessSearch,
        yelpBusinessMatch: yelpBusinessMatch
      };

  }());
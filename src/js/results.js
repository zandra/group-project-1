var Results = (function () {
  'use strict';
  // placeholder for cached DOM elements
  var DOM = {};
  /* =================== private methods ================= */
  // cache DOM elements
  function cacheDom() {
    DOM.$login = $('.login');
  }
  function render(){
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  }



    function mapME() {

      // this for loop runs over the 'businesses' array and creates a 'marker' on the map for each restaurant
      for (var i = 0; i < response.businesses.length; i++) {

        // this variable is to grab the long and lat from the object that returns from the AJAX request
        var foodLocation = L.marker([response.businesses[i].coordinates.latitude, response.businesses[i].coordinates.longitude]).addTo(mymap);
        foodLocation.bindPopup(
          `${response.businesses[i].alias}<br>
          ${response.businesses[i].display_phone}<br>
          ${response.businesses[i].rating}<br>
          ${response.businesses[i].transactions}<br>
          ${response.businesses[i].categories[0].alias}<br>
          ${response.businesses[i].is_closed}<br>
        
          `

          // if (response.businesses[i].is_closed === true) {
          //     `open`
          // } else {
          //     `closed`
          // }

        ).openPopup();

      }
    }

  

   /* =================== public methods ================== */
  // main init method
  function init() {
    cacheDom();
    render();
    mapME();
  }
  /* =============== export public methods =============== */
  return {
    init: init
  };

}());
var View = (function () {
  'use strict';
  // placeholder for cached DOM elements
  var DOM = {};
  /* =================== private methods ================= */
  // cache DOM elements
  function cacheDom() {
  }
  /* =================== public methods ================== */
  function viewRestaurant(restaurant) {
    $('.results').addClass('hide');
    $('.view').append(`<h2>${restaurant.name}</h2>`);
  }

  
    // main init method
    function init() {
      cacheDom();
    }
    /* =============== export public methods =============== */
    return {
      init: init,
      viewRestaurant: viewRestaurant

    };

  }());

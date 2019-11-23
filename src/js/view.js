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

    // console.log(restaurant);
      function prettyNumber(phonenumber){
          var newNumber = phonenumber.slice(2,5) +'-' + phonenumber.slice(5,8)+ '-' + phonenumber.slice(8)
          return newNumber
        }
      $('.view').append(`<img src=${restaurant.image_url}>`);
      $('.view').append(`<h1 class=‘name’>${restaurant.name}</h1>`);
      $('.view').append(`<h3><span class=‘address’>${restaurant.address1}</span>${restaurant.address2}<br> ${restaurant.city}, ${restaurant.state}  ${restaurant.zip_code}</h3> `);
      $('.view').append(`<p><span class=‘phone’>Phone: ` + prettyNumber(`${restaurant.phone}`) + `</p>`);
      $('.view').append(`<p><span class=‘rating’>Rating: ${restaurant.rating}</p>`);
      $('.view').append(`<a href=“${restaurant.url}“> Visit Our Page!</a><br>`);
      $('.view').append(`<a class="waves-effect waves-light btn" id='results-list'> \< Back to Results</a>`);
      // $('#select-restaurant').on('click', function (event) {
      //     event.preventDefault();
      //     var inputRestaurant = $('#restaurant-input').val().trim();
      //     searchGoodInTown(inputRestaurant);
      // });

      $('#results-list').on('click', function(event) {
        event.preventDefault();
        // Calls.yelpBusinessSearch()
      })
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

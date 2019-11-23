var Results = (function () {
  'use strict';
  // placeholder for cached DOM elements
  var DOM = {};
  /* =================== private methods ================= */
  // cache DOM elements
  function cacheDom() {
    DOM.$login = $('.login');
  }

  
  function render() {
    $('.bg-image').addClass('hide');

    $('#filters').append(
      `<div class="row section">
      <div class="SearchCriteria">
        <form>
          <div id="StarterSearch">
            <div class="input-field Searchbars">
              <label for="Food_Search">What do you feel like eating?</label>
              <input type="text" id="FoodSearch">
            </div>
            <div class="input-field Searchbars">
              <label for="Location">Whereabouts do you want to eat?</label>
              <input type="text" id="Location">
            </div>
            <input type="submit" id="SearchBtn">
            <hr>
            <ul id="Search Filters" class="collapsible">
              <li>
                <div class="collapsible-header" id='price'>Price</div>
                <div class="collapsible-body">
                  <span>
                    How much are you willing to spend?
                    <br>
                    <a class="waves-effect waves-light btn" value=1>$</a>
                    <a class="waves-effect waves-light btn" value=2>$$</a>
                    <a class="waves-effect waves-light btn" value=3>$$$</a>
                    <a class="waves-effect waves-light btn" value=4>$$$$</a>
                  </span>
                </div>
              </li>
              <li>
                <div class="collapsible-header">Availability</div>
                <div class="collapsible-body">
                  <span>
                    <div id="Filter2Addon">
                      When are you going?
                      <br>
                      <button id="EatNowBtn">Now</button>
                      <br>
                      Later: <input type="text" class="timepicker">
                      <br>
                      <button id="All-dayEats">24 Hour Eats</button>
                    </div>
                  </span>
                </div>
              </li>
              <li>
                <div class="collapsible-header">Other</div>
                <div class="collapsible-body">
                  <span>
                    <div id="Filter3Addon">
                      3rd filter option goes here
                      fill out when we get a clearer image of filter options
                    </div>
                  </span>
                </div>
              </li>
              <li>
                <div class="collapsible-header">The rest of the filters</div>
                <div class="collapsible-body">
                  <span>
                    <div id="AllFilterOptions">
                      Put the rest of the filters
                    </div>
                  </span>
                </div>
              </li>
            </ul>
        </form>
      </div>
      <div class="divider"></div>
      `
      )
      
      var elems = document.querySelectorAll('.collapsible');
      $('.collapsible').collapsible();
    // var instances = M.Collapsible.init(elems, options);
  }
  
  function filters(results) {

    $('.btn').on("click", function(event){
      var priceFilter = results.filter(result => result.price === this.target.text);

      // trying to redraw the map here
      // Mapi.mymap.remove();
      // Calls.yelpBusinessSearch("coffee", "90210", priceFilter);
      });
  }
  

   /* =================== public methods ================== */
  // main init method
  function init() {
    cacheDom();
    // render();
  }
  /* =============== export public methods =============== */
  return {
    init: init,
    render: render,
    filters: filters
  };

}());
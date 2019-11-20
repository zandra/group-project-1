var Logic = (function() {
    // this sets the view of the center of London as the default map
    // the '13' is the zoom you would like to defaul on the Map. This is out of 18
    var mymap = L.map('mapid').setView({
        lat: 30.26986,
        lng: -97.743212
    }, 13)

    // this adds the Mapbox street tiles API as the map 
    // can also change the 'id' to 'mapbox.satelite' and have a satelite view. Maybe create a toggle option on the map?
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoianlvbmdlIiwiYSI6ImNrMzFzOTJhOTAzczUzbG9iNzJkbThqNGgifQ.P8qxxnXrweFPSDAk0myObw'
    }).addTo(mymap);


    // this function provides the user with the long and lat of where they clicked on the map
    // this will be super useful for us just setting up our map and how we want the user to interact with it
    // we will need to be careful with this function. 
    //If you move it to different lines of code it can change if it even works or the map populates
    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
        console.log(e.latlng);
    }
    mymap.on('click', onMapClick);



    // this adds the blue marker to the map or on an iPhone we call a "dropping a pin"
    var marker = L.marker([30.26986, -97.743212]).addTo(mymap);

    // this drops a polygon on the map (will need to figure out how to get longitute and latitude to create this feature in our map)
    var polygon = L.polygon([
        [30.282936, -97.830334],
        [30.267667, -97.841148],
        [30.259364, -97.839947],
        [30.242163, -97.815228],
        [30.247946, -97.805271]
    ]).addTo(mymap);


    // // this will drop a circle on the map
    var circle = L.circle([30.26826, -97.774029], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 1000,
    }).addTo(mymap);



    // this adds what we have been calling 'modals' to each object we create on the map. In Leaflet they are called 'pop-ups'
    // click on each pop-up to see what appears
    // these pop-ups are tied specifically to each object or marker that is on the map
    marker.bindPopup("<b>Hello world!</b><br>I am a popup. Click on the polygon or circle for another pop-up").openPopup();
    circle.bindPopup("I am a circle.");
    polygon.bindPopup("I am a polygon.");

    // you can also add pop-ups on the page when you need to put it somewhere else, besides just attaching it to an object
    // in the case this pop-up appears when you load the page and goes away if you click on the other objects
    var popup = L.popup()
        .setLatLng([30.287066, -97.729035])
        .setContent("I am a standalone popup for the Thompson center!")
        .openOn(mymap);



    /* =================== public methods ================== */
    // main init method
    function init() {
        mymap();
        onMapClick();
    }
    /* =============== export public methods =============== */
    return {
        init: init
    };

}());

// Now figure out how you will use API return to put pins on the map of each restaurant
// 1) take the response and console.log response and get a few pieces of data from API
// 2) Then create a function for creating pins based on location 
// probably will need a for loop here to run over response object and create pins for all place in the array




// NOTES
// =======================================================
//
// 1) Leaflet uses methods like jQuery. For example '.addTo' as well as '.setView' etc.
// a) openOn handles automatic closing of a previously opened popup when opening a new one. This would be good for our user
//
// 2) Every time something happens in Leaflet, e.g. user clicks on a marker or map zoom changes, 
//    the corresponding object sends an event which you can subscribe to with a function. It allows you to react to user interaction:
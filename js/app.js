jQuery(function(){
  $('a').on('click', function(){
    var ref = $(this).attr('data-id');
    $([document.documentElement, document.body]).animate({
        scrollTop: $('#'+ref).offset().top
    }, 1000);
  })
  event.preventDefault();
});

function initMap() {

      var myLatLng = {lat: 51.54155, lng:  -0.145719};
      // Create a map object and specify the DOM element for display.
      var map = new google.maps.Map(document.getElementById('map'), {
        scrollwheel: false,
        zoom: 15,
        center: myLatLng
      });
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
      });
    }

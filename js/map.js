function initMap() {
  const locations = [
    ['<h2>7Eleven Canada</h2>', 43.241137,  -79.779214, 4],
    ['<h2>Adlib softwares</h2>',  43.358084, -79.796655, 5],
    ['<h2>Kamya Enterprise</h2>', 22.297076, 73.195737, 3],
    ['<h2>Walmart St.catharines</h2>', 43.133242, -79.224438, 2],
    ['<h2>Work From home</h2>',  43.132033, -79.257422, 1],
    ['<h2>Hamilton City</h2>', 43.2557, -79.8711]
  ];

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
     center: new google.maps.LatLng(43.2557, -79.8711),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var infowindow = new google.maps.InfoWindow({
      strokeColor:"red",
      strokeWeight:3,
    });
  
    for (var i=0;i<locations.length;i++){
    const marker = new google.maps.Marker({
      position:new google.maps.LatLng(locations[i][1], locations[i][2]), 
      map : map ,
      title: "Click to zoom",
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
    }
  }
  function addmap() {
    var input = document.getElementById('pac-input');
    var autocomplete = new google.maps.places.Autocomplete(input);
      google.maps.event.addListener(autocomplete, 'place_changed', function () {
          var place = autocomplete.getPlace();
          document.getElementById('city2').value = place.name;
          document.getElementById('cityLat').value = place.geometry.location.lat();
          document.getElementById('cityLng').value = place.geometry.location.lng();
      });
  }
  google.maps.event.addDomListener(window, 'load', initialize);
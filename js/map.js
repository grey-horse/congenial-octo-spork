	// Initialize and add the map
    function initMap() {
        // The location of dave
        const dave = { lat: 23.957052, lng: 120.581385 };
        // The map, centered at dave
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: dave,
        });
        // The marker, positioned at dave
        let icon = {
            url: 'images/boomer.png',
            scaledSize: { width: 60, height: 55 }
         }
        const marker = new google.maps.Marker({
          position: dave,
          map: map,
          icon: icon
        });
      }
      
      window.initMap = initMap;
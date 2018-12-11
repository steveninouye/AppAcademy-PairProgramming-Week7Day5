export default class MarkerManager {
   constructor(map) {
      this.map = map;
      this.markers = {};
   }

   updateMarkers(benches) {
      const markerKeys = Object.keys(this.markers);
      benches.forEach((bench) => {
         if (!markerKeys.includes(bench.id)) {
            this.createMarkers(bench);
         }
      });
   }

   createMarkers(bench) {
      const latLng = { lat: bench.lat, lng: bench.lng };
      this.markers[bench.id] = new google.maps.Marker({
         position: latLng,
         map: this.map,
         title: bench.description
      });
      this.markers[bench.id].setMap(this.map);
   }
}

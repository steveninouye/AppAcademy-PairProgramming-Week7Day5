import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component {
   componentDidMount() {
      const mapOptions = {
         center: { lat: 37.7758, lng: -122.435 },
         zoom: 13
      };
      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.MarkerManager = new MarkerManager(this.map);
      this.MarkerManager.updateMarkers(this.props.benches);

      ///////////////
      // console.log(this.map.getBounds());
      // this.props.updateBounds(this.map.getBounds());
      // this.map.addListener('bounds_changed', (e) => {
      //    // console.log('e: ', e);
      //    // console.log('map.getBounds(): ', map.getBounds());
      //    this.props.updateBounds(this.map.getBounds());
      // });
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      this.MarkerManager.updateMarkers(this.props.benches);
   }

   render() {
      return <div id="map-container" ref={(map) => (this.mapNode = map)} />;
   }
}

export default BenchMap;

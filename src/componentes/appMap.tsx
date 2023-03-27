import React from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import "../style/appMap.css"
import { fromLonLat } from 'ol/proj';
//import XYZ from 'ol/source/XYZ';

class AppMap extends React.Component {
  private mapRef: React.RefObject<HTMLDivElement>;
  private map: Map | null;

  constructor(props: {}) {
    super(props);
    this.mapRef = React.createRef<HTMLDivElement>();
    this.map = null;
  }

  componentDidMount() {
    if (this.mapRef.current) {
      this.map = new Map({
        target: this.mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM()
            // source: new XYZ({
            //   url: 'http://api.maptiler.com/maps/a17f5d13-46f4-4142-8e7d-b2d048ad95ca/style.json?key=QJsMtwnH1WsCqV5uNdel',
            // }),
          }),
        ],
        view: new View({
          center: fromLonLat([-101.7112005,21.1523417]),
          zoom: 13,
        }),
      });
    }
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.dispose();
      this.map = null;
    }
  }

  render() {
    return (<div className='mapContainer'><div ref={this.mapRef} className ="map"  /></div>);
  }
}
export default AppMap
import React, { Component } from 'react';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import AddDataButton from './AddDataButton.js'
import ClusterButton from './ClusterButton.js'

import './App.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MyPopupMarker = ({ children, position }) => (
  <Marker position={position}>
    <Popup>{children}</Popup>
  </Marker>
)

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <div style={{ display: 'none' }}>{items}</div>
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    }
  }

  // markers() {
  //   this.state.features.map((feature) =>
  //   {key: feature.properties.id, position: [coor[0],coor[1]], children: feature.properties.type})}

  render() {
    const center = [this.state.lat, this.state.lng]
    const markers =
    [
      { key: 'marker1', position: [51.5, -0.1], children: 'My first popup' },
      { key: 'marker2', position: [51.51, -0.1], children: 'My second popup' },
      { key: 'marker3', position: [51.49, -0.05], children: 'My third popup' },
    ]
    return (
      <div className="map">
        <div className="buttondiv">
          <AddDataButton />
          <ClusterButton />
        </div>
        <Map className="map" center={center} zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MyMarkersList markers={markers} />
        </Map>
      </div>
    )
  }
}

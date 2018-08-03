import React, { Component } from 'react';
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import './App.css';

class App extends Component {
  render() {
  const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 0
  })
});
    return (
      <div className="App">
        <header className="Map-header">
          <h1 className="App-title">Open Layers Home Page</h1>
        </header>
    
      </div>
    );
  }
}

export default App;




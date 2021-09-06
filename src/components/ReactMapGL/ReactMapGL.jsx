import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

const REACT_APP_MAPBOX_TOKEN = 'pk.eyJ1IjoiYWltYXAiLCJhIjoiY2tzaXBsY3VmMGNkdjJvbmNpajd4bzNsdSJ9.ob9hYvyUocVZ343tQy2wSg';

const layerStyle = {
   id: 'point',
   type: 'circle',
   paint: {
      'circle-radius': 10,
      'circle-color': '#333',
      'circle-stroke-color': '#fff',
      'circle-stroke-width': 1,
   }
};

function Map() {
   const [viewport, setViewport] = useState({
      width: '100%',
      height: '100vh',
      latitude: 50,
      longitude: 30,
      zoom: 5,
      pitch: 2
   });

   console.log('rerender 🔥')

   return (
      <ReactMapGL
         mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
         {...viewport} width="100%" height="100vh" onViewportChange={setViewport}
      >
         <Source id="test-tileset2" type="vector" url="mapbox://aimap.test-tileset2" >
            <Layer source-layer='test_tileset' {...layerStyle} />
         </Source>
      </ReactMapGL>
   );
}

export default Map;
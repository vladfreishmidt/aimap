import React, {useRef, useState, useEffect} from 'react';
import mapboxgl from '!mapbox-gl';
import s from './Map.module.css';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

const REACT_APP_MAPBOX_TOKEN = 'pk.eyJ1IjoiYWZrYXN1c3VhbCIsImEiOiJja3M4aWJiYncwdzUwMnFzMDZ3NDRrZjdoIn0.HpKfKiWP7JBRjWKDP6bJlQ';

const Map = () => {
   mapboxgl.accessToken = REACT_APP_MAPBOX_TOKEN;

   // Refs
   const mapContainer = useRef(null);
   const map = useRef(null);

   // Map initial state
   const [lng, setLng] = useState(30.5238);
   const [lat, setLat] = useState(50.45466);
   const [zoom, setZoom] = useState(5.5);

   // Map initialization
   useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
         container: mapContainer.current,
         style: "mapbox://styles/afkasusual/cksdsl51u75d317quawci46i1",
         center: [lng, lat],
         zoom: zoom
      });

      // Add vector tiles as a source (requires debugging) -- !
      map.current.on('load', () => {
         map.current.addSource('mapbox-terrain', {
            type: 'vector',
            url: 'mapbox://afkasusual.hello-world-tiles2',
         });

         // Render custom Markers (requires debugging) -- !
         map.current.addLayer({
            'id': 'circle',
            'type': 'circle',
            'source': 'mapbox-terrain',
            "source-layer": 'mapbox-terrain',
            'paint': {
               'circle-color': '#4264fb',
               'circle-radius': 8,
               'circle-stroke-width': 2,
               'circle-stroke-color': '#ffffff'
            }
         });
      });

      // Autofocus
      function flyToObject(currentFeature) {
         map.current.flyTo({
            center: currentFeature.geometry.coordinates,
            zoom: 15
         });
      }

      // Marker Pop-up
      function createPopUp(currentFeature) {
         const popUps = document.getElementsByClassName('mapboxgl-popup');
         /** Check if there is already a popup on the map and if so, remove it */
         if (popUps[0]) popUps[0].remove();

         const popup = new mapboxgl.Popup({closeOnClick: false})
            .setLngLat(currentFeature.geometry.coordinates)
            .setHTML('<h3>Об\'єкт info string</h3>' +
               '<h4>' + currentFeature.properties.address + '</h4>')
            .addTo(map.current);
      }


      // Marker Click Handler
      map.current.on('click', function (e) {
         /* Determine if a feature in the "locations" layer exists at that point. */
         const features = map.current.queryRenderedFeatures(e.point, {
            layers: ['mapbox-terrain']
         });

         if (features.length) {
            const clickedPoint = features[0];
            console.log(clickedPoint);

            // DEBUG NEXT

            /* Fly to the point */
            flyToObject(clickedPoint);

            /* Close all other popups and display popup for clicked store */
            createPopUp(clickedPoint);

            /* Highlight listing in sidebar (and remove highlight for all other listings) */

            // const activeItem = document.getElementsByClassName('active');

            // if (activeItem[0]) {
            //    activeItem[0].classList.remove('active');
            // }

            // const listing = document.getElementById('listing-' + clickedPoint.properties.id);
            // listing.classList.add('active');
         }
      });
   });

   // Temp
   console.log('Map rerender ❤️‍🔥');

   return (
      <div ref={mapContainer} className={s.mapContainer}/>
   )
};

export default Map;
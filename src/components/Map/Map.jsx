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
         map.current.addSource('hello-world', {
            type: 'vector',
            url: 'mapbox://afkasusual.hello-world-tiles',

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
            .setHTML(`
                <div class="marker">
                    <div>
                        <div class="header">
                            <div class="text">
                                <div class="name">${currentFeature.properties.name}</div>
                                <div class="classifier">${currentFeature.properties.aimap_classifier}</div>
                            </div>
                            <div class="icon"></div>
                        </div>
                        <div class="address">
                            ${currentFeature.properties.street}  
                            ${currentFeature.properties.build_num}
                            &middot;
                            ${currentFeature.properties.construction_type}
                            &middot;
                            <!-- // TEMP -->
                            CC1
                            &middot;
                            130 м<sup>2</sup>
                            &middot;
                            3 поверхи
                        </div>
                    <div>
                </div>
             `)
            .addTo(map.current);
      }

      // Marker Hover Handler
      map.current.on('mousemove', function (e) {
         /* Determine if a feature in the "locations" layer exists at that point. */
         const features = map.current.queryRenderedFeatures(e.point, {
            layers: ['hello-world']
         });

         if (features.length) {
            const clickedPoint = features[0];
            // console.log(clickedPoint);

            // DEBUG NEXT

            /* Fly to the point */
            // flyToObject(clickedPoint);

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
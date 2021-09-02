import React, {useRef, useState, useEffect} from 'react';
import mapboxgl from '!mapbox-gl';
import s from './Map.module.css';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import {mapLayer} from './MapLayer';

MapboxWorker(); //TEMP

const REACT_APP_MAPBOX_TOKEN = 'pk.eyJ1IjoiYWltYXAiLCJhIjoiY2tzaXBsY3VmMGNkdjJvbmNpajd4bzNsdSJ9.ob9hYvyUocVZ343tQy2wSg';

const Map = ({
                filterBarActive,
                setCurrentObject,
                setObjectDetailsActive,
                setFilterBarActive,
                currentMarkerLatLon,
                removedMarkers,
                objectDetailsInfo,
                objectDetailsActive,
                selectedObjTypeFilters,
                clickedFilterBtn,
                defaultLayer,
                setMapLayerId,
                mapLayerId
             }) => {

   // set mapbox Access Token
   mapboxgl.accessToken = REACT_APP_MAPBOX_TOKEN;

   // Refs
   const mapContainer = useRef(null);
   const map = useRef(null);

   // Map initial state
   const [lng, setLng] = useState(27.5238);
   const [lat, setLat] = useState(50.45466);
   const [zoom, setZoom] = useState(5);

   // Map initialization
   useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
         container: mapContainer.current,
         style: "mapbox://styles/aimap/ckssxwfr41f0518o2lm2pgmfc",
         center: [lng, lat],
         zoom: zoom,
         pitch: false
      });

      // Add vector tiles as a source

      map.current.on('load', () => {
         map.current.addSource('test-tileset2', {
            type: 'vector',
            url: 'mapbox://aimap.test-tileset2',
         });

         console.log("Map load");

         map.current.addLayer(defaultLayer);

      });

      // Autofocus
      // function flyToObject(currentFeature) {
      //    map.current.flyTo({
      //       center: currentFeature.geometry.coordinates,
      //       zoom: 15
      //    });
      // }

      let popup;

      // Marker Pop-up

      function createPopUp(currentFeature) {
         const popUps = document.getElementsByClassName('mapboxgl-popup');
         /** Check if there is already a popup on the map and if so, remove it */
         if (popUps[0]) popUps[0].remove();
         setLng(curr => curr);
         setLat(curr => curr);
         setZoom(curr => curr);

         popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat(currentFeature.geometry.coordinates)
            .setHTML(`
                <div class="marker" >
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

      // Marker Event Handlers --------------------------------

      map.current.on('mouseleave', 'point', function () {
         map.current.getCanvas().style.cursor = '';
         popup.remove();
      });

      map.current.on('mouseenter', 'point', function (e) {
         map.current.getCanvas().style.cursor = 'pointer';
         /* Determine if a feature in the "locations" layer exists at that point. */
         const features = map.current.queryRenderedFeatures(e.point, {
            layers: ['point']
         });

         if (features.length) {
            const clickedPoint = features[0];
            createPopUp(clickedPoint);
         }
      });

      // Marker Click Handler
      map.current.on('click', function (e) {
         /* Determine if a feature in the "locations" layer exists at that point. */
         const features = map.current.queryRenderedFeatures(e.point, {
            layers: ['point']
         });

         if (features.length) {
            const clickedPoint = features[0];

            console.log(clickedPoint); // TEMP

            setObjectDetailsActive(true);
            setFilterBarActive(true);

            setCurrentObject(clickedPoint.properties.hash_id);
         }
      });

   }, []);

   // useEffect(() => {
   // let activeMarker = null;
   // activeMarker = new mapboxgl.Marker({
   //    color: "#ff0000"
   // }).setLngLat([30, 50])
   // .addTo(map.current);
   //
   // activeMarker.setLngLat([currentMarkerLatLon.lon, currentMarkerLatLon.lat]);
   //
   // console.log(currentMarkerLatLon.lon);
   // console.log(currentMarkerLatLon.lat);
   //
   //
   // }, [currentMarkerLatLon]);

   useEffect(() => {
      map.current.flyTo({
         center: [objectDetailsInfo.lon, objectDetailsInfo.lat],
         offset: [170, -50],
         speed: 0.95,
      });
   }, [objectDetailsInfo]);

   useEffect(() => {

      if (map.current.isStyleLoaded()) {

         const layers = map.current.getStyle().layers;

         setMapLayerId(layers[layers.length - 1].id);

         map.current.removeLayer('filtered_point_2');
         map.current.removeLayer('point');
         map.current.removeLayer(mapLayerId);

         if (!selectedObjTypeFilters.length) {
            map.current.removeLayer(mapLayerId);

            map.current.addLayer({
               'id': 'filtered_point_2',
               'source': 'test-tileset2',
               'type': 'circle',
               'source-layer': 'test_tileset',
               'paint': {
                  'circle-radius': 5,
                  'circle-color': "#333",
                  'circle-stroke-width': 2,
                  'circle-stroke-color': "#fff"
               }
            });
         }
         map.current.addLayer(mapLayer(selectedObjTypeFilters[0]));

         console.log(layers);

         map.current.removeLayer('point');
      }

   }, [clickedFilterBtn]);

   // Map rerender notification

   console.log('Map rerender ❤️‍🔥');

   return (
      <div
         ref={mapContainer}
         className={`${s.mapContainer} ${filterBarActive ? s.shrink : s.grow}`}
      />
   )
};

export default Map;
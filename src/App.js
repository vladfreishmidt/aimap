import React, { useEffect, useState } from "react";
import './App.css';
import Map from './components/Map/Map';
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import MapUI from "./components/MapUI/MapUI";
import { Route } from "react-router-dom";
import RMap from './components/RMap/RMap';

function App() {


   const [viewport, setViewport] = useState({
      latitude: 49.724479188712984,
      longitude: 30.8935546875,
      zoom: 5
   });
   // -------------


   const [objects, setObject] = useState([]);
   const [objectsFoundTotal, setObjectsFoundTotal] = useState(0);

   const [currObj, setCurrObj] = useState(null);

   const [filterBarActive, setFilterBarActive] = useState(true);
   const [objectDetailsActive, setObjectDetailsActive] = useState(false);
   const [objectDetailsInfo, setObjectDetailsInfo] = useState({
      name: 'property_001test',
      lat: 28,
      lon: 48,
   });

   const [mapLayerId, setMapLayerId] = useState();

   const [defaultLayer, setDefaultLayer] = useState({
      'id': 'point',
      'source': 'test-tileset2',
      'type': 'circle',
      'source-layer': 'test_tileset',
      'paint': {
         'circle-radius': 5,
         'circle-color': '#555',
         'circle-stroke-width': 2,
         'circle-stroke-color': "#fff"
      }
   });

   // Current Object ID state
   const [currentObjectId, setCurrentObject] = useState("1b679708a7c9da0243c725688ad8903b");

   // Search Input State
   const [searchText, setSearchText] = useState("");

   // Active marker state
   const [currentMarkerLatLon, setCurrentMarkerLatLon] = useState({
      lon: 0,
      lat: 0
   });

   // Filter: Object Typer
   const [selectedObjTypeFilters, setSelectedObjTypeFilters] = useState([]);

   const URL = "https://app.aimapa.com/objects/";

   // Obj count for objects list
   const countObj = 20;

   const [clickedFilterBtn, setClickedFilterBtn] = useState(false);

   const getDefaultResults = () => {
      const reqObjBody = {
         "limit": countObj,
         "offset": 0,
      };

      fetch(URL, {
         method: "POST",
         headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
         },

         body: JSON.stringify(reqObjBody)
      })
         .then(data => data.json())
         .then((data) => setObject(data.objects))
         .catch(err => console.log(err));
   }

   // FETCH default objects List
   useEffect(() => {
      getDefaultResults();
   }, []);

   // FETCH OBJECT DETAILS BY ID
   useEffect(() => {
      const reqObjBody = {
         "hash_id": currentObjectId
      };

      fetch('https://app.aimapa.com/object/', {
         method: "POST",
         headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
         },
         body: JSON.stringify(reqObjBody)
      })
         .then(data => data.json())
         .then((data) => setObjectDetailsInfo(data.object))
         .catch(err => console.log(err));
   }, [currentObjectId]);

   // FETCH -- get default results
   const getDefaultSearchResults = () => {
      const reqObjBody = {
         "limit": countObj,
         "offset": 0,
         "aimap_classifier": selectedObjTypeFilters
         // "stage_documentation": ["повідомлення про початок виконання будівельних робіт"],
      };
      fetch(URL, {
         method: 'POST',
      })
   }

   // FETCH -- FILTERED objects List
   const getFilteredResults = () => {
      const classifierFilter = selectedObjTypeFilters && `"aimap_classifier": ${selectedObjTypeFilters}`

      const reqObjBody = {
         "limit": 20,
         "offset": 0,
         "aimap_classifier": selectedObjTypeFilters
         // "stage_documentation": ["повідомлення про початок виконання будівельних робіт"],
      };

      fetch(URL, {
         method: "POST",
         headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
         },
         body: JSON.stringify(reqObjBody)
      })
         .then(data => data.json())
         .then((data) => setObject(data.objects))
         .catch(err => console.log(err));

      fetch(URL, {
         method: "POST",
         headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
         },
         body: JSON.stringify({
            "aimap_classifier": selectedObjTypeFilters
         })
      })
         .then(data => data.json())
         .then((data) => setObjectsFoundTotal(data.count))
         .catch(err => console.log(err));
   };


   return (
      <div className="app-wrapper">

         {/* APP NAVIGATION */}
         <Navbar />

         <div className="page-container">

            {/*ReactMapGl*/}
            <Route path="/map" render={() => <RMap filterBarActive={filterBarActive} currObj={currObj} setCurrObj={setCurrObj} setCurrentObject={setCurrentObject} setFilterBarActive={setFilterBarActive} setObjectDetailsActive={setObjectDetailsActive} currentMarkerLatLon={currentMarkerLatLon} viewport={viewport} setViewport={setViewport} selectedObjTypeFilters={selectedObjTypeFilters} />} />

            {/* MAP Component */}
            {/* <Route
               path="/map"
               render={() => <Map
                  filterBarActive={filterBarActive}
                  setObjectDetailsActive={setObjectDetailsActive}
                  setFilterBarActive={setFilterBarActive}
                  setCurrentObject={setCurrentObject}
                  currentMarkerLatLon={currentMarkerLatLon}
                  objectDetailsInfo={objectDetailsInfo}
                  objectDetailsActive={objectDetailsActive}
                  selectedObjTypeFilters={selectedObjTypeFilters}
                  clickedFilterBtn={clickedFilterBtn}
                  defaultLayer={defaultLayer}
                  setMapLayerId={setMapLayerId}
                  mapLayerId={mapLayerId}
               />}
            /> */}

            {/* MAP UI */}
            <Route path="/map" render={() =>
               <MapUI
                  filterBarActive={filterBarActive}
                  setFilterBarActive={setFilterBarActive}
                  objects={objects}
                  searchText={searchText}
                  setSearchText={setSearchText}
                  objectDetailsActive={objectDetailsActive}
                  setObjectDetailsActive={setObjectDetailsActive}
                  objectDetailedInfo={objectDetailsInfo}
                  setCurrentObject={setCurrentObject}
                  setObjectDetailsInfo={setObjectDetailsInfo}
                  setCurrentMarkerLatLon={setCurrentMarkerLatLon}
                  selectedObjTypeFilters={selectedObjTypeFilters}
                  setSelectedObjTypeFilters={setSelectedObjTypeFilters}
                  getFilteredResults={getFilteredResults}
                  clickedFilterBtn={clickedFilterBtn}
                  setClickedFilterBtn={setClickedFilterBtn}
                  objectsFoundTotal={objectsFoundTotal}
                  viewport={viewport}
                  setViewport={setViewport}
                  getDefaultResults={getDefaultResults}
                  setObjectsFoundTotal={setObjectsFoundTotal}
               />
            }
            />

            {/* DASHBOARD */}
            <Route path="/dashboard" render={() => <Dashboard />} />
         </div>
      </div>
   );
}

export default App;

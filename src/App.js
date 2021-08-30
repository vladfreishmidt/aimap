import React, {useEffect, useState} from "react";
import './App.css';
import Map from './components/Map/Map';
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import MapUI from "./components/MapUI/MapUI";
import {Route} from "react-router-dom";



function App() {


   const URL = "https://app.aimapa.com/objects/";


   // Active marker state
   const [currentMarkerLatLon, setCurrentMarkerLatLon] = useState({
      lon: 0,
      lat: 0
   });



   // App initial state
   const [searchText, setSearchText] = useState("");

   const [viewport, setViewport] = useState({
      longitude: 30.5234,
      latitude: 50.4501,
      width: "100%",
      height: "100vh",
      zoom: 14,
   });

   const [objects, setObject] = useState([])


   const [filterBarActive, setFilterBarActive] = useState(true);

   const [objectDetailsActive, setObjectDetailsActive] = useState(false);

   const [objectDetailedInfo, setObjectDetailsInfo] = useState({
      name: 'property_001test'
   });


   // Current Object ID state

   const [currentObjectId, setCurrentObject] = useState('46468c14392f01af54344f2dce7fa03d');

   // Obj count for objects list
   const countObj = 100;

   // Fetch Objects List


   useEffect(() => {
      const reqObjBody = {
         "limit": countObj,
         "offset": 0,
         "aimap_classifier": ["Будівлі АПК", "Гаражі, стоянки, СТО"],
         "stage_documentation": ["повідомлення про початок виконання будівельних робіт"],
         "from_date": "2021-07-01",
         "to_date": "2021-08-31"
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
   }, []);


   // fetch Get Object By ID
   const getObjectDetailedInfo = () => {
      fetch(urlObjectId, {
         method: 'POST'
      })
         .then(data => data.json())
         .then((data) => setObjectDetailsInfo(data.object))
         .catch(err => console.log(err));
   }

   // Temp 'Object_By_ID' query string
   const urlObjectId = ` https://app.aimapa.com/object/`;

   // Fetch Object Details
   useEffect(() => {
      if (urlObjectId === null) {
         return;
      } else {
         fetch(urlObjectId, {
            method: 'POST',
            body:
               {
                  "hash_id": "1b679708a7c9da0243c725688ad8903b"
               }
         })
            .then(res => res.json())
            .then(
               res => setObjectDetailsInfo(res)
            )
            .catch(err => console.log(err));
      }


   }, [objectDetailsActive]);

   console.log(`clicked hash_id: ${currentObjectId}`);

   return (
      <div className="app-wrapper">

         {/* APP NAVIGATION */}
         <Navbar/>

         <div className="page-container">

            {/* MAP Component */}
            <Route
               path="/map"
               render={() => <Map
                  viewport={viewport}
                  setViewport={setViewport}
                  filterBarActive={filterBarActive}
                  setObjectDetailsActive={setObjectDetailsActive}
                  setFilterBarActive={setFilterBarActive}
                  setCurrentObject={setCurrentObject}
                  currentMarkerLatLon={currentMarkerLatLon}
                  currentMarkerLatLon={currentMarkerLatLon}

               />}
            />

            {/* MAP UI */}
            <Route path="/map" render={() =>

               <MapUI
                  filterBarActive={filterBarActive}
                  setFilterBarActive={setFilterBarActive}
                  objects={objects} searchText={searchText}
                  setSearchText={setSearchText}
                  objectDetailsActive={objectDetailsActive}
                  setObjectDetailsActive={setObjectDetailsActive}
                  objectDetailedInfo={objectDetailedInfo}
                  setCurrentObject={setCurrentObject}
                  setObjectDetailsInfo={setObjectDetailsInfo}
                  setCurrentMarkerLatLon={setCurrentMarkerLatLon}

               />
            }
            />

            {/* DASHBOARD */}
            <Route path="/dashboard" render={() => <Dashboard/>}/>
         </div>
      </div>
   );
}

export default App;

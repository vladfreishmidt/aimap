import React, {useEffect, useState} from "react";
import './App.css';
import Map from './components/Map/Map';
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import MapUI from "./components/MapUI/MapUI";
import {Route} from "react-router-dom";


function App() {

   const URL = "https://api.aimapa.com/objects/paged?offset=250&limit=15&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoX3V1aWQiOiIwMDAwMWM0ZS01NmU5LTQ0ZjYtOTkzNi02NTRjNDUxOTgyYjQiLCJhdXRob3JpemVkIjp0cnVlLCJ1c2VyX2lkIjoxfQ.OFZtQcnD71pMyrDCcT6GxVwgs1kpfg1QBqVQwwI1fvo";


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
   const [error, setError] = useState(null);

   const [filterBarActive, setFilterBarActive] = useState(true)
   const [objectDetailsActive, setObjectDetailsActive] = useState(false);

   const [objectDetailedInfo, setObjectDetailsInfo] = useState({
      name: 'property_001test'
   });


   // Current Object ID state

   const [currentObjectId, setCurrentObject] = useState(1268452);

   // Fetch Objects List
   useEffect(() => {
      fetch(URL)
         .then(data => data.json())
         .then((data) => setObject(data.objects))
         .catch(setError);
   }, []);


   // Get Object By ID
   const getObjectDetailedInfo = () => {
      fetch(urlObjectId)
         .then(data => data.json())
         .then((data) => setObjectDetailsInfo(data.object))
         .catch(setError);
   }

   // Temp 'Object_By_ID' query string
   const urlObjectId = `https://api.aimapa.com/objects/${currentObjectId}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoX3V1aWQiOiIwMDAwMWM0ZS01NmU5LTQ0ZjYtOTkzNi02NTRjNDUxOTgyYjQiLCJhdXRob3JpemVkIjp0cnVlLCJ1c2VyX2lkIjoxfQ.OFZtQcnD71pMyrDCcT6GxVwgs1kpfg1QBqVQwwI1fvo`;

   // Fetch Object Details
   useEffect(() => {
      fetch(urlObjectId)
         .then(res => res.json())
         .then(
            res => setObjectDetailsInfo(res)
         )
         .catch(err => console.error(err));

      console.log(setObjectDetailsInfo);
   }, [objectDetailsActive]);


   return (
      <div className="app-wrapper">

         {/* APP NAVIGATION */}
         <Navbar/>

         <div className="page-container">
            {/* MAP */}
            <Route
               path="/map"
               render={() => <Map
                  viewport={viewport}
                  setViewport={setViewport}
                  filterBarActive={filterBarActive}
                  setObjectDetailsActive={setObjectDetailsActive}
                  setFilterBarActive={setFilterBarActive}
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
               />}
            />

            {/* DASHBOARD */}
            <Route path="/dashboard" render={() => <Dashboard/>}/>
         </div>
      </div>
   );
}

export default App;

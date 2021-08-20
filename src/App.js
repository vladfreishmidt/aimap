import React, {useEffect, useState} from "react";
import './App.css';
import Map from './components/Map/Map';
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import MapUI from "./components/MapUI/MapUI";
import {BrowserRouter, Route} from "react-router-dom";


function App() {

   const URL = "https://api.aimapa.com/objects/paged?offset=250&limit=10&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoX3V1aWQiOiIwMDAwMWM0ZS01NmU5LTQ0ZjYtOTkzNi02NTRjNDUxOTgyYjQiLCJhdXRob3JpemVkIjp0cnVlLCJ1c2VyX2lkIjoxfQ.OFZtQcnD71pMyrDCcT6GxVwgs1kpfg1QBqVQwwI1fvo";

   // Temp 'Object_By_ID' query string
   const urlObjectId = "https://api.aimapa.com/objects/1277273?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoX3V1aWQiOiIwMDAwMWM0ZS01NmU5LTQ0ZjYtOTkzNi02NTRjNDUxOTgyYjQiLCJhdXRob3JpemVkIjp0cnVlLCJ1c2VyX2lkIjoxfQ.OFZtQcnD71pMyrDCcT6GxVwgs1kpfg1QBqVQwwI1fvo";

   // App initial state
   const [searchText, setSearchText] = useState("");
   const [viewport, setViewport] = useState({
      longitude: 30.5234,
      latitude: 50.4501,
      width: "100vw",
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

   // Fetch Objects List
   useEffect(() => {
      fetch(URL)
         .then(data => data.json())
         .then((data) => setObject(data.objects))
         .catch(setError);
   }, [])

   // Get Object By ID
   const getObjectDetailedInfo = () => {
      fetch(urlObjectId)
         .then(data => data.json())
         .then((data) => setObjectDetailsInfo(data.object))
         .catch(setError);
   }

   return (
      <div className="app-wrapper">
         <BrowserRouter>
            {/* APP NAVIGATION */}
            <Navbar/>

            <div className="page-container">
               {/* MAP */}
               <Route
                  path="/map"
                  render={() => <Map viewport={viewport} setViewport={setViewport}/>}
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
                  />}
               />

               {/* DASHBOARD */}
               <Route path="/dashboard" render={() => <Dashboard/>}/>
            </div>
         </BrowserRouter>
      </div>
   );
}

export default App;

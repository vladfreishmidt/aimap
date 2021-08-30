import React from 'react';
import s from './FilterBar.module.css';
import Filters from './Filters/Filters';
import SearchResults from "./SearchResults/SearchResults";
import DownloadResults from "./DownloadResults/DownloadResults";
import ObjectDetails from "./ObjectDetails/ObjectDetails";


const FilterBar = ({
                      setSearchText,
                      searchText,
                      objects,
                      objectDetailsActive,
                      setObjectDetailsActive,
                      objectDetailedInfo,
                      setCurrentObject,
                      setCurrentMarkerLatLon,
                      setRemovedMarkers
                   }) => {


   return (

      <div className={s.filterBar}>

         {/* Filters Component */}
         {
            !objectDetailsActive
            &&
            <Filters
               setSearchText={setSearchText}
               searchText={searchText}
            />
         }

         {/* Search Results Component */}
         {
            !objectDetailsActive
            &&

            <SearchResults
               setCurrentObject={setCurrentObject}
               objects={objects}
               setObjectDetailsActive={setObjectDetailsActive}
               setCurrentMarkerLatLon={setCurrentMarkerLatLon}
               setRemovedMarkers={setRemovedMarkers}
            />

         }

         {/* Object Details Component */}
         {
            objectDetailsActive
            &&
            <ObjectDetails
               setObjectDetailsActive={setObjectDetailsActive}
               objectDetailedInfo={objectDetailedInfo}
            />
         }

         {/* Download Component */}
         <DownloadResults objectDetailsActive={objectDetailsActive}/>
      </div>

   )
}

export default FilterBar;
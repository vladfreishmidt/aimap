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
   setRemovedMarkers,
   selectedObjTypeFilters,
   setSelectedObjTypeFilters,
   getFilteredResults,
   getDefaultSearchResults,
   setClickedFilterBtn,
   objectsFoundTotal,
   viewport,
   setViewport,
   getDefaultResults,
   setObjectsFoundTotal
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
               selectedObjTypeFilters={selectedObjTypeFilters}
               setSelectedObjTypeFilters={setSelectedObjTypeFilters}
               getFilteredResults={getFilteredResults}
               getDefaultSearchResults={getDefaultSearchResults}
               setClickedFilterBtn={setClickedFilterBtn}
               getDefaultResults={getDefaultResults}
               setObjectsFoundTotal={setObjectsFoundTotal}
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
               viewport={viewport}
               setViewport={setViewport}
            />

         }

         {/* Object Details Component */}
         {
            objectDetailsActive
            &&
            <ObjectDetails
               setObjectDetailsActive={setObjectDetailsActive}
               objectDetailedInfo={objectDetailedInfo}
               selectedObjTypeFilters={selectedObjTypeFilters}
               setCurrentMarkerLatLon={setCurrentMarkerLatLon}
               setViewport={setViewport}
            />
         }

         {/* Download Component */}
         <DownloadResults
            objectDetailsActive={objectDetailsActive}
            objectsFoundTotal={objectsFoundTotal}
         />
      </div>

   )
}

export default FilterBar;
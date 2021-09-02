import React from 'react';
import FilterBar from "./FilterBar/FilterBar";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

const MapUI = ({
   setSearchText,
   searchText,
   objects,
   filterBarActive,
   setFilterBarActive,
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
      <>
         {/* FilterBar Component */}
         {
            filterBarActive
            &&
            <FilterBar
               filterBarActive={filterBarActive}
               objectDetailsActive={objectDetailsActive}
               searchText={searchText}
               setSearchText={setSearchText}
               objects={objects}
               setObjectDetailsActive={setObjectDetailsActive}
               objectDetailedInfo={objectDetailedInfo}
               setCurrentObject={setCurrentObject}
               setCurrentMarkerLatLon={setCurrentMarkerLatLon}
               setRemovedMarkers={setRemovedMarkers}
               selectedObjTypeFilters={selectedObjTypeFilters}
               setSelectedObjTypeFilters={setSelectedObjTypeFilters}
               getFilteredResults={getFilteredResults}
               getDefaultSearchResults={getDefaultSearchResults}
               setClickedFilterBtn={setClickedFilterBtn}
               objectsFoundTotal={objectsFoundTotal}
               viewport={viewport}
               setViewport={setViewport}
               getDefaultResults={getDefaultResults}
               setObjectsFoundTotal={setObjectsFoundTotal}
            />
         }

         {/* Profile Menu Component */}
         <ProfileMenu
            setFilterBarActive={setFilterBarActive}
            filterBarActive={filterBarActive}
         />
      </>
   )
}

export default MapUI;

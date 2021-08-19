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
                  objectDetailedInfo
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

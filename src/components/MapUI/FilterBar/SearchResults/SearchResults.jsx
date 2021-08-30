import React from 'react';
import s from './SearchResults.module.css';
import ObjectCard from './ObjectCard/ObjectCard';


const SearchResults = ({objects, setObjectDetailsActive, setCurrentObject, setCurrentMarkerLatLon, setRemovedMarkers}) => {

   return (

         <div className={s.searchResults}>

            {objects.map(object =>
               (
                  <ObjectCard
                     id={object.hash_id}
                     key={object.hash_id}
                     name={object.name}
                     category={object.aimap_classifier}
                     cc={object.consequence_class}
                     setObjectDetailsActive={setObjectDetailsActive}
                     setCurrentObject={setCurrentObject}
                     lon={object.lon}
                     lat={object.lat}
                     setCurrentMarkerLatLon={setCurrentMarkerLatLon}
                     setRemovedMarkers={setRemovedMarkers}
                  />
               ))}
         </div>

   );
}

export default SearchResults;

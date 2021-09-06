import React from 'react';
import s from './SearchResults.module.css';
import ObjectCard from './ObjectCard/ObjectCard';


const SearchResults = ({ objects, setObjectDetailsActive, setCurrentObject, setCurrentMarkerLatLon, setRemovedMarkers, viewport, setViewport }) => {

   return (

      <div className={s.searchResults}>

         {objects.map(object =>
         (
            <ObjectCard
               hash_id={object.hash_id}
               key={object.hash_id}
               construction_type={object.construction_type}
               name={object.name}
               category={object.aimap_classifier}
               object_square={object.object_square}
               cc={object.consequence_class}
               setObjectDetailsActive={setObjectDetailsActive}
               setCurrentObject={setCurrentObject}
               lon={object.lon}
               lat={object.lat}
               setCurrentMarkerLatLon={setCurrentMarkerLatLon}
               setRemovedMarkers={setRemovedMarkers}
               viewport={viewport}
               setViewport={setViewport}

            />
         ))}
      </div>

   );
}

export default SearchResults;

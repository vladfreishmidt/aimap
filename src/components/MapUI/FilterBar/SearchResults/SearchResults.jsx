import React from 'react';
import s from './SearchResults.module.css';
import ObjectCard from './ObjectCard/ObjectCard';


const SearchResults = ({objects, setObjectDetailsActive, setCurrentObject}) => {

   return (

         <div className={s.searchResults}>

            {objects.map(object =>
               (
                  <ObjectCard
                     id={object.aimap_id}
                     key={object.aimap_id}
                     name={object.name}
                     category={object.aimap_classifier}
                     cc={object.consequence_class}
                     setObjectDetailsActive={setObjectDetailsActive}
                     setCurrentObject={setCurrentObject}
                  />
               ))}
         </div>

   );
}

export default SearchResults;

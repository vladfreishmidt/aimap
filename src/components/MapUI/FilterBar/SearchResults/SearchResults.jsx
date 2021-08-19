import React from 'react';
import s from './SearchResults.module.css';
import ObjectCard from './ObjectCard/ObjectCard';

const SearchResults = ({objects, setObjectDetailsActive}) => {
   return (
      <div className={s.searchResults}>

         {objects.map(object =>
            (
               <ObjectCard
                  key={object.aimap_id}
                  name={object.name}
                  category={object.aimap_classifier}
                  cc={object.consequence_class}
                  setObjectDetailsActive={setObjectDetailsActive}
               />
            ))}
      </div>
   );
}

export default SearchResults;

import React, {useState} from 'react';
import s from './ObjectCard.module.css';

const ObjectCard = ({lon, lat, name, category, cc, setObjectDetailsActive, id, setCurrentObject, setCurrentMarkerLatLon}) => {

   const [collapsedTitle, setCollapsedTitle] = useState(true); // TEMP

   return (
      <div className={s.card}
           onMouseEnter={() => {
              setCurrentMarkerLatLon(
                 {
                    lon:lon,
                    lat:lat
                 }
              );
           }}
           onClick={() => {
            setObjectDetailsActive(true);
            setCurrentObject(id);}
           }>
         <img className={s.objectIcon} src="../assets/icons/object-types/house.svg" alt="object type"/>
         <h4 className={s.title} onClick={() => setCollapsedTitle(!collapsedTitle)}>
            {
               name.length > 42
               &&
               collapsedTitle ? `${name.slice(0, 42)} ..` : name
            }
         </h4>
         <p className={s.description}>
            {category}
         </p>
         <p className={s.description}>
            Капітальний ремонт &middot; СС {cc} &middot; 30 м<sup>2</sup>
         </p>
      </div>
   )
}

export default ObjectCard;
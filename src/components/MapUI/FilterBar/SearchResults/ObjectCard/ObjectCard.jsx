import React, { useState } from 'react';
import s from './ObjectCard.module.css';

const ObjectCard = ({
   lon,
   lat,
   name,
   category,
   cc,
   object_square,
   setObjectDetailsActive,
   hash_id,
   construction_type,
   setCurrentObject,
   setCurrentMarkerLatLon,
   viewport,
   setViewport
}) => {

   const [collapsedTitle, setCollapsedTitle] = useState(true); // TEMP

   return (
      <div className={s.card}

         onMouseEnter={() => {
            setCurrentMarkerLatLon(
               {
                  lon: lon,
                  lat: lat
               }
            );
         }}

         onMouseLeave={() => {
            setCurrentMarkerLatLon(
               {
                  lon: 0,
                  lat: 0
               }
            );
         }}

         onClick={() => {
            setObjectDetailsActive(true);
            setCurrentObject(hash_id);
            setViewport(
               {
                  ...viewport,
                  latitude: +lat,
                  longitude: +lon,
                  zoom: 10
               }
            )
         }
         }
      >

         <img className={s.objectIcon} src="../assets/icons/object-types/house.svg" alt="object type" />
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
            {construction_type} &middot; СС {cc} &middot; {object_square ? object_square : 'null'}
         </p>
      </div >
   )
}

export default ObjectCard;
import React from 'react';
import s from './ObjectTypeCard.module.css';

const ObjectTypeCard = ({option, setSelectedObjTypeFilters, selectedObjTypeFilters}) => {

   const handleFilterToggle = () => {
      if (selectedObjTypeFilters.includes(option.name)) {
         setSelectedObjTypeFilters(curr => curr.filter(item => item !== option.name));
      } else {
         setSelectedObjTypeFilters(curr => [...curr, option.name]);
      }
   }

   return (
         <div className={`${s.objectCard} ${selectedObjTypeFilters.includes(option.name) ? s.active : ""}`} onClick={() => handleFilterToggle()}>
         <div className={s.icon}>
            <img src={option.icon} alt="object type"/>
         </div>
         <div className={s.name}>
            {option.name}
         </div>
      </div>
   );
}

export default ObjectTypeCard;

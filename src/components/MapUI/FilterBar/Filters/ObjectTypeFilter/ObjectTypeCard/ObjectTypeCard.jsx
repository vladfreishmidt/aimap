import React from 'react';
import s from './ObjectTypeCard.module.css';

const ObjectTypeCard = ({option, setSelectedFilter, selectedFilters}) => {

   const handleFilterToggle = () => {
      if (selectedFilters.includes(option.name)) {
         setSelectedFilter(curr => curr.filter(item => item !== option.name));
      } else {
         setSelectedFilter(curr => [...curr, option.name]);
      }
   }


   return (
         <div className={`${s.objectCard} ${selectedFilters.includes(option.name) ? s.active : ""}`} onClick={() => handleFilterToggle()}>
         <div className={s.icon}>

         </div>
         <div className={s.name}>
            {option.name}
         </div>
      </div>
   );
}

export default ObjectTypeCard;

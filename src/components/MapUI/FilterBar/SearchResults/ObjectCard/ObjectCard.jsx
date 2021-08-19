import React, {useState} from 'react';
import s from './ObjectCard.module.css';

const ObjectCard = ({name, category, cc, setObjectDetailsActive}) => {

   const [collapsedTitle, setCollapsedTitle] = useState(true);

   return (
      <div className={s.card} onClick={() => setObjectDetailsActive(true)}>
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
            Капітальний ремонт • СС {cc} • 30 м²
         </p>
      </div>
   )
}

export default ObjectCard;
import React from 'react';
import s from './ObjectDetails.module.css';

const ObjectDetails = ({setObjectDetailsActive, objectDetailedInfo}) => {
   return (
      <div className={s.objectDetails}>
         <div className={s.header}>
            <div className={s.top}>
               <img src="../assets/icons/object-types/house.svg" alt="object type"/>
               <button className={s.closeBtn} onClick={() => setObjectDetailsActive((prev) => {
                  return !prev;
               })}>

                  <img src="../../assets/icons/close-object-details.svg" alt="close details"/>
               </button>
            </div>
            <div className={s.bottom}>
               <h4 className={s.title}>{objectDetailedInfo.name}</h4>
               <p className={s.description}>Київ, вул. Антонова</p>
            </div>
         </div>
         <div className={s.content}>
            <div className={s.contentNav}>
               <div className={`${s.contentTabLink} ${s.active}`}>Інформація</div>
               <div className={`${s.contentTabLink} `}>Контакти</div>
            </div>
         </div>
      </div>
   )
}

export default ObjectDetails;

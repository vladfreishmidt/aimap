import React, { useState } from 'react';
import s from '../CCFilter/CCFilter.module.css';

const CCFilter = () => {
   const [CCFilterActive, setCCFilterActive] = useState(false);

   return (
      <div className={s.filterWrapper}>
         <button className={`${s.btn} ${CCFilterActive ? s.active : ''}`}
            onClick={() => {
               setCCFilterActive(curr => !curr)
               setObjectFilterActive(false)
            }}>
            Єтап документації
         </button>
         {
            CCFilterActive

            &&

            <div className={s.filterBody}>
               <div className={s.filterOptions}>
                  <div className={s.info}>
                     <img src="http://localhost:3000/assets/icons/cc-info.svg" alt="i" />
                     <span>
                        Клас наслідків визначає значимість будуємого об’єкту.
                     </span>
                  </div>

                  <div className={s.formGroup}>
                     <label htmlFor="c1">

                        <input type="checkbox" id="c1" />
                        <span>відмова у видачі сертифікату</span>
                     </label>
                     <label htmlFor="c2">

                        <input type="checkbox" id="c2" />
                        <span>відмова у наданні дозволу</span>
                     </label>
                     <label htmlFor="c3">

                        <input type="checkbox" id="c3" />
                        <span>відмова у реєстрації декларації про готовність об'єкта до експлуатації</span>
                     </label>
                     <label htmlFor="c4">

                        <input type="checkbox" id="c4" />
                        <span>видача сертифіката про прийняття в експлуатацію закінчених будівництвом об’єктів</span>
                     </label>
                     <label htmlFor="c5">

                        <input type="checkbox" id="c5" />
                        <span>декларація про готовність до експлуатації за рішенням суду</span>
                     </label>
                     <label htmlFor="c6">

                        <input type="checkbox" id="c6" />
                        <span>декларація про готовність до експлуатації об’єкта</span>
                     </label>


                  </div>

               </div>
               <div className={s.applyBtns}>
                  <button
                     className={s.clearFiltersBtn}

                  >Очистити</button>
                  <button
                     className={s.applyFiltersBtn}
                     onClick={() => setCCFilterActive(curr => !curr)}
                  >Застосувати</button>
               </div>
            </div>
         }
      </div>
   );
}

export default CCFilter;
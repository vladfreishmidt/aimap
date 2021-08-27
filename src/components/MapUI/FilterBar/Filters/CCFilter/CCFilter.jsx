import React, {useState} from 'react';
import s from '../CCFilter/CCFilter.module.css';

const CCFilter = () => {
   const [CCFilterActive, setCCFilterActive] = useState(false);

   return (
      <div className={s.filterWrapper}>
         <button className={`${s.btn} ${CCFilterActive ? s.active : ''}`}
                 onClick={() => setCCFilterActive(curr => !curr)}>
            Наслідки
         </button>
         {
            CCFilterActive

            &&

            <div className={s.filterBody}>
               <div className={s.filterOptions}>
                  <div className={s.info}>
                     <img src="http://localhost:3000/assets/icons/cc-info.svg" alt="info"/>
                     <span>
                        Клас наслідків визначає значимість будуємого об’єкту.
                     </span>
                  </div>

                  <div className={s.formGroup}>
                     <label form="c1">

                     <input type="checkbox" id="c1"/>
                        <span>CC1 незначні наслідки</span>
                     </label>
                     <label form="c2">

                     <input type="checkbox" id="c2"/>
                        <span>СС2 середні наслідки</span>
                     </label>
                     <label form="c3">

                     <input type="checkbox" id="c3"/>
                        <span>СС3 значні наслідки</span>
                     </label>


                  </div>

               </div>
               <div className={s.applyBtns}>
                  <button className={s.clearFiltersBtn}>Очистити</button>
                  <button className={s.applyFiltersBtn}>Застосувати</button>
               </div>
            </div>
         }
      </div>
   );
}

export default CCFilter;
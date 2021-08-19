import React, {createRef} from "react";
import s from './Filters.module.css';

const Filters = ({searchText, setSearchText}) => {

   const inputTextRef = createRef();
   return (
      <div className={s.wrapper}>
         <div className={s.top}>
            <div className={s.title}>Карта об’єктів</div>
            <div>
               <button className={s.btn}>
                  <img src="../assets/icons/filter-btn-icon.svg" alt="saved filters"/>
                  <span>Збережені фільтри</span>
               </button>
            </div>
         </div>

         {/*Search Field*/}
         <div className={s.searchInputWrapper}>
            <input value={searchText} onChange={() => setSearchText(inputTextRef.current.value)} ref={inputTextRef}
                   className={s.searchInput} type="text" placeholder={'Локація чи ФІЗ\\ЮР особа'} autoComplete="false"/>
         </div>

         {/*Filter Group*/}
         <div className={s.filterGroup}>
            <button className={s.btn}>Тип об’єкту</button>
            <button className={s.btn}>Рік</button>
            <button className={s.btn}>Наслідки</button>
         </div>

      </div>
   );
}

export default Filters;
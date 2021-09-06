import React, { createRef, useState } from "react";
import s from './Filters.module.css';
import ObjectTypeFilter from './ObjectTypeFilter/ObjectTypeFilter';
import CCFilter from './CCFilter/CCFilter';

const Filters = ({
   searchText,
   setSearchText,
   selectedObjTypeFilters,
   setSelectedObjTypeFilters,
   getFilteredResults,
   getDefaultSearchResults,
   setClickedFilterBtn,
   getDefaultResults,
   setObjectsFoundTotal
}) => {

   const [objectFilterActive, setObjectFilterActive] = useState(false);
   const [CCFilterActive, setCCFilterActive] = useState(false);

   const inputTextRef = createRef();
   return (
      <div className={s.wrapper} >
         <div className={s.top}>
            <div className={s.title}>Карта об’єктів</div>
            <div>
               <button className={s.btn}>
                  <img src="../assets/icons/filter-btn-icon.svg" alt="saved filters" />
                  <span>Збережені фільтри</span>
               </button>
            </div>
         </div>

         {/*Search Field*/}
         <div className={s.searchInputWrapper}>
            <input
               value={searchText}
               onChange={() => setSearchText(inputTextRef.current.value)}
               ref={inputTextRef}
               className={s.searchInput}
               type="text"
               placeholder={'Локація чи ФІЗ\\ЮР особа'}
               autoComplete="false"
            />
         </div>

         {/*Filter Group*/}
         <div className={s.filterGroup}>
            <ObjectTypeFilter
               selectedObjTypeFilters={selectedObjTypeFilters}
               setSelectedObjTypeFilters={setSelectedObjTypeFilters}
               getFilteredResults={getFilteredResults}
               getDefaultSearchResults={getDefaultSearchResults}
               setClickedFilterBtn={setClickedFilterBtn}
               objectFilterActive={objectFilterActive}
               setObjectFilterActive={setObjectFilterActive}
               setCCFilterActive={setCCFilterActive}
               getDefaultResults={getDefaultResults}
               setObjectsFoundTotal={setObjectsFoundTotal}
            />
            {/* <button className={s.btn}>Період</button> */}
            <CCFilter objectFilterActive={objectFilterActive} setObjectFilterActive={setObjectFilterActive} setCCFilterActive={setCCFilterActive} CCFilterActive={CCFilterActive} />
         </div>

      </div>
   );
}

export default Filters;
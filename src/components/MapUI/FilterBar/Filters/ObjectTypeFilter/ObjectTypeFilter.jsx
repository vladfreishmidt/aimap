import React, { useState, useEffect } from 'react';
import s from "./ObjectTypeFilter.module.css";
import ObjectTypeCard from './ObjectTypeCard/ObjectTypeCard';

const ObjectTypeFilter = ({
   selectedObjTypeFilters,
   setSelectedObjTypeFilters,
   getFilteredResults,
   getDefaultSearchResults,
   setClickedFilterBtn,
   objectFilterActive,
   setObjectFilterActive,
   setCCFilterActive,
   getDefaultResults,
   setObjectsFoundTotal
}) => {



   const [filterOptionsData, setFilterOptionsData] = useState([
      {
         id: 1,
         name: "Готелі, пансіонати, гуртожитки",
         icon: "http://localhost:3000/assets/icons/object-types/Hotels.svg"
      },
      {
         id: 2,
         name: "Спортзали, спорт. майданчики",
         icon: "http://localhost:3000/assets/icons/object-types/Gyms.svg"
      },
      {
         id: 3,
         name: "Будинки житлові котеджного типу",
         icon: "http://localhost:3000/assets/icons/object-types/House.svg"
      },
      {
         id: 4,
<<<<<<< HEAD
         name: "Торгові центри,  магазини",
=======
         name: "Торгові центри, магазини",
>>>>>>> new-endpoint
         icon: "http://localhost:3000/assets/icons/object-types/Markets.svg"
      },
      {
         id: 5,
         name: "Лікарні",
         icon: "http://localhost:3000/assets/icons/object-types/Medicine.svg"
      },
      {
         id: 6,
         name: "Транспортна інфраструктура",
         icon: "http://localhost:3000/assets/icons/object-types/Transport.svg"
      },
      {
         id: 7,
         name: "Гаражі, стоянки, СТО",
         icon: "http://localhost:3000/assets/icons/object-types/GAS.svg"
      },
      {
         id: 8,
         name: "Ресторани, кафе, їдальні",
         icon: "http://localhost:3000/assets/icons/object-types/Food.svg"
      }
   ]);

   useEffect(() => {
      setFilterOptionsData((curr) => curr);
   }, [])


   return (
      <div className={s.filterWrapper}>
         <button className={`${s.btn} ${objectFilterActive ? s.active : ''}`}
            onClick={() => {
               setObjectFilterActive(curr => !curr);
               setCCFilterActive(false);
            }
            }>
            {
               selectedObjTypeFilters.length > 0

               &&

               (<span className={s.filtersCount}>{selectedObjTypeFilters.length}</span>)
            }
            Тип об’єкту
         </button>
         {
            objectFilterActive

            &&

            <div className={s.filterBody}>
               <div className={s.filterOptions}>
                  {filterOptionsData.map(option => <ObjectTypeCard
                     key={option.id}
                     option={option}
                     setSelectedObjTypeFilters={setSelectedObjTypeFilters}
                     selectedObjTypeFilters={selectedObjTypeFilters}

                  />)
                  }
               </div>
               <div className={s.applyBtns}>
                  <button
                     className={s.clearFiltersBtn}
                     onClick={() => setSelectedObjTypeFilters([])}
                  >
                     Очистити
                  </button>
                  <button
                     className={s.applyFiltersBtn}
                     onClick={() => {
                        if (selectedObjTypeFilters.length !== 0) {
                           getFilteredResults();
                        }
                        setObjectFilterActive(false);
                        setClickedFilterBtn(curr => !curr)

                        if (selectedObjTypeFilters.length === 0) {
                           getDefaultResults();
                           setObjectsFoundTotal(0);
                        }


                     }}
                  >
                     Застосувати
                  </button>
               </div>
            </div>
         }
      </div>
   )
}

export default ObjectTypeFilter;
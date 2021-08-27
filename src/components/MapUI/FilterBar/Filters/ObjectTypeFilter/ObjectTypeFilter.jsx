import React, {useState} from 'react';
import s from "./ObjectTypeFilter.module.css";
import ObjectTypeCard from './ObjectTypeCard/ObjectTypeCard';

const ObjectTypeFilter = () => {
   const [objectFilterActive, setObjectFilterActive] = useState(false);
   const [filterOptionsData, setFilterOptionsData] = useState([
      {
         id: 1,
         name: "Готелі, пансіонати, гуртожитки",
         icon: ""
      },
      {
         id: 2,
         name: "Спортзали, спорт. майданчики",
         icon: ""
      },
      {
         id: 3,
         name: "Будинки житлові котеджного типу",
         icon: ""
      },
      {
         id: 4,
         name: "Торгові центри,  магазини",
         icon: ""
      },
      {
         id: 5,
         name: "Лікарні",
         icon: ""
      },
      {
         id: 6,
         name: "Транспортна інфраструктура",
         icon: ""
      },
      {
         id: 7,
         name: "Гаражі, стоянки, СТО",
         icon: ""
      },
      {
         id: 8,
         name: "Ресторани, кафе, їдальні",
         icon: ""
      },

   ]);

   const [selectedFilters, setSelectedFilter] = useState([]);

   return (
      <div className={s.filterWrapper}>
         <button className={`${s.btn} ${objectFilterActive ? s.active : ''}`}
                 onClick={() => setObjectFilterActive(curr => !curr)}>Тип об’єкту
         </button>
         {
            objectFilterActive

            &&

            <div className={s.filterBody}>
               <div className={s.filterOptions}>
                  {filterOptionsData.map(option => <ObjectTypeCard
                     key={option.id}
                     option={option}
                     setSelectedFilter={setSelectedFilter}
                     selectedFilters={selectedFilters}

                     />)
                  }
               </div>
               <div className={s.applyBtns}>
                  <button className={s.clearFiltersBtn}>Очистити</button>
                  <button className={s.applyFiltersBtn}>Застосувати</button>
               </div>
            </div>
         }
      </div>
   )
}

export default ObjectTypeFilter;
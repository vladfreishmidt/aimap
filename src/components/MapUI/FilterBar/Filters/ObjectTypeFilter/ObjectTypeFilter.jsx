import React, {useState} from 'react';
import s from "./ObjectTypeFilter.module.css";
import ObjectTypeCard from './ObjectTypeCard/ObjectTypeCard';

const ObjectTypeFilter = () => {
   const [objectFilterActive, setObjectFilterActive] = useState(false);
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
         name: "Торгові центри,  магазини",
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
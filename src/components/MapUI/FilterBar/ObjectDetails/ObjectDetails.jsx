import React, {useState} from 'react';
import s from './ObjectDetails.module.css';

const ObjectDetails = ({setObjectDetailsActive, objectDetailedInfo}) => {
   const [activeTab, setActiveTab] = useState('details');

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
               <h4 className={s.title}>
                  HARD CODED TEXT
                  {/*{objectDetailedInfo.object.name}*/}
               </h4>
               <p className={s.description}>
                  HARD CODED TEXT
                  {/*{objectDetailedInfo.object.address}*/}
               </p>
            </div>
         </div>
         <div className={s.content}>
            <div className={s.contentNav}>
               <div className={`${s.contentTabLink} ${activeTab === "details" && s.active}`} onClick={() => {
                  setActiveTab("details")
               }}>Інформація
               </div>
               <div className={`${s.contentTabLink} ${activeTab === "contacts" && s.active}`} onClick={() => {
                  setActiveTab("contacts")
               }}>Контакти
               </div>
            </div>

            {activeTab === "details" ? (
               <div className={s.detailsTab}>
                  <h4 className={s.tabTitle}>
                     Характеристика
                  </h4>
                  <table className={s.tabTable}>
                     <tbody>
                     <tr className={s.tabRow}>
                        <td>Адреса:</td>
                        {/*<td>{objectDetailedInfo.object.address}</td>*/}
                     </tr>
                     <tr className={s.tabRow}>
                        <td>Тип будівництва:</td>
                        <td>Капітальний ремонт</td>
                        { /* STATIC */}
                     </tr>
                     <tr className={s.tabRow}>
                        <td>Клас наслідків:</td>
                        {/*<td>CC{objectDetailedInfo.object.consequence_class}</td>*/}
                     </tr>
                     <tr className={s.tabRow}>
                        <td>Дозвільний документ:</td>
                        <td>ІУ083201228797</td>
                        { /* STATIC */}
                     </tr>
                     <tr className={s.tabRow}>
                        <td>Етап документації:</td>
                        <td>Повідомлення про зміну даних в дозволі на будівельні роботи.</td>
                        { /* STATIC */}
                     </tr>
                     </tbody>
                  </table>

                  <h4 className={s.tabTitle}>
                     Властивості
                  </h4>
                  <table className={s.tabTable}>
                     <tbody>
                     <tr className={s.tabRow}>
                        <td>Кошторисна вартість:</td>
                        <td>1478 тис. грн.</td>
                        { /* STATIC */}
                     </tr>
                     <tr className={s.tabRow}>
                        <td>Кількість поверхів:</td>
                        <td>12</td>
                        { /* STATIC */}
                     </tr>
                     <tr className={s.tabRow}>
                        <td>Загальна площа:</td>
                        <td>383,5 м<sup>2</sup></td>
                        { /* STATIC */}
                     </tr>
                     <tr className={s.tabRow}>
                        <td>Матеріал стін:</td>
                        <td>Цегла</td>
                        { /* STATIC */}
                     </tr>
                     <tr className={s.tabRow}>
                        <td>Етап документації:</td>
                        <td>Повідомлення про зміну даних в дозволі на будівельні роботи.</td>
                        { /* STATIC */}
                     </tr>
                     </tbody>
                  </table>
                  <h4 className={s.tabTitle}>
                     Опис
                  </h4>
                  <div className={`${s.tabRow} ${s.description}`}>
                     <p className={s.tabText}>
                        {/*{objectDetailedInfo.object.description}*/}
                        HARD CODED TEXT
                     </p>

                  </div>
               </div>
            ) : (
               <div className={s.detailsTab}>
                  <h4 className={s.tabTitle}>
                     Заявник_1
                  </h4>
                  <h5 className={s.subTabTitle}>
                     Юридична особа
                  </h5>
                  <div className={s.tabRow}>
                     <div className={s.tabCol}>
                        <p className={s.tabText}>
                           Назва:
                        </p>
                        <p className={s.tabText}>
                           Роль:
                        </p>
                        <p className={s.tabText}>
                           Телефон:
                        </p>
                     </div>
                     <div className={s.tabCol}>
                        <p className={s.tabText}>
                           ТОВ ГРАНДІНВЕСТ
                        </p>
                        <p className={s.tabText}>
                           Забудовник
                        </p>
                        <p className={s.tabText}>
                           + 38 (097) 599-56-09
                        </p>
                     </div>
                  </div>
                  <h5 className={s.subTabTitle}>
                     Фізична особа
                  </h5>
                  <div className={s.tabRow}>
                     <div className={s.tabCol}>
                        <p className={s.tabText}>
                           Назва:
                        </p>
                        <p className={s.tabText}>
                           Роль:
                        </p>
                        <p className={s.tabText}>
                           Телефон:
                        </p>
                     </div>
                     <div className={s.tabCol}>
                        <p className={s.tabText}>
                           ТОВ ГРАНДІНВЕСТ
                        </p>
                        <p className={s.tabText}>
                           Забудовник
                        </p>
                        <p className={s.tabText}>
                           + 38 (097) 599-56-09
                        </p>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}

export default ObjectDetails;

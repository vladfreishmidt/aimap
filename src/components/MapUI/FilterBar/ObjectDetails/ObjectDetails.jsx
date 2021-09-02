import React, { useState } from 'react';
import s from './ObjectDetails.module.css';


const ObjectDetails = ({ setObjectDetailsActive, objectDetailedInfo, setCurrentMarkerLatLon, setViewport }) => {
   const [activeTab, setActiveTab] = useState('details');

   return (
      <div className={s.objectDetails}>
         <div className={s.header}>
            <div className={s.top}>
               <img src="../assets/icons/object-types/house.svg" alt="object type" />
               <button className={s.closeBtn} onClick={() => {
                  setObjectDetailsActive((prev) => {
                     return !prev;
                  });
                  setCurrentMarkerLatLon({ lat: 0, lon: 0 });
                  setViewport({
                     latitude: 49.724479188712984,
                     longitude: 30.8935546875,
                     zoom: 5
                  })
               }}>
                  <img src="../../assets/icons/close-object-details.svg" alt="close details" />
               </button>
            </div>
            <div className={s.bottom}>
               <h4 className={s.title}>
                  {objectDetailedInfo.name}
               </h4>
               <p className={s.description}>
                  {objectDetailedInfo.address}
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
                           <td>{objectDetailedInfo.address}</td>
                        </tr>
                        <tr className={s.tabRow}>
                           <td>Тип будівництва:</td>
                           <td>{objectDetailedInfo.construction_type}</td>
                           { /* STATIC */}
                        </tr>
                        <tr className={s.tabRow}>
                           <td>Клас наслідків:</td>
                           <td>CC{objectDetailedInfo.consequence_class}</td>
                        </tr>
                        <tr className={s.tabRow}>
                           <td>Дозвільний документ:</td>
                           <td>{objectDetailedInfo.docs[0].doc_id.toUpperCase()}️</td>
                           { /* STATIC */}
                        </tr>
                        <tr className={s.tabRow}>
                           <td>Етап документації:</td>
                           <td>{objectDetailedInfo.stage_documentation}</td>
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
                           <td>1478 тис. грн. ❗️</td>
                           { /* STATIC */}
                        </tr>
                        <tr className={s.tabRow}>
                           <td>Кількість поверхів:</td>
                           <td>12 ❗</td>
                           { /* STATIC */}
                        </tr>
                        <tr className={s.tabRow}>
                           <td>Загальна площа:</td>
                           <td>383,5 м<sup>2</sup> ❗</td>
                           { /* STATIC */}
                        </tr>
                        <tr className={s.tabRow}>
                           <td>Матеріал стін:</td>
                           <td>Цегла ❗</td>
                           { /* STATIC */}
                        </tr>
                     </tbody>
                  </table>
                  <h4 className={s.tabTitle}>
                     Опис
                  </h4>
                  <div className={`${s.tabRow} ${s.description}`}>
                     <p className={s.tabText}>
                        {objectDetailedInfo.name}
                     </p>

                  </div>
               </div>
            ) : (
               <div className={s.detailsTab}>
                  <h4 className={s.tabTitle}>
                     Заявник
                  </h4>
                  <h5 className={s.contactSubTitle}>Юридична особа</h5>
                  <table className={s.tabTable}>

                     <tbody>
                        <tr className={s.tabRow}>
                           <td>Назва:</td>
                           <td>
                              {
                                 objectDetailedInfo.JP.length === 0 ? "не вказано" : objectDetailedInfo.JP[0].name_short}</td>
                        </tr>
                        <tr className={s.tabRow}>
                           <td>Роль:</td>
                           <td >{objectDetailedInfo.JP.length === 0 ? "не вказано" : objectDetailedInfo.JP[0].role}</td>
                           { /* STATIC */}
                        </tr>
                        { /*  <tr className={s.tabRow}>
                        <td>Телефон:</td>
                        <td>❗️</td>
                        STATIC 
                     </tr>*/}

                     </tbody>
                  </table>

                  <h5 className={s.contactSubTitle}>
                     Фізична особа
                  </h5>
                  <table className={s.tabTable}>
                     <tbody>
                        <tr className={s.tabRow}>
                           <td>Назва</td>
                           <td >{objectDetailedInfo.NP.length === 0 ? "не вказано" : objectDetailedInfo.NP[0].fio}</td>
                        </tr>
                        <tr className={s.tabRow}>
                           <td>Роль:</td>
                           <td >{objectDetailedInfo.NP.length === 0 ? "не вказано" : objectDetailedInfo.NP[0].role}</td>
                           { /* STATIC */}
                        </tr>
                        { /* <tr className={s.tabRow}>
                           <td>Телефон:</td>
                           <td>❗️</td>
                            STATIC 
                        </tr>*/}
                     </tbody>
                  </table>
               </div>
            )}
         </div>
      </div>
   )
}

export default ObjectDetails;

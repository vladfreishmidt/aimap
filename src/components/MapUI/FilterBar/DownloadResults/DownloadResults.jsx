import React from 'react';
import s from './DownloadResults.module.css';

const DownloadResults = ({ objectDetailsActive, objectsFoundTotal }) => {
   return (
      <div className={s.DownloadResults}>

         {/* Pagination */}
         {!objectDetailsActive && <div className={s.pagination}>
            <div className={s.label}>
               Результат: <span className={s.num}>{objectsFoundTotal ? objectsFoundTotal : '>1000'} об’єктів</span>
            </div>
            {objectsFoundTotal > 20 &&
               <div className={s.pagesNum}>
                  <div className={s.currentPage}>
                     1 з {Math.ceil(objectsFoundTotal / 20)}
                  </div>
                  <div className={s.pagesButtons}>
                     <button className={s.arrowBtn}>
                        <img src="../assets/icons/pagination-prev.svg" alt="pagination prev" className="arrowImg" />
                     </button>
                     <button className={s.arrowBtn}>
                        <img src="../assets/icons/pagination-next.svg" alt="pagination next" className="arrowImg" />
                     </button>
                  </div>
               </div>
            }
         </div>}

         {/* Download button */}
         <div className={s.downloadBtnWrapper}>
            <button className={s.downloadBtn}>
               <span>Завантажити дані</span>
               <img className={s.downloadIcon} src="../assets/icons/download-arrow.svg" alt="Download" />
            </button>
         </div>
      </div>
   )
}

export default DownloadResults;
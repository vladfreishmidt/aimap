import React from 'react';
import s from './ProfileMenu.module.css'

const ProfileMenu = ({setFilterBarActive, filterBarActive}) => {
   return (
      <div className={`${s.profileMenu} ${filterBarActive ? s.smallerNav : ''}`}>
         <button
            className={`${s.filterTriggerBtn} ${filterBarActive ? s.smallBtn : ''}`}
            onClick={() =>
               setFilterBarActive((current) => {
                  return !current;
               })
            }>
            <img className={s.filterTriggerIcon} src="../assets/icons/arrow-left.svg" alt="close"/>
            <span>Показати список</span>
         </button>

         <nav className={s.userSettingsMenu}>
            <div>
               <button className={s.userMenuBtn}>
                  <img src="../assets/icons/usernav-bell.svg" alt="notifications"/>
               </button>
            </div>
            <div>
               <button className={s.userMenuBtn}>
                  <img src="../assets/icons/usernav-question-mark.svg" alt="help"/>
               </button>
            </div>
            <div>
               <button className={s.userMenuBtn}>
                  <img src="../assets/icons/usernav-settings.svg" alt="help"/>
               </button>
            </div>
            <div>
               <button className={s.profileSettingsTrigger}>
                  <img className={s.profileSettingsPhoto} src="../assets/images/profileAvatar.jpg" alt="profile"/>
                  <div>

                  </div>
               </button>
            </div>
         </nav>
      </div>
   );
}

export default ProfileMenu;
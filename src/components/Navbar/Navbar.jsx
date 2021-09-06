import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
   return (
      <nav className={s.nav}>
         <div className={s.top}>
            <NavLink
               to="/"
               className={s.logo}
            >
               <img src="../../assets/images/logo.svg" alt="aimap logo"/>
            </NavLink>
            <NavLink
               to="/map"
               className={s.link}
               activeClassName={s.active}
            >
               <svg className={s.icon} width="24" height="24" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M2 5L9 2L15 5L21.303 2.299C21.3791 2.26638 21.4621 2.25317 21.5445 2.26054C21.627 2.26792 21.7063 2.29565 21.7754 2.34124C21.8445 2.38684 21.9012 2.44888 21.9404 2.5218C21.9796 2.59471 22.0001 2.67622 22 2.759V19L15 22L9 19L2.697 21.701C2.62091 21.7336 2.53792 21.7468 2.45547 21.7395C2.37301 21.7321 2.29368 21.7044 2.22459 21.6588C2.1555 21.6132 2.09881 21.5511 2.05961 21.4782C2.02041 21.4053 1.99993 21.3238 2 21.241V5ZM16 19.395L20 17.681V5.033L16 6.747V19.395ZM14 19.264V6.736L10 4.736V17.264L14 19.264ZM8 17.253V4.605L4 6.319V18.967L8 17.253Z"
                  />
                  <defs>
                     <linearGradient id="paint0_linear" x1="2" y1="2" x2="26.0793" y2="10.6686"
                                     gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F78D61"/>
                        <stop offset="1" stopColor="#ED6044"/>
                     </linearGradient>
                  </defs>
               </svg>
               <span className={s.text}>Карта</span>
            </NavLink>
            <NavLink
               to="/dashboard"
               className={s.link}
               activeClassName={s.active}
            >
               <svg className={s.icon} width="16" height="18" viewBox="0 0 16 18"
                    xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M15.2729 0V6H0.727497V0H15.2729ZM2.34366 2H13.6568V4H2.34366V2Z"/>
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M15.2729 8V18H8.8083V8H15.2729ZM10.4245 10H13.6568V16H10.4245V10Z"/>
                  <path d="M0.727497 8H7.19214V10H0.727497V8Z"/>
                  <path d="M7.19214 12H0.727497V14H7.19214V12Z"/>
                  <path d="M0.727497 16H7.19214V18H0.727497V16Z"/>
               </svg>
               <span className={s.text}>Дашборд</span>
            </NavLink>
         </div>
         <div className={s.bottom}>
            <div className={s.chatBox}>
               <img src="../../assets/icons/nav-chat.svg" alt="web-chat"/>
            </div>
         </div>

      </nav>
   );
}

export default Navbar;



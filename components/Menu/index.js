import menu from './menu.module.css'
import { useState } from "react";
import {RiPhoneFill, RiMailFill} from 'react-icons/ri'
import Link from "next/link";
import Alert from '../Alert'

const Menu = () =>{
  const [activeMenu,setActiveMenu] = useState(false);
   const  [alertMsg,setAlertMsg] = useState('')
   const [alertTrue,setAlertTrue] = useState(false)
   const copyLink = async (link) => {
     await navigator.clipboard.writeText(link);
     setAlertMsg('Copiado!')
     setAlertTrue(true)
   };
  
  return (
    <header className={menu.container}>
      {alertTrue && <Alert error={alertMsg} setShowError={setAlertTrue} />}
      <div>
        <div className={menu.contact}>
          <a href="#">
            <img
              src="/Icons/fav_light.png"
              style={{ cursor: "pointer", width: 40, height: 40 }}
            />
          </a>
          <span onClick={() => copyLink("+258820913596")}>
            <RiPhoneFill size={25} color="#FF3857" /> +258 820913596
          </span>
          <span>
            <a href="mailto:contato@athsec.com">
              <RiMailFill size={25} color="#FF3857" />
              &#10;&#10; contato@athsec.com
            </a>{" "}
          </span>
        </div>
      </div>
      <div className={menu.menu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="50"
          viewBox="0 0 30 50"
          fill="none"
          onClick={() => setActiveMenu(true)}
        >
          <path
            d="M0 9.08805C0 7.5348 1.25916 6.27563 2.81241 6.27563C4.36567 6.27563 5.62483 7.5348 5.62483 9.08805V41.8143C5.62483 43.3676 4.36567 44.6267 2.81241 44.6267C1.25916 44.6267 0 43.3676 0 41.8143V9.08805Z"
            fill="#FF2E47"
          />
          <rect
            x="11.8784"
            width="5.62483"
            height="38.3511"
            rx="2.81241"
            fill="#FF2E47"
          />
          <rect
            x="24.1689"
            y="11.6489"
            width="5.62483"
            height="38.3511"
            rx="2.81241"
            fill="#FF2E47"
          />
        </svg>
      </div>
      <section
        className={
          activeMenu ? `${menu.menuItem}` : `${menu.menuItem} ${menu.active}`
        }
      >
        <div className={menu.menuClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="50"
            viewBox="0 0 30 50"
            fill="none"
            style={{
              cursor: "pointer",
              transform: "rotate(270deg)",
              transition: "all 1s",
            }}
            onClick={() => setActiveMenu(false)}
          >
            <path
              d="M0 9.08805C0 7.5348 1.25916 6.27563 2.81241 6.27563C4.36567 6.27563 5.62483 7.5348 5.62483 9.08805V41.8143C5.62483 43.3676 4.36567 44.6267 2.81241 44.6267C1.25916 44.6267 0 43.3676 0 41.8143V9.08805Z"
              fill="#F9F9F9"
            />
            <rect
              x="11.8784"
              width="5.62483"
              height="38.3511"
              rx="2.81241"
              fill="#F9F9F9"
            />
            <rect
              x="24.1689"
              y="11.6489"
              width="5.62483"
              height="38.3511"
              rx="2.81241"
              fill="#F9F9F9"
            />
          </svg>
        </div>
        <div className={menu.menuListContainer}>
          <div className={menu.menuList}>
            <ul>
              <Link href="#home">
                <li>Home</li>
              </Link>
              <Link href="#about">
                <li>About</li>
              </Link>
              <Link href="#partners">
                <li>Parceiros</li>
              </Link>
              <Link href="">
                <li>Recursos</li>
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Menu
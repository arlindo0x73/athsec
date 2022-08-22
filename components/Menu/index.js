import menu from './menu.module.css'
import { useState } from "react";
import Link from "next/link";
import Alert from '../Alert'

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <header className={menu.container}>
      <div>
        <div className={menu.fav}>
          <img src="/Icons/fav.png" style={{ cursor: "pointer", width: 100 }} />
        </div>
      </div>

      <div className={menu.menu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="40"
          viewBox="0 0 30 50"
          fill="none"
          onClick={() => setActiveMenu(true)}
        >
          <path
            d="M0 9.08805C0 7.5348 1.25916 6.27563 2.81241 6.27563C4.36567 6.27563 5.62483 7.5348 5.62483 9.08805V41.8143C5.62483 43.3676 4.36567 44.6267 2.81241 44.6267C1.25916 44.6267 0 43.3676 0 41.8143V9.08805Z"
            fill="#000"
          />
          <rect
            x="11.8784"
            width="5.62483"
            height="38.3511"
            rx="2.81241"
            fill="#000"
          />
          <rect
            x="24.1689"
            y="11.6489"
            width="5.62483"
            height="38.3511"
            rx="2.81241"
            fill="#000"
          />
        </svg>
      </div>
      <section className={activeMenu ? `${menu.menuItem}` : `${menu.menuItem} ${menu.active}`}>
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
              <Link href="/home">
                <li>Home</li>
              </Link>
              <Link href="/about">
                <li>Sobre</li>
              </Link>
              <Link href="/partners">
                <li>Parceiros</li>
              </Link>
              <Link href="https://athsec.org/contacts">
                <li>Contactos</li>
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Menu

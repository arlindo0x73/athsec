import menu from './menu.module.css'
import {RiPhoneFill, RiMailFill} from 'react-icons/ri'
import Link from "next/link";
import {useState} from 'react'

const Menu = () =>{
  const [activeMenu,setActiveMenu] = useState(false);

   const copyLink = async (link) => {
     await navigator.clipboard.writeText(link);
     alert("copiado!");
   };
  
  return (
    <header className={menu.container}>
      <div className={menu.contact}>
        <span onClick={() => copyLink("+258820913596")}>
          <RiPhoneFill size={25} color="#00E7FF" /> +258 820913596
        </span>
        <span>
          <a href="mailto:contato@athsec.com">
            <RiMailFill size={25} color="#00E7FF" />
            &#10;&#10; contato@athsec.com
          </a>{" "}
        </span>
      </div>
      <div className={menu.menu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="45"
          onClick={() => setActiveMenu(true)}
        >
          <g>
            <title>Layer 1</title>
            <rect
              rx="4"
              id="svg_2"
              height="30"
              width="5"
              y="6"
              x="6"
              fill="#f2bb02"
            ></rect>
            <rect
              rx="4"
              id="svg_3"
              height="30"
              width="5"
              y="2"
              x="14"
              fill="#f2bb02"
            ></rect>
            <rect
              rx="4"
              id="svg_5"
              height="30"
              width="5"
              y="9"
              x="22"
              fill="#f2bb02"
            ></rect>
          </g>
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
            width="35"
            style={{
              cursor: "pointer",
              transform: "rotate(270deg)",
              transition: "all 1s",
            }}
            height="45"
            onClick={() => setActiveMenu(false)}
          >
            <g>
              <title>Layer 1</title>
              <rect
                rx="4"
                id="svg_2"
                height="30"
                width="5"
                y="6"
                x="6"
                fill="#141E2E"
              ></rect>
              <rect
                rx="4"
                id="svg_3"
                height="30"
                width="5"
                y="2"
                x="14"
                fill="#141E2E"
              ></rect>
              <rect
                rx="4"
                id="svg_5"
                height="30"
                width="5"
                y="9"
                x="22"
                fill="#141E2E"
              ></rect>
            </g>
          </svg>
        </div>
        <div className={menu.menuListContainer}>
          <div className={menu.menuList}>
            <ul>
              <Link href="">
                <li>Home</li>
              </Link>
              <Link href="">
                <li>About</li>
              </Link>
              <Link href="">
                <li>Contact</li>
              </Link>
              <Link href="">
                <li>Blog</li>
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Menu
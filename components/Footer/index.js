import style from "./footer.module.css";
import Link from "next/link";
import { RiInst } from 'react-icons/ri'

const Footer = () => {

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.firstColllum}>
          <div className={style.imageLogo}>
            <img src="/Icons/fav_light.png" alt="" className="" /> ATHSEC
          </div>

          <h4>SUPORTE AO CLIENTE</h4>
          <p>+244 921964331</p>

          <h4>SUPORTE DE VENDAS</h4>
          <p>+244 921964331</p>
        </div>

        <div className={style.secondColllum}>
          <h4>SOLUÇÕES</h4>

          <div className={style.links}>
            <Link href="">Todas as soluções</Link>
            <Link href="">Industriais soluções</Link>
            <Link href="">De conformidade</Link>
          </div>
        </div>

        <div className={style.colllum}>
          <h4>SUPORTE E RECURSOS</h4>

          <div className={style.links}>
            <Link href="">Suporte ao produto</Link>
            <Link href="">Biblioteca re recurso</Link>
            <Link href="">História de Clientes</Link>
            <Link href="">Eventos e WebCats</Link>
            <Link href="">Fundamento de TI e segurança</Link>
            <Link href="">Dados de vulnerabilidade e exploração</Link>
          </div>
        </div>

        <div className={style.colllum}>
          <h4>SOBRE NÓS</h4>

          <div className={style.links}>
            <Link href="">Suporte ao produto</Link>
            <Link href="">Biblioteca re recurso</Link>
            <Link href="">História de Clientes</Link>
            <Link href="">Eventos e WebCats</Link>
            <Link href="">Fundamento de TI e segurança</Link>
            <Link href="">Dados de vulnerabilidade e exploração</Link>
          </div>
        </div>

        <div className={style.colllum}>
          <h4>CONECTE-NOS</h4>

          <div className={style.links}>
            <Link href="/contacts">Contactos</Link>
            <Link href="">Login</Link>
            <Link href="">Carreira</Link>
          </div>

          <div className={style.footerLogos}>
            <a href="https://www.instagram.com/athsecacademy/">
              <div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 0C2.239 0 0 2.239 0 5V13C0 15.761 2.239 18 5 18H13C15.761 18 18 15.761 18 13V5C18 2.239 15.761 0 13 0H5ZM15 2C15.552 2 16 2.448 16 3C16 3.552 15.552 4 15 4C14.448 4 14 3.552 14 3C14 2.448 14.448 2 15 2ZM9 4C11.761 4 14 6.239 14 9C14 11.761 11.761 14 9 14C6.239 14 4 11.761 4 9C4 6.239 6.239 4 9 4ZM9 6C8.20435 6 7.44129 6.31607 6.87868 6.87868C6.31607 7.44129 6 8.20435 6 9C6 9.79565 6.31607 10.5587 6.87868 11.1213C7.44129 11.6839 8.20435 12 9 12C9.79565 12 10.5587 11.6839 11.1213 11.1213C11.6839 10.5587 12 9.79565 12 9C12 8.20435 11.6839 7.44129 11.1213 6.87868C10.5587 6.31607 9.79565 6 9 6Z"
                    fill="#0A182A"
                  />
                </svg>
              </div>
            </a>
            <a href="https://twitter.com/swagneycod3">
              <div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 0h4C0.895 0 0 0.895 0 2V16C0 17.105 0.895 18 2 18H16C17.105 18 18 17.105 18 16V2C18 0.895 17.105 0 16 0ZM14.05 6.514C14.05 6.6 14.05 6.685 14.05 6.857C14.05 10.114 11.564 13.886 7.021 13.886C5.65 13.886 4.364 13.457 3.25 12.772C3.421 12.772 3.679 12.772 3.85 12.772C4.964 12.772 6.079 12.343 6.936 11.743C5.822 11.743 4.965 10.972 4.622 10.029C4.793 10.029 4.965 10.115 5.051 10.115C5.308 10.115 5.48 10.115 5.737 10.029C4.623 9.772 3.766 8.829 3.766 7.629C4.109 7.8 4.452 7.886 4.88 7.972C4.194 7.372 3.766 6.686 3.766 5.829C3.766 5.4 3.852 4.972 4.109 4.629C5.309 6.086 7.109 7.115 9.166 7.2C9.166 7.029 9.08 6.857 9.08 6.6C9.08 5.229 10.194 4.114 11.566 4.114C12.252 4.114 12.937 4.371 13.366 4.885C13.966 4.799 14.48 4.542 14.909 4.285C14.738 4.885 14.309 5.314 13.795 5.656C14.309 5.57 14.738 5.485 15.252 5.227C14.907 5.743 14.479 6.171 14.05 6.514Z"
                    fill="#0A182A"
                  />
                </svg>
              </div>
            </a>
            <a href="https://linkedin.com/company/athsecacademy">
              <div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 0h4C0.895 0 0 0.895 0 2V16C0 17.105 0.895 18 2 18H16C17.105 18 18 17.105 18 16V2C18 0.895 17.105 0 16 0ZM6 14H3.477V7H6V14ZM4.694 5.717C3.923 5.717 3.408 5.203 3.408 4.517C3.408 3.831 3.922 3.317 4.779 3.317C5.55 3.317 6.065 3.831 6.065 4.517C6.065 5.203 5.551 5.717 4.694 5.717ZM15 14H12.558V10.174C12.558 9.116 11.907 8.872 11.663 8.872C11.419 8.872 10.605 9.035 10.605 10.174C10.605 10.337 10.605 14 10.605 14H8.082V7H10.605V7.977C10.93 7.407 11.581 7 12.802 7C14.023 7 15 7.977 15 10.174V14Z"
                    fill="#0A182A"
                  />
                </svg>
              </div>
            </a>
            <a href="https://facebook.com/athsecacademy">
              <div>
                <svg
                  width="11"
                  height="20"
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.525 7.00006H7V5.00006C7 3.96806 7.084 3.31806 8.563 3.31806H10.431V0.138063C9.522 0.0440625 8.608 -0.0019375 7.693 6.25e-05C4.98 6.25e-05 3 1.65706 3 4.69906V7.00006H0V11.0001L3 10.9991V20.0001H7V10.9971L10.066 10.9961L10.525 7.00006Z"
                    fill="#0A182A"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer >
  );
};
/*

*/

export default Footer;

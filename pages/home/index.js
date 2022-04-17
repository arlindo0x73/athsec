import Header from "../../components/Header"
import Menu from '../../components/Menu'
import style from './home.module.css'
import { RiHeadphoneFill } from "react-icons/ri";
import Link from "next/link";
const Home = () =>{
   
  return (
    <main className={style.container}>
      <Header />
      <Menu />
      <div style={{ width: "100%", height: "100vh" }}>
        <div className={style.homeContent}>
          <div className={style.homeContentContainer}>
            <p className={style.info}>
              Protegemos a <br />
              Integridade,
              <br /> Disponibilidade e<br /> Confidencialidade dos
              <br />
              seus Dados.
            </p>
            <p className={style.secondInfo}>
              Nossos serviços SOC são baseados em aprendizado de
              <br /> máquina e monitoramento externo integrado para
            </p>
            <div className={style.homeButtons}>
              <Link href="">
                <button className={style.homeStart}>Iniciar</button>
              </Link>

              <Link href="">
                <button className={style.homePlans}>Planos</button>
              </Link>
            </div>
          </div>
          <div className={style.homeImage}>
            <img src="/Icons/home-image2.png" alt="home-image" />
          </div>
        </div>
      </div>
      <div className={style.secondHomeContent}>
        <div className={style.secondHeader}>
          <div className={style.secondLogoText}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="62"
              viewBox="0 0 50 62"
              fill="none"
            >
              <path
                d="M25 0C11.1944 0 0 11.1944 0 25V44.4444C0 49.0556 3.72222 52.7778 8.33333 52.7778H16.6667V30.5556H5.55556V25C5.55556 14.25 14.25 5.55556 25 5.55556C35.75 5.55556 44.4444 14.25 44.4444 25V30.5556H33.3333V52.7778H44.4444V55.5556H25V61.1111H41.6667C46.2778 61.1111 50 57.3889 50 52.7778V25C50 11.1944 38.8056 0 25 0Z"
                fill="#23EAFF"
              />
            </svg>
            <div>
              <h2>SUPORTE 24h DIA</h2>
              <p>+258 82 091 3596</p>
            </div>
          </div>
          <div className={style.secondLogoText}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="61"
              viewBox="0 0 49 61"
              fill="none"
            >
              <path
                d="M24.5 0.708313L0.125 11.5416V27.7916C0.125 42.8229 10.525 56.8791 24.5 60.2916C38.475 56.8791 48.875 42.8229 48.875 27.7916V11.5416L24.5 0.708313ZM19.0833 44.0416L8.25 33.2083L12.0687 29.3896L19.0833 36.3771L36.9312 18.5291L40.75 22.375L19.0833 44.0416Z"
                fill="#23EAFF"
              />
            </svg>
            <div>
              <h2>CYBER SECURITY</h2>
              <p>soluções e serviços de segurança cibernética</p>
            </div>
          </div>
          <div className={style.secondLogoText}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="62"
              viewBox="0 0 50 62"
              fill="none"
            >
              <path
                d="M25 0C11.1944 0 0 11.1944 0 25V44.4444C0 49.0556 3.72222 52.7778 8.33333 52.7778H16.6667V30.5556H5.55556V25C5.55556 14.25 14.25 5.55556 25 5.55556C35.75 5.55556 44.4444 14.25 44.4444 25V30.5556H33.3333V52.7778H44.4444V55.5556H25V61.1111H41.6667C46.2778 61.1111 50 57.3889 50 52.7778V25C50 11.1944 38.8056 0 25 0Z"
                fill="#23EAFF"
              />
            </svg>
            <div>
              <h2>SUPORTE 24h DIA</h2>
              <p>info@athsec.org</p>
            </div>
          </div>
          <div className={style.secondLogoText}>
            <Link href="">
              <button className={style.secondContactButton}>Contact Us</button>
            </Link>
          </div>
        </div>
        <div className={style.secondHomeContentContainer}>
          <div>
            <p className={style.secondHomeinfo}>
              ATHSec - Information Security Consulting E.I
            </p>
            <p className={style.secondInfo}>
              A Legião The Hacker Security é uma <br />
              empresa Especializada em Cibersegurança e<br /> Operações do
              RedTeam, garantimos que
              <br /> nossos clientes estejam armados para
              <br /> prevenir, detectar e responder
              <br /> continuamente às ameaças cibernéticas.
            </p>
            <div className={style.secondHomeButons}>
              <div className={style.secondButonsContainer}>
                <div style={{ backgroundColor: "#FF3857" }}></div>
                <Link href="">
                  <button className={style.secondButton}>
                    Proactive Cyber security & Red Team
                  </button>
                </Link>
              </div>
              <div className={style.secondButonsContainer}>
                <div style={{ backgroundColor: "#F2BB02" }}></div>
                <Link href="">
                  <button className={style.secondButton}>
                    Managed Detection and Response
                  </button>
                </Link>
              </div>
              <div className={style.secondButonsContainer}>
                <div style={{ backgroundColor: "#FF3857" }}></div>
                <Link href="">
                  <button className={style.secondButton}>
                    Compliance and Risk Managed
                  </button>
                </Link>
              </div>
            </div>
            <div className={style.secondAboutButtonContainer}>
              <Link href="">
                <button className={style.secondAboutButton}>Sobre nos</button>
              </Link>
            </div>
          </div>
          <div className={style.homeImage}>
            <img src="/Icons/second-screen-image.png" alt="second-screen-image" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home


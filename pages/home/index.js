import Header from "../../components/Header"
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import style from './home.module.css'
import { RiHeadphoneFill } from "react-icons/ri";
import Link from "next/link";
const Home = () =>{
 
   
  return (
    <main className={style.container}>
      <Header />
      <Menu />
      <div className={style.firstContainer} id="home">
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
      <div className={style.secondHomeContent} id="about">
        <div className={style.secondHeader}>
          <div className={style.secondLogoText}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="62"
              viewBox="0 0 50 62"
              fill="#DEDCDC"
            >
              <path
                d="M25 0C11.1944 0 0 11.1944 0 25V44.4444C0 49.0556 3.72222 52.7778 8.33333 52.7778H16.6667V30.5556H5.55556V25C5.55556 14.25 14.25 5.55556 25 5.55556C35.75 5.55556 44.4444 14.25 44.4444 25V30.5556H33.3333V52.7778H44.4444V55.5556H25V61.1111H41.6667C46.2778 61.1111 50 57.3889 50 52.7778V25C50 11.1944 38.8056 0 25 0Z"
                fill="#DEDCDC"
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
              fill="#DEDCDC"
            >
              <path
                d="M24.5 0.708313L0.125 11.5416V27.7916C0.125 42.8229 10.525 56.8791 24.5 60.2916C38.475 56.8791 48.875 42.8229 48.875 27.7916V11.5416L24.5 0.708313ZM19.0833 44.0416L8.25 33.2083L12.0687 29.3896L19.0833 36.3771L36.9312 18.5291L40.75 22.375L19.0833 44.0416Z"
                fill="#DEDCDC"
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
              fill="#DEDCDC"
            >
              <path
                d="M25 0C11.1944 0 0 11.1944 0 25V44.4444C0 49.0556 3.72222 52.7778 8.33333 52.7778H16.6667V30.5556H5.55556V25C5.55556 14.25 14.25 5.55556 25 5.55556C35.75 5.55556 44.4444 14.25 44.4444 25V30.5556H33.3333V52.7778H44.4444V55.5556H25V61.1111H41.6667C46.2778 61.1111 50 57.3889 50 52.7778V25C50 11.1944 38.8056 0 25 0Z"
                fill="#DEDCDC"
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
            <p className={style.secondHomeinfo}>Quem Somos?</p>
            <p className={style.secondInfo}>
              ATHSec é uma empresa sediada
              <br /> em Moçambique fundada em 2018 por um
              <br />
              Hacker e Pesquisador de Segurança
              <br /> moçambicano.
            </p>
            <p className={style.secondInfo}>
              Actualmente a ATHSec conta com um
              <br /> exército de hackers Éticos que lutam por
              <br /> um mundo mais seguro, com a missão de
              <br /> resolver desafios em setores críticos do
              <br /> Governo e da Indústria, Inovando em
              <br />
              tecnologias de ponta de segurança
              <br /> cibernética e da informação.
            </p>
            <div className={style.secondAboutButtonContainer}>
              <Link href="">
                <button className={style.secondAboutButton}>Sobre nos</button>
              </Link>
            </div>
          </div>
          <div className={style.homeImage}>
            <img
              src="/Icons/second-screen-image2.png"
              alt="second-screen-image"
            />
          </div>
        </div>
      </div>
      <div className={style.secondHomeContent} id="third">
        <div className={style.secondHomeContentContainer}>
          <div className={`${style.homeImage} ${style.thirdImage}`}>
            <img
              src="/Icons/third-screen-image.png"
              alt="second-screen-image"
            />
          </div>
          <div>
            <p className={style.secondHomeinfo}>ENTERPRIsE CYBER SECURITY</p>
            <p className={style.secondInfo}>
              ATHSec Cyber Defense WorkStation Enterprise, Executa
              <br />
              constantemente Testes de Segurança, executando
              <br /> verificações para detectar vulnerabilidades de segurança e
              <br /> implementar políticas e procedimentos corretos em sua
              <br /> organização. Conte com uma equipe proativa de proteção e
              <br /> prevenção avançada.
            </p>
            <div className={style.buttonsThirdContainer}>
              <div>
                <div className={style.thirdButton}>
                  <div className={style.thirdButtonProfile}></div>
                  <div className={style.thirdButtonInfos}>
                    <Link href="">
                      <h2>CDP/RTO - Penetration Testing e Red Team Ops</h2>
                    </Link>
                    <p>
                      Obtenha uma visão abrangente de sua infraestrutura de
                      segurança cibernética atual.
                    </p>
                  </div>
                </div>
                <div className={style.thirdButton}>
                  <div className={style.thirdButtonProfile}></div>
                  <div className={style.thirdButtonInfos}>
                    <Link href="">
                      <h2>CDCR - Treinamento e Conscientização</h2>
                    </Link>
                    <p>
                      Certifique-se de que suas equipes internas estejam
                      equipadas para ser a primeira linha de defesa contra
                      qualquer possível ataque cibernético.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className={style.thirdButton}>
                  <div className={style.thirdButtonProfile}></div>
                  <div className={style.thirdButtonInfos}>
                    <Link href="">
                      <h2>CDMS - Gerenciamento de Segurança </h2>
                    </Link>
                    <p>
                      Nosso Centro de Operações de Segurança (SOC) trabalha para
                      você 24x7x365 dia – os invasores nunca dormem e nós também
                      não;
                    </p>
                  </div>
                </div>
                <div className={style.thirdButton}>
                  <div className={style.thirdButtonProfile}></div>
                  <div className={style.thirdButtonInfos}>
                    <Link href="">
                      <h2>
                        CDCR - Avaliação da postura de segurança cibernética
                      </h2>
                    </Link>
                    <p>
                      Avalie a maturidade de Segurança e intenda sua postura de
                      risco e exposição a ameaças cibernéticas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.secondHomeContent}>
        <div className={style.fourthInfoContainer}>
          <p
            style={{
              marginTop: 47,
              marginBottom: 0,
              marginLeft: 0,
              marginRight: 0,
            }}
            className={style.secondHomeinfo}
          >
            Escolha um Pacote
          </p>
          <p className={style.secondInfo}>
            Descubra como os especialistas da ATHSec
            <br /> podem ajudar a resolver seus problemas específicos de forma
            rápida e econômica.
          </p>
        </div>
        <div className={style.fourthCardsContainer}>
          <div className={style.fourthCard}>
            <div className={style.fourthCardImage}>
              <img
                src="/Icons/Compliance.png"
                alt="Compliance and Risk Managed"
              />
            </div>
            <div className={style.fourthCardTexts}>
              <h2>Compliance and Risk Managed</h2>
              <p>
                Deixe nos transformar seus sistemas para minimizar o risco e
                torná-los compatível rapidamente.
              </p>
              <Link href="">
                <button>Iniciar</button>
              </Link>
            </div>
          </div>
          <div className={style.fourthCard}>
            <div className={style.fourthCardImage}>
              <img src="/Icons/CyberD.png" alt="Cyber Defense Proactive" />
            </div>
            <div className={style.fourthCardTexts}>
              <h2>Cyber Defense Proactive</h2>
              <p>
                Deixe nos transformar seus sistemas para minimizar o risco e
                torná-los compatível rapidamente.
              </p>
              <Link href="">
                <button>Iniciar</button>
              </Link>
            </div>
          </div>
          <div className={style.fourthCard}>
            <div className={style.fourthCardImage}>
              <img src="/Icons/Management.png" alt="Management Security" />
            </div>
            <div className={style.fourthCardTexts}>
              <h2>Management Security</h2>
              <p>
                Deixe nos transformar seus sistemas para minimizar o risco e
                torná-los compatível rapidamente.
              </p>
              <Link href="">
                <button>Iniciar</button>
              </Link>
            </div>
          </div>
          <div className={style.fourthCard}>
            <div className={style.fourthCardImage}>
              <img
                src="/Icons/Red Team Operations.png"
                alt="Red Team Operations"
              />
            </div>
            <div className={style.fourthCardTexts}>
              <h2>Red Team Operations</h2>
              <p>
                Deixe nos transformar seus sistemas para minimizar o risco e
                torná-los compatível rapidamente.
              </p>
              <Link href="">
                <button>Iniciar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={style.plans}>
        <p className={style.secondHomeinfo}>
          Soluções de segurança customizadas ao seu negócio
        </p>
        <p className={style.secondInfo}>
          Lorem ipsum dolor sit amet sed, consectetur adipiscing elit Lorem
          ipsum dolor sit
          <br /> amet sed, consectetur adipiscing elit Lorem ipsum dolor sit
          amet sed
          <br /> consectetur adipiscing elit Lorem ipsum dolor sit amet sed,
          <br /> consectetur adipiscing elit
        </p>
        <Link href="">
          <button>Planos</button>
        </Link>
      </div>
      <div className={style.members}>
        <div className={style.membersCardsContainer}>
          <div className={style.membersPictures}>
            <img src="/Icons/owner.png" alt="Owener" />
            <h2>COMPANY OWNER</h2>
            <h3>ATHSec E.I</h3>
            <p className={style.secondInfo}>
              Lorem ipsum dolor sit amet sed, consectetur adipiscing elit Lorem
              ipsum dolor sit
              <br /> amet sed, consectetur adipiscing elit Lorem ipsum dolor sit
              amet sed
              <br /> consectetur adipiscing elit Lorem ipsum dolor sit amet sed,
              <br /> consectetur adipiscing elit
            </p>
          </div>
        </div>

        <div className={style.membersIndicator}>
          <div style={{ height: 7 }}></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div id="partners" className={style.partners}>
        <p className={style.secondHomeinfo}>Nossos parceiros</p>
        <span></span>
        <div className={style.partnersImages}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img draggable="false" src="/Icons/partner1.png" width={90} />
            <img draggable="false" src="/Icons/partner1.png" width={90} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img draggable="false" src="/Icons/partner2.png" width={50} />
            <img draggable="false" src="/Icons/partner5.png" width={50} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img draggable="false" src="/Icons/partner3.png" width={90} />
            <img draggable="false" src="/Icons/partner3.png" width={90} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              draggable="false"
              src="/Icons/partner4.png"
              width={50}
              style={{marginBottom:-29,marginTop:0}}
            />
            <div className={style.blankMember}></div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className={style.blankMember}></div>
            <div className={style.blankMember}></div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Home


import Header from "../../components/Header"
import Menu from '../../components/Menu'
import Partners from '../../components/Partners'
import Footer from '../../components/Footer'
import style from './home.module.css'
import Link from "next/link";
import Comment from "../../components/Comment"
import Script from 'next/script'

const Home = () => {
  return (
    <main className={style.container}>
      <Header title="Página inicial" />
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
                <button className={style.homeStart}>INICIAR</button>
              </Link>

              <Link href="#planos">
                <button className={style.homePlans}>PLANOS</button>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="61" viewBox="0 0 49 61" fill="#DEDCDC">
              <path d="M24.5 0.708313L0.125 11.5416V27.7916C0.125 42.8229 10.525 56.8791 24.5 60.2916C38.475 56.8791 48.875 42.8229 48.875 27.7916V11.5416L24.5 0.708313ZM19.0833 44.0416L8.25 33.2083L12.0687 29.3896L19.0833 36.3771L36.9312 18.5291L40.75 22.375L19.0833 44.0416Z" fill="#FF3857" />
            </svg>
            <div>
              <h2>CYBER SECURITY</h2>
              <p>soluções e serviços de <br /> segurança cibernética</p>
            </div>
          </div>

          <div className={style.secondLogoText}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="62" viewBox="0 0 50 62" fill="#DEDCDC">
              <path d="M25 0C11.1944 0 0 11.1944 0 25V44.4444C0 49.0556 3.72222 52.7778 8.33333 52.7778H16.6667V30.5556H5.55556V25C5.55556 14.25 14.25 5.55556 25 5.55556C35.75 5.55556 44.4444 14.25 44.4444 25V30.5556H33.3333V52.7778H44.4444V55.5556H25V61.1111H41.6667C46.2778 61.1111 50 57.3889 50 52.7778V25C50 11.1944 38.8056 0 25 0Z" fill="#FF3857" />
            </svg>
            <div>
              <h2>LINHA DO CLIENTE</h2>
              <p>+258 82 091 3596</p>
            </div>
          </div>

          <div className={style.secondLogoText}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="62" viewBox="0 0 50 62" fill="#DEDCDC">
              <path d="M25 0C11.1944 0 0 11.1944 0 25V44.4444C0 49.0556 3.72222 52.7778 8.33333 52.7778H16.6667V30.5556H5.55556V25C5.55556 14.25 14.25 5.55556 25 5.55556C35.75 5.55556 44.4444 14.25 44.4444 25V30.5556H33.3333V52.7778H44.4444V55.5556H25V61.1111H41.6667C46.2778 61.1111 50 57.3889 50 52.7778V25C50 11.1944 38.8056 0 25 0Z" fill="#FF3857" />
            </svg>
            <div>
              <h2>SUPORTE 24h DIA</h2>
              <p>info@athsec.org</p>
            </div>
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
              <Link href="about">
                <button className={style.secondAboutButton}>Sobre nos</button>
              </Link>
            </div>
          </div>
          <div className={style.homeImage}>
            <img src="/Icons/second-screen-image2.png" alt="second-screen-image"
            />
          </div>
        </div>
      </div>
      <div className={style.secondHomeContent} style={{ margin: '30rem' }} id="third">
        <div className={style.secondHomeContentContainer}>
          <div className={`${style.homeImage} ${style.thirdImage}`}>
            <img src="/Icons/third-screen-image.png" alt="second-screen-image"
            />
          </div>
          <div>
            <p className={style.secondHomeinfo}>Enterprise Cyber Security</p>
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
        <div className={style.fourthInfoContainer} id="planos">
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
              <img src="/Icons/Compliance.png" alt="Compliance and Risk Managed" />
            </div>
            <div className={style.fourthCardTexts}>
              <h2>Enterprise Cyber Security</h2>
              <p>
                Deixe nos transformar seus sistemas para minimizar o risco e
                torná-los compatível rapidamente.
              </p>
              <Link href="/enterprise">
                <button>Iniciar</button>
              </Link>
            </div>
          </div>
          <div className={style.fourthCard}>
            <div className={style.fourthCardImage}>
              <img src="/Icons/CyberD.png" alt="Security Testing" />
            </div>
            <div className={style.fourthCardTexts}>
              <h2>Security Testing and Assements</h2>
              <p>
                Deixe nos transformar seus sistemas para minimizar o risco e
                torná-los compatível rapidamente.
              </p>
              <Link href="/security-testing">
                <button>Iniciar</button>
              </Link>
            </div>
          </div>

          <div className={style.fourthCard}>
            <div className={style.fourthCardImage}>
              <img src="/Icons/Red Team Operations.png" alt="MDR" />
            </div>
            <div className={style.fourthCardTexts}>
              <h2>MDR - Managed Detection and Response</h2>
              <p>
                Deixe nos transformar seus sistemas para minimizar o risco e
                torná-los compatível rapidamente.
              </p>
              <Link href="/mdr">
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

      <div className="bg-blue py-5">
        <div className="container py-5">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{ width: '15rem', height: "3px", backgroundColor: '#141E2E' }}></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{ width: '15rem', height: "3px", backgroundColor: '#141E2E' }}></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" style={{ width: '15rem', height: "3px", backgroundColor: '#141E2E' }}></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active py-5">
                <Comment image="/Icons/owner.png" author="Código Negro" job="Pentester" text="Lorem ipsum dolor sit amet sed, consectetur adipiscing elit Lorem ipsum dolor sit" />
              </div>
              <div className="carousel-item py-5">
                <Comment image="/Icons/owner.png" author="Ariel Chama" job="Programador" text="Lorem ipsum dolor sit amet sed, consectetur adipiscing elit Lorem ipsum dolor sit" />
              </div>
              <div className="carousel-item py-5">
              <Comment image="/Icons/owner.png" author="Anastácio Paulino" job="Programdor" text="Lorem ipsum dolor sit amet sed, consectetur adipiscing elit Lorem ipsum dolor sit" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Partners />
      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integridade="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/ t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous" />
    </main>
  );
}

export default Home


import Header from "../../components/Header"
import Menu from '../../components/Menu'
import Partners from '../../components/Partners'
import Footer from '../../components/Footer'
import style from './home.module.css'
import Link from "next/link";
import Image from "next/image"
import Comment from "../../components/Comment"
import Script from 'next/script'

const Home = () => {
  return (
    <main className={style.container}>
      <Header title="ATHSec" />
      <Menu />
      <div className={style.firstContainer} id="home">
        <div className={style.homeContent}>
          <div className={style.homeContentContainer}>
            <h2 className={style.info}>
              Nós colocamos o<br /> seu negocio sob <br /> nossa proteção
            </h2>

            <p className={style.secondInfo} style={{ width: '20rem' }}>
              Damos às organizações a confiança de que
              estão preparadas para combater os
              adversários modernos.
            </p>
            <div className={style.homeButtons}>
              <Link href="/contacts">
                <button className={style.homeStart}>INICIAR</button>
              </Link>

              <Link href="#planos">
                <button className={style.homePlans}>PLANOS</button>
              </Link>
            </div>
          </div>
          <div className={style.homeImage}>
            <Image src="/Icons/1.png" width="550" height="550" alt="" />
          </div>
        </div>
      </div>

      <div className={style.secondHomeContent} id="about">
        <div className={style.secondHeader}>
          <div className={style.secondLogoText}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="62" viewBox="0 0 50 62" fill="#DEDCDC">
              <path d="M25 0C11.1944 0 0 11.1944 0 25V44.4444C0 49.0556 3.72222 52.7778 8.33333 52.7778H16.6667V30.5556H5.55556V25C5.55556 14.25 14.25 5.55556 25 5.55556C35.75 5.55556 44.4444 14.25 44.4444 25V30.5556H33.3333V52.7778H44.4444V55.5556H25V61.1111H41.6667C46.2778 61.1111 50 57.3889 50 52.7778V25C50 11.1944 38.8056 0 25 0Z" fill="#000" />
            </svg>
            <div>
              <h2>SUPORTE</h2>
              <p>+258 82 091 3596</p>
            </div>
          </div>

          <div className={style.secondLogoText}>
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="61" viewBox="0 0 49 61" fill="#DEDCDC">
              <path d="M24.5 0.708313L0.125 11.5416V27.7916C0.125 42.8229 10.525 56.8791 24.5 60.2916C38.475 56.8791 48.875 42.8229 48.875 27.7916V11.5416L24.5 0.708313ZM19.0833 44.0416L8.25 33.2083L12.0687 29.3896L19.0833 36.3771L36.9312 18.5291L40.75 22.375L19.0833 44.0416Z" fill="#000" />
            </svg>
            <div>
              <h2>CYBER SECURITY</h2>
              <p>soluções e serviços de <br /> segurança cibernética</p>
            </div>
          </div>

          <div className={style.secondLogoText}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="62" viewBox="0 0 50 62" fill="#DEDCDC">
              <path d="M25 0C11.1944 0 0 11.1944 0 25V44.4444C0 49.0556 3.72222 52.7778 8.33333 52.7778H16.6667V30.5556H5.55556V25C5.55556 14.25 14.25 5.55556 25 5.55556C35.75 5.55556 44.4444 14.25 44.4444 25V30.5556H33.3333V52.7778H44.4444V55.5556H25V61.1111H41.6667C46.2778 61.1111 50 57.3889 50 52.7778V25C50 11.1944 38.8056 0 25 0Z" fill="#000" />
            </svg>
            <div>
              <h2>SUPORTE</h2>
              <p>info@athsec.org</p>
            </div>
          </div>
        </div>

        <div className={style.secondHomeContentContainerOther}>
          <div style={{ width: '27rem' }}>
            <h2 className={style.secondHomeinfo}>Repense na sua segurança</h2>
            <p className={style.secondInfo}>
              Na ATHSec trabalhamos de forma
              escalável e adaptátiva,
              combinamos a nossa inteligência, estratégia
              e alinhamos com os objetivos do seu negócio.
            </p>

            <p className={style.secondInfo}>
              Ajudamos as organizações a reduzir o tempo de
              inatividade, maximizar a capacidade de produção,
              otimizar o custo de manutenção dos ativos e acelerar
              a sua transformação digital, com a Cyber
              Defense Enterprise ajudamos as empresas diante da <b>incerteza!</b>
            </p>

            <div className={style.secondAboutButtonGroup}>
              <Link href="/enterprise">
                <button className={style.secondAboutButton}>Enterprise</button>
              </Link>
            </div>
          </div>
          <div className={style.homeImage}>
            <Image src="/Icons/8.png" width="632" height="529" alt="" />
          </div>
        </div>
      </div>

      <div className={style.thirdHomeContent} id="third">
        <div className={style.secondHomeContentContainer}>
          <div className={`${style.homeImage} ${style.thirdImage}`}>
            <Image src="/Icons/6.png" width="550" height="550" alt="" />
          </div>
          <div>
            <h2 className={style.thirdHomeinfo}>Deixe-nos resolver<br /> seus desafios de segurança</h2>
            <p className={style.thirdInfo}>
              Defendemos e protejemos seus ativos digitais <br /> contra ataques maliciosos de adversários.
            </p>
            <div className={style.buttonsThirdContainer}>
              <div>
                <div className={style.thirdButton}>
                  <div className={style.thirdButtonProfile}></div>
                  <div className={style.thirdButtonInfos}>
                    <Link href="">
                      <h2>Nós arquitetamos</h2>
                    </Link>
                    <p>
                      E implementamos uma postura geral de segurança cibernética Empresarial.
                    </p>
                  </div>
                </div>
                <div className={style.thirdButton}>
                  <div className={style.thirdButtonProfile}></div>
                  <div className={style.thirdButtonInfos}>
                    <Link href="">
                      <h2>Nós prevenimos</h2>
                    </Link>
                    <p>
                      Identificamos e erradicamos ameaças, nos aprofundamos em sua
                      infraestrutura de TI para gerenciar seus riscos,
                      exposição de dados e prevenir ataques antes que eles aconteçam.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className={style.thirdButton}>
                  <div className={style.thirdButtonProfile}></div>
                  <div className={style.thirdButtonInfos}>
                    <Link href="">
                      <h2>Nós detectamos</h2>
                    </Link>
                    <p>
                      Usamos detecção avançada de ameaças em profundidade
                      com inteligência e caça de ameaças proprietárias.
                    </p>
                  </div>
                </div>
                <div className={style.thirdButton}>
                  <div className={style.thirdButtonProfile}></div>
                  <div className={style.thirdButtonInfos}>
                    <Link href="">
                      <h2>
                        & Reagimos 24x7
                      </h2>
                    </Link>
                    <p>
                      Você pode se conectar com nossa equipe de Segurança 24x7,
                      ajudamos as organizações no momento de crise, no caso de
                      paralisação, ajudamos as organizações a retornarem às
                      suas atividades no menor tempo possível após um incidente cibernético
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.fourthHomeContent}>
        <div className={style.fourthInfoContainer} id="planos">
          <h2 className={style.secondHomeinfo}>
            Permita-nos combater as<br /> ameaças digitais com você
          </h2>
          <p className={style.secondInfo}>
            Fornecemos aos nossos clientes serviços de segurança cibernética de <br />
            última geração para ajudá-los a entender suas ameaças e combatê-las efetivamente
          </p>
        </div>
        <div className={style.fourthCardsContainer}>
          <div className={style.fourthCard}>
            <div className={style.fourthCardImage}>
              <img src="/Icons/Compliance.png" alt="Enterprise" />
            </div>
            <div className={style.fourthCardTexts}>
              <h2>Defesa cibernética empresarial</h2>
              <p>
                Projetamos um ambiente arquitetônico de segurança cibernética empresarial.
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
              <h2>Teste de Penetração / Avaliação de Vulnerabilidade</h2>
              <p>
                Identificamos proativamente ameaças, vulnerabilidades e riscos de segurança cibernética.
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
              <h2>Detecção e resposta gerenciadas</h2>
              <p>
                Rastreamos, caçamos e erradicamos ameaças.
              </p>
              <Link href="/mdr">
                <button>Iniciar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={style.plans}>
        <h2 className={`${style.secondHomeinfo} text-center`}>
          Soluções de segurança customizadas<br /> ao seu negócio
        </h2>
        <p className={style.secondInfo}>
          Nossos especialistas estão prontos para adaptar nossas soluções de<br />
          serviços de segurança para atender às necessidades de sua organização.
        </p>
        <Link href="/contacts">
          <button>Contactos</button>
        </Link>
      </div>

      <Partners />
      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integridade="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/ t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous" />
    </main>
  );
}

export default Home


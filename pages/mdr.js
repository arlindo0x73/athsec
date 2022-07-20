import React from 'react'
import Header from "../components/Header"
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import styleMain from './styles/services.module.css'
import Link from "next/link";

const index = () => {
  return (
    <main className={styleMain.container}>
      <Header title="Cyber defense management" />
      <Menu />
      <section className={styleMain.containerOther} style={{ marginTop: '4rem' }}>
        <div className={styleMain.row}>
          <div className={styleMain.rowContent}>
            <h2 className={styleMain.rowContentTitle}>
              Cyber Defense Managemant<br />
              Detecte e responda<br />
              Ameaças de segurança
            </h2>
            <p className={styleMain.rowContentText}>
              Avalie totalmente as capacidades de detecção e resposta<br />
              de ameaças da sua organização.
            </p>
            <Link href="">
              <button className={styleMain.button}>Iniciar</button>
            </Link>
          </div>
          <div className={styleMain.rowImage}>
            <img src="/Icons/cloud-computing.png" className="" alt="" />
          </div>
        </div>
      </section>

      <div className={styleMain.containerOther}>
        <div className={styleMain.row} >
          <div className={styleMain.rowImage}>
            <img src="/Icons/09.svg" className="" alt="" />
          </div>
          <div className={styleMain.rowContent}>
            <h2 className={styleMain.rowContentTitle}>
              Cyber Defense Management Security
            </h2>
            <p className={styleMain.rowContentText}>
              A CDPMS - é um plano da ATHSec que identifica ataques que <br />
              possam ocorrer futuramente, monitoram ataques que estejam prestes a <br />
              acontecer, identifica vulnerabilidades locais, e nos informa por meio <br />
              de alertas que podem ser enviados por e-mail, assim protegendo a sua <br />
              empresa 24/dia, 7 dias/semana 30 dias/mês;
            </p>
          </div>
        </div>

        <div className={styleMain.circleInfoContainer}>
          <div className="row p-5">
            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>Regulamento Geral de Proteção de Dados (GDPR)</h2>
                  <p>
                    O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
                    armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>Regulamento Geral de Proteção de Dados (GDPR)</h2>
                  <p>
                    O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
                    armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>Regulamento Geral de Proteção de Dados (GDPR)</h2>
                  <p>
                    O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
                    armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row p-5">
            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>Regulamento Geral de Proteção de Dados (GDPR)</h2>
                  <p>
                    O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
                    armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>Regulamento Geral de Proteção de Dados (GDPR)</h2>
                  <p>
                    O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
                    armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>Regulamento Geral de Proteção de Dados (GDPR)</h2>
                  <p>
                    O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
                    armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row p-5">
            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>Regulamento Geral de Proteção de Dados (GDPR)</h2>
                  <p>
                    O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
                    armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>Regulamento Geral de Proteção de Dados (GDPR)</h2>
                  <p>
                    O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
                    armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>Regulamento Geral de Proteção de Dados (GDPR)</h2>
                  <p>
                    O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
                    armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styleMain.row} >
          <div className={styleMain.rowImage}>
            <img src="/Icons/432.png" className="" alt="" />
          </div>
          <div className={styleMain.rowContent}>
            <h2 className={styleMain.rowContentTitle}>
              Razões para realizar um pentest
            </h2>
            <p className={styleMain.rowContentText}>
              O teste de Penetração da CDP visa identificar vulnerabilidades <br />
              e riscos no sistema que podem afetar a confidencialidade, <br />
              integridade e disponibilidade dos dados. Nessa abordagem contamos <br />
              com analistas de segurança que trabalham como hackers (hackers éticos) <br />
              para identificar as brechas de segurança descobertas <br />
              em suas Infra-estruturas,APP/WEB/MOBILE, etc. <br />
            </p>
          </div>
        </div>

        <div className={styleMain.circleInfoContainer}>
          <div className="row p-5">
            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>Regulamento Geral de Proteção de Dados (GDPR)</h2>
                  <p>
                    O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
                    armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>Regulamento Geral de Proteção de Dados (GDPR)</h2>
                  <p>
                    O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
                    armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>Regulamento Geral de Proteção de Dados (GDPR)</h2>
                  <p>
                    O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
                    armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <h2 className="fw-bold">CYBER DEFENSE MANAGEMENT SECURITY</h2>
            <h4 className="fw-bold">Nossos preços</h4>
            <h5>SEGURANÇA DIGITAL QUE CABE NO SEU BOLSO</h5>
            <p>Protegemos você e a sua família</p>
          </div>
          <div className="col-md-8">
            <div className={styleMain.fourthCardsContainer}>
              <div className={styleMain.cardService}>
                <div className={styleMain.cardServiceImage}>
                  <img src="/Icons/preparation.png" alt="Management Security" className={styleMain.image} />
                </div>
                <div className={styleMain.cardServiceTexts}>
                  <h2>CDMS - SOC</h2>
                  <p>

                  </p>
                  <Link href="">
                    <button>Iniciar</button>
                  </Link>
                </div>
              </div>

              <div className={styleMain.cardService}>
                <div className={styleMain.cardServiceImage}>
                  <img src="/Icons/information-consulting.png" alt="Management Security" className={styleMain.image} />
                </div>
                <div className={styleMain.cardServiceTexts}>
                  <h2>Insfrastructure Penetration Testing</h2>
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
        </div>

        <div className={styleMain.plans}>
          <h3 className={styleMain.secondHomeinfo}>
            Soluções de segurança customizadas ao seu negócio
          </h3>
          <p className={styleMain.secondInfo}>
            Lorem ipsum dolor sit amet sed, consectetur adipiscing elit Lorem
            ipsum dolor sit
            <br /> amet sed, consectetur adipiscing elit Lorem ipsum dolor sit
            amet sed
            <br /> consectetur adipiscing elit Lorem ipsum dolor sit amet sed,
            <br /> consectetur adipiscing elit
          </p>
          <Link href="" className={styleMain.button}>
            <button className={styleMain.button}>Planos</button>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default index
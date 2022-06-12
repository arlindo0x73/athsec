import React from 'react'
import Header from "../../components/Header"
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import style from "./cdms.module.css"
import styleMain from './../static/css/services.module.css'
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

const index = () => {
  return (
    <main className={styleMain.container} style={{ background: "#fff" }}>
      <Header title="Cyber defense management" />
      <Menu />
      <section className={styleMain.containerOther}>
        <div className={styleMain.row}>
          <div className={styleMain.rowContent}>
            <h2 className={styleMain.rowContentTitle}>
              Cyber Defense Managemant<br />
              Detecte e responda<br />
              Ameaças de segurança
            </h2>
            <p>
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

      <div className={styleMain.containerOther} style={{ background: "#141E2E" }} >
        <div className={styleMain.row} >
          <div className={styleMain.rowImage}>
            <img src="/Icons/09.svg" className="" alt="" />
          </div>
          <div className={styleMain.rowContent}>
            <h2 className={styleMain.rowContentTitle} style={{ color: "#fff" }}>
              Cyber Defense Management Security
            </h2>
            <p className={styleMain.textWhite} style={{ color: "#FF2E47" }}>
              A CDPMS - é um plano da ATHSec que identifica ataques que <br />
              possam ocorrer futuramente, monitoram ataques que estejam prestes a <br />
              acontecer, identifica vulnerabilidades locais, e nos informa por meio <br />
              de alertas que podem ser enviados por e-mail, assim protegendo a sua <br />
              empresa 24/dia, 7 dias/semana 30 dias/mês;
            </p>
          </div>
        </div>

        <div className="row p-5">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-2" style={{ background: '#FF2E47', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
              <div className="col-md-10 mt-4">
                <h5 className={styleMain.titleRed}>Teste de penetração de rede interna</h5>
                <p className="text-white">
                  Simulamos ataques do mundo real para fornecer uma avaliação pontual de vulnerabilidades e
                  ameaças à sua infraestrutura de rede interna, Durante esta fase, realizamos varreduras de portas,
                  varreduras de vulnerabilidades e testes para todos os computadores, dispositivos, bancos de dados
                  e equipamentos em redes dentro do escopo.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row">
              <div className="col-md-2" style={{ background: '#FF2E47', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
              <div className="col-md-10 mt-4">
                <h5 className={styleMain.titleRed}>Teste de penetração de rede externa</h5>
                <p className="text-white">
                  Simulamos ataques do mundo real na sua infraestrutura por meio de um Teste
                  externa para descobrir se um invasor pode invadir sua rede por meio dos serviços
                  que escutam seus endereços IP externos, descobrimos todos os ativos voltados para a
                  Internet que um hacker pode encontrar como possíveis pontos de entrada em sua rede.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row">
              <div className="col-md-2" style={{ background: '#FF2E47', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
              <div className="col-md-10 mt-4">
                <h5 className={styleMain.titleRed}>Teste de penetraçãoem aplicações mobile</h5>
                <p className="text-white">
                  O nosso teste de Segurança de APP Mobile e uma solução única combinada
                  com SAST/DAST que permite com que a empresa saiba como modificar o design,
                  o código e a arquitetura antes do lançamento oficial. É importante para
                  organizações que desejam proteger aplicativos móveis contra ataques cibernéticos,
                  O teste de penetração móvel é construído no padrão de verificação de segurança de aplicativos móveis OWASP
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row p-5">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-2" style={{ background: '#FF2E47', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
              <div className="col-md-10 mt-4">
                <h5 className={styleMain.titleRed}>Teste de penetração em aplicatições web</h5>
                <p className="text-white">
                  Com uma solução de Teste de segurança de aplicatições Web da CDP, fornecemos às
                  equipes de desenvolvimento e controle de qualidade um relatório sobre vulnerabilidades
                  críticas a de baixo nivel, alem de simular as ações de um invasor real, fornecemos orientação detalhadas de correção.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row">
              <div className="col-md-2" style={{ background: '#FF2E47', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
              <div className="col-md-10 mt-4">
                <h5 className={styleMain.titleRed}>Teste de engenharia social</h5>
                <p className="text-white">
                  Nossa equipe é especializada em manipulação psicológica, uma Técnica usada
                  por cibercriminosos, nos avaliamos com precisão a capacidade de seus funcionários
                  de detectar e responder a ataques cibernéticos,
                  ensinamos os funcionários a lidar com ataques de engenharia social para estarem preparados.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row">
              <div className="col-md-2" style={{ background: '#FF2E47', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
              <div className="col-md-10 mt-4">
                <h5 className={styleMain.titleRed}>Teste de penetraçãoem pós-comprometimento</h5>
                <p className="text-white">
                  O nosso Teste de Segurança PÔS comprometimento e a melhor solução para a sua organização,
                  Os nossos Analistas de Segurança (Pentesters), começaram como um usuário normal e
                  tentaram obter acesso a outros sistemas, identificaram informações confidenciais,
                  escalar privilégios na rede e migrar para outras áreas da rede usando um sistema local como um Usuário normal.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row p-5">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-2" style={{ background: '#FF2E47', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
              <div className="col-md-10 mt-4">
                <h5 className={styleMain.titleRed}>Cyber Defense endpoint</h5>
                <p className="text-white">
                  Automatize o monitoramento de endpoint para maximizar a segurança local de cada dispositivo.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row">
              <div className="col-md-2" style={{ background: '#FF2E47', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
              <div className="col-md-10 mt-4">
                <h5 className={styleMain.titleRed}>Cyber Defense Testing</h5>
                <p className="text-white">
                  Obtenha uma visão abrangente de sua infraestrutura de segurança cibernética atual.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row">
              <div className="col-md-2" style={{ background: '#FF2E47', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
              <div className="col-md-10 mt-4">
                <h5 className={styleMain.titleRed}>Treinamento e conscientização</h5>
                <p className="text-white">
                  Certifique-se de que suas equipes internas estejam equipadas para ser a primeira linha de defesa contra qualquer possível ataque cibernético.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styleMain.containerOther} style={{ background: "#FF2E47" }}>
        <div className={styleMain.row} >
          <div className={styleMain.rowImage}>
            <img src="/Icons/432.png" className="" alt="" />
          </div>
          <div className={styleMain.rowContent}>
            <h2 className={styleMain.rowContentTitle} style={{ color: "#fff" }}>
              Razões para realizar um pentest
            </h2>
            <p>
              O teste de Penetração da CDP visa identificar vulnerabilidades <br />
              e riscos no sistema que podem afetar a confidencialidade, <br />
              integridade e disponibilidade dos dados. Nessa abordagem contamos <br />
              com analistas de segurança que trabalham como hackers (hackers éticos) <br />
              para identificar as brechas de segurança descobertas <br />
              em suas Infra-estruturas,APP/WEB/MOBILE, etc. <br />
            </p>
          </div>
        </div>

        <div className="row p-5">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-2" style={{ background: '#141E2E', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
              <div className="col-md-10 mt-4">
                <h5 className="fw-bold">Descubra vulnerabilidades críticas em seu ambiente</h5>
                <p>
                  Assim como uma avaliação de vulnerabilidade, um teste de penetração revela se uma organização é potencialmente
                  vulnerável a ataques cibernéticos e fornece recomendações sobre como fortalecer sua postura de segurança.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row">
              <div className="col-md-2" style={{ background: '#141E2E', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
              <div className="col-md-10 mt-4">
                <h5 className="fw-bold">Priorize e enfrente os riscos</h5>
                <p>
                  Um teste de penetração bem executado fornece uma visão geral detalhada das vulnerabilidades exploráveis ​​de sua organização e inclui
                  recomendações acionáveis ​​sobre como você pode otimizar seus níveis de proteção a curto, médio e longo prazo.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row">
              <div className="col-md-2" style={{ background: '#141E2E', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
              <div className="col-md-10 mt-4">
                <h5 className="fw-bold">Atenda à conformidade com os padrões e regulamentos do setor</h5>
                <p>
                  Se  a sua organização precisa cumprir determinados padrões e regulamentações do setor,
                  um teste de penetração realizado regularmente é o primeiro passo para alcançar a conformidade.
                  Estruturas de conformidade comuns incluem ISO 27001, NIST, Payment Card Industry Data
                  Security Standard (PCI DSS), que exige testes de penetração anuais e contínuos
                  (em caso de alterações no sistema ou Actualizações de Segurança).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
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
      </div>

      <div className={styleMain.plans}>
        <p className={styleMain.secondHomeinfo}>
          Soluções de segurança customizadas ao seu negócio
        </p>
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

      <Footer />
    </main>
  )
}

export default index
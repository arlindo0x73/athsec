import React from 'react'
import styleMain from './styles/services.module.css'
import Header from "../components/Header"
import Menu from '../components/Menu'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import Link from "next/link";
import Image from "next/image"

const cdp = () => {
  return (
    <main className={styleMain.container}>
      <Header title="Cyber Defense Security Testing" />
      <Menu />

      <section className={styleMain.containerOther} style={{ marginTop: '4rem' }}>
        <div className={styleMain.row}>
          <div className={styleMain.rowContent}>
            <h2 className={styleMain.rowContentTitle}>
              Teste de Penetração (CDST)
            </h2>
            <p className={styleMain.rowContentText}>
              Obtenha uma visão real de como os invasores podem explorar
              suas vulnerabilidades — e orientação sobre como detê-los.
            </p>
          </div>
          <div className={styleMain.rowImage}>
            <Image src="/Icons/security-1.png" width="550" height="550" alt="" />
          </div>
        </div>
      </section>

      <div className={styleMain.containerOther} >
        <div className={styleMain.row} >
          <div className={styleMain.rowImage}>
            <Image src="/Icons/security-2.png" width="550" height="450" alt="" />
          </div>
          <div className={styleMain.rowContent}>
            <h2 className={styleMain.rowContentTitle}>
              Cyber Defense - Teste de Penetração
            </h2>
            <p className={styleMain.rowContentText}>
              A equipe da ATHSec testará a eficácia das medidas de segurança implementadas,
              identificarão vulnerabilidades e fornecerão conselhos claros para melhoria em um
              relatório completo com um resumo de gerenciamento conciso, uma extensa análise
              de risco para cada resultado e recomendações em nível estratégico, tático e operacional.
            </p>

            <p className={styleMain.rowContentText}>
              Os especialistas da ATHSec utilizam metodologias como: PTES, OSSTMM, OWASP,
              NIST bem como metodologias proprietarias como CDSTM para simular ataques
              do mundo real e identificar possíveis pontos fracos e violações em sua infraestrutura de rede e nuvem.
            </p>
          </div>
        </div>

        <div className={styleMain.circleInfoContainer}>
          <div className="row p-5">
            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>TESTE DE PENETRAÇÃO DE REDE INTERNA</h2>
                  <p>
                    Simulamos ataques do mundo real para fornecer uma avaliação pontual de vulnerabilidades e
                    ameaças à sua infraestrutura de rede interna, Durante esta fase, realizamos varreduras de
                    portas, varreduras de vulnerabilidades e testes para todos os computadores, dispositivos,
                    bancos de dados e equipamentos em redes dentro do escopo.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>TESTE DE PENETRAÇÃO DE REDE EXTERNA</h2>
                  <p>
                    Simulamos ataques do mundo real na sua infraestrutura por meio de um Teste externa para descobrir
                    se um invasor pode invadir sua rede por meio dos serviços que escutam seus endereços
                    IP externos, descobrimos todos os ativos voltados para a Internet que um hacker
                    pode encontrar como possíveis pontos de entrada em sua rede.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>TESTE DE PENETRAÇÃO EM APLICAÇÕES MOBILE</h2>
                  <p>
                    O nosso teste de Segurança de APP Mobile e uma solução única combinada com SAST/DAST
                    que permite com que a empresa saiba como modificar o design, o código e a
                    arquitetura antes do lançamento oficial. É importante para organizações
                    que desejam proteger aplicativos móveis contra ataques cibernéticos,
                    O teste de penetração móvel é construído no padrão de verificação de segurança de aplicativos móveis OWASP
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
                  <h2>TESTE DE PENETRAÇÃO EM APLICAÇÕES WEB</h2>
                  <p>
                    Com uma solução de Teste de segurança de aplicatições Web da CDP, fornecemos às
                    equipes de desenvolvimento e controle de qualidade um relatório sobre
                    vulnerabilidades críticas a de baixo nivel, alem de simular as ações
                    de um invasor real, fornecemos orientação detalhadas de correção.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>TESTE DE ENGENHARIA SOCIAL</h2>
                  <p>
                    Nossa equipe é especializada em manipulação psicológica, uma Técnica usada por cibercriminosos,
                    nos avaliamos com precisão a capacidade de seus funcionários de detectar e responder a ataques cibernéticos de engenharia social.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>TESTE DE PENETRAÇÃO NA NUVEM</h2>
                  <p>
                    Avaliamos os pontos fortes e fracos de um sistema em nuvem para fortalecer sua postura geral de segurança.
                    Identificamos Riscos, vulnerabilidades e lacunas por meio de nossos testes de penetração na nuvem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styleMain.row} >
          <div className={styleMain.rowImage}>
            <Image src="/Icons/security-3.png" width="450" height="550" alt="" />
          </div>
          <div className={styleMain.rowContent}>
            <h2 className={styleMain.rowContentTitle}>
              Descubra vulnerabilidades críticas em seu ambiente
            </h2>
            <p className={styleMain.rowContentText}>
              Assim como uma avaliação de vulnerabilidade, um teste de penetração revela se uma
              organização é potencialmente vulnerável a ataques cibernéticos e fornece recomendações
              sobre como fortalecer sua postura de segurança.
            </p>
          </div>
        </div>

        <div className={`${styleMain.row} ${styleMain.py_1}`} >
          <div className={styleMain.rowImage}>
            <Image src="/Icons/cd.jpg" width="450" height="450" alt="" />
          </div>
          <div className={styleMain.rowContent}>
            <h2 className={styleMain.rowContentTitle}>
              Atenda à conformidade com os padrões e regulamentos do setor
            </h2>
            <p className={styleMain.rowContentText}>
              Se a sua organização precisa cumprir determinados padrões e regulamentações do setor, um teste de
              penetração realizado regularmente é o primeiro passo para alcançar a conformidade. Estruturas de conformidade
              comuns incluem ISO 27001, NIST, Payment Card Industry Data Security Standard (PCI DSS),
              que exige testes de penetração anuais e contínuos (em caso de alterações no sistema ou Actualizações de Segurança).
            </p>
          </div>
        </div>

        <div className={styleMain.plans}>
          <h3 className={styleMain.plansInfo}>
            Obtenha uma cotação de Avaliação de<br /> Vulnerabilidade e Teste de penetração agora 
          </h3>
          <p className={styleMain.secondInfo}>
            Obtenha uma visão geral detalhada das vulnerabilidades exploráveis ​​de
            sua organização e incluindo recomendações<br /> acionáveis ​​sobre como você
            pode otimizar seus níveis de proteção a curto, médio e longo prazo.
          </p>
          <Link href="/contacts" className={styleMain.button} passHref>
            <button className={styleMain.button}>Iniciar</button>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default cdp
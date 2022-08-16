import React from 'react'
import Header from "../components/Header"
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import styleMain from './styles/services.module.css'
import Link from "next/link";
import Image from "next/image"

const index = () => {
  return (
    <main className={styleMain.container}>
      <Header title="Cyber defense management" />
      <Menu />
      <section className={styleMain.containerOther} style={{ marginTop: '4rem' }}>
        <div className={styleMain.row}>
          <div className={styleMain.rowContent}>
            <h2 className={styleMain.rowContentTitle}>
              Cyber Defense Detecção e Resposta Gerenciada (CDMDR)
            </h2>
            <p className={styleMain.rowContentText}>
              Aproveitamos a tecnologia de segurança de ponta combinada com nossa inteligência
              humana para fornecer monitoramento interrupto 24x7 de seus terminais,
              redes, nuvem e identidades para detectar e responder aos ataques cibernéticos mais furtivos e sofisticados.
            </p>
          </div>
          <div className={styleMain.rowImage}>
            <Image src="/Icons/mdr-1.png" width="550" height="550" alt="" />
          </div>
        </div>
      </section>

      <div className={styleMain.containerOther}>
        <div className={styleMain.row}>
          <div className={styleMain.rowImage}>
            <Image src="/Icons/mdr-2.png" width="550" height="450" alt="" />
          </div>
          <div className={styleMain.rowContent}>
            <h2 className={styleMain.rowContentTitle}>
              CD - Detecção e Resposta Gerenciada
            </h2>
            <p className={styleMain.rowContentText}>
              A CDMDR aproveita o conceito de inteligência homem-máquina para fornecer detecção e
              análise precisa de ameaças, bem como assistência de resposta acionável
              para eliminar ameaças e evitar incidentes catastróficos de segurança
              ocorrendo. Além de implementar e aprimorar suas operações de
              segurança e se proteger melhor de um cenário de ameaças cada
              vez maior, Construimos uma equipe de operações de segurança melhor
              composta por equipes internas e especialistas de segurança externos ( Cyber Defenders ).
            </p>
          </div>
        </div>

        <div className={styleMain.circleInfoContainer}>
          <div className="row p-5">
            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>Análise e identificação de ameaças</h2>
                  <p>
                    Detecção, análise e verificação de ameaças 24x7, aproveitando recursos de detecção habilitados
                    para IA e profissionais de segurança experientes para identificar e analisar ameaças com precisão
                    e fornecer notificações em tempo hábil.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>Resposta e correção 24x7</h2>
                  <p>
                    Assistência de resposta a ameaças relevante ao contexto prestada remotamente por nossa equipe
                    de especialistas em segurança para ajudar os clientes a gerenciar e erradicar as ameaças detectadas.
                    Abrange assistência de contenção de emergência, detecção e análise de impacto,
                    investigações de rastreabilidade e recomendações de melhoria.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>Rastreamento de ativos</h2>
                  <p>
                    Revisão inicial e regular dos ativos no escopo para rastrear e identificar alterações não autorizadas,
                    bem como fornecer contexto adequado ao serviço.
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
                  <h2>Cyber Defenders MSS</h2>
                  <p>
                    Ao empregar a ATHSec ( Cyber Defenders ) como provedor de Segurança Gerenciada,
                    as empresas recebem acesso 24 horas por dia a uma equipe de profissionais
                    de segurança experientes e exercícios proativos de caça a ameaças trimestrais,
                    bem como qualquer consultoria ou recomendação relacionada incluída na CDMDR.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className={`col-md-2 ${styleMain.circle}`}></div>
                <div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
                  <h2>Reporte</h2>
                  <p>
                    Tenha acesso à visão geral de segurança em tempo real do ambiente monitorado do cliente,
                    incluindo casos abertos e fechados, visão de segurança dos ativos monitorados, bem como acesso a relatórios regulares.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styleMain.plans}>
          <h3 className={styleMain.plansInfo}>
            Serviços MDR para empresas de qualquer tamanho
          </h3>
          <p className={styleMain.secondInfo}>
            Nossas tecnologias gerenciadas de detecção e resposta e especialistas em
            segurança<br/> atendem seus negócios remotamente para mantê-lo<br/>  protegido para que você possa se concentrar em sua empresa.
          </p>
          <Link href="/contacts" className={styleMain.button}>
            <button className={styleMain.button}>Iniciar</button>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default index
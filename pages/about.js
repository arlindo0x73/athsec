import Header from "../components/Header"
import Menu from '../components/Menu'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import "bootstrap/dist/css/bootstrap.css"
import style from "./styles/others.module.css"
import Link from "next/link"
import Image from "next/image"

const Plans = () => {
  return (
    <main>
      <section className={style.backgroundBanner}>
        <Header title="Sobre" />
        <Menu />
        <div className={style.firstContainer}>
          <div className="container">
            <div className="row py-5">
              <div className="col-md-6 mt-5 text-light">
                <h1 className={style.title}>Seu negócio sob nossa proteção</h1>
                <p className={style.texts}>
                  Cyber Defenders Workstation
                </p>

<<<<<<< HEAD
                <Link href="" passHref>
=======
                <Link href="https://athsec.org/contacts">
>>>>>>> 5e2ea17afbc960d5a34402b99f7ccf323a065af6
                  <button className={style.button}>Saber mais</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6">
              <Image src="/Icons/fav_dark.png" width="490" height="490" alt="" />
            </div>
            <div className="col-md-5 py-5">
              <h1 className="fw-bold mb-5">Quem somos ?</h1>
              <div className={style.texts}>
                <p>
                  ATHSec™ é uma empresa de defesa cibernética que fornece Detecção e Resposta Gerenciadas,
                  Avaliação de Segurança e Design de Arquitetura de
                  Segurança, Trabalhamos para aumentar a resiliência contra a ciberameaças combinando
                  nossas estratégias com seus objetivos de negócio. As equipes de resposta a incidentes da ATHSec
                  ( Cyber Defenders Incident Response ) fornecem resposta rápida 24h/dia e investigação forense de uma violação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="py-5">
          <div className="row">
            <div className="col-md-4 text-center">
              <Image src="/Icons/vision.png" alt="" width={100} height={100} />
              <h5 className="fw-bold">VISÃO</h5>
              <p className="">
                Ser o melhor provedor de valores para pequenas a grandes empresas
                em soluções de Segurança da Informação e Segurança Cibernética para nossos clientes.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <Image src="/Icons/vision.png" alt="" width={100} height={100} />
              <h5 className="fw-bold">Foco no resultado</h5>
              <p className="">
                Nossa equipe tabalha em estreita colaboração com nossos clientes para revisar os requisitos regulatórios, mandatos e
                leis estaduais, bem como as melhores práticas de segurança cibernética, para determinar as melhores soluções.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <Image src="/Icons/prevention.png" alt="" width={100} height={100} />
              <h5 className="fw-bold">Confiabilidade</h5>
              <p className="">
                Nossos clientes podem sempre confiar connosco para cumprir nossos compromissos dentro do prazo e do orçamento.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Partners />
      <Footer />
    </main>
  );
}

export default Plans;

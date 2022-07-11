import Header from "../components/Header"
import Menu from '../components/Menu'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import "bootstrap/dist/css/bootstrap.css"
import style from "./styles/others.module.css"
import Link from "next/link"

const Plans = () => {
  return (
    <main>
      <section className={style.backgroundBanner}>
        <Header title="Sobre" />
        <Menu />
        <div className="container">
          <div className="row p-5">
            <div className="col-md-6 mt-5 text-light">
              <h1 className="fw-bold mb-5">Athsec Information Security Consulting E.I</h1>
              <p className={style.texts}>
                Avalie totalmente as capacidades de detecção e resposta de ameaças da sua organização.
              </p>

              <Link href="">
                <button className={style.button}>Saber mais</button>
              </Link>
            </div>
            <div className="col-md-6 py-5">
              <img src="/Icons/fav_light.png" alt="" className={style.imageSide} />
            </div>
          </div>
        </div>
      </section>

      <div className="">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6">
              <img src="/Icons/about-us.png" alt="" className={style.imageSide} />
            </div>
            <div className="col-md-5 py-5">
              <h1 className="fw-bold mb-5">Quem somos ?</h1>
              <div className={style.texts}>
                <p>
                  ATHSec E.I é uma empresa especializada em Cibersegurança e operações RED Team, garantimos que nossos
                  clientes estejam armados para prevenir, detectar e responder continuamente as ameaças cibernéticas.
                </p>

                <p>
                  Fornecemos um conjunto abrangente de serviços de segurança cibernética para organizações
                  que precisam de ajuda com sua postura de segurança.
                </p>

                <p>Previna dados operacionais e de reputação, previna perdas financerias e clientes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="py-5">
          <div className="row">
            <div className="col-md-4 text-center">
              <img src="/Icons/vision.png" alt="" className="w-25" />
              <h5 className="fw-bold">VISÃO</h5>
              <p className="">
                Ser o melhor provedor de valores para pequenas e grandes empresas
                em soluções de Segurança da Informação e Segurança Cibernética para nossos clientes.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img src="/Icons/vision.png" alt="" className="w-25" />
              <h5 className="fw-bold">Foco no resultado</h5>
              <p className="">
                Nossa equipe tabalha em estreita colaboração com nossos clientes para revisar os requisitos regulatórios, mandatos e
                leis estaduais, bem como as melhores práticas de segurança cibernética, para determinar as melhores soluções.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img src="/Icons/prevention.png" alt="" className="w-25" />
              <h5 className="fw-bold">Confiabilidade</h5>
              <p className="">
                Nossos clientes podem sempre confiar connosco para cumprir nossos compromissos dentro do prazo e do orçamento.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold">Soluções de segurança customizadas para o seu negócio</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quia reiciendis tempore ut libero vel aliquam minus
            repellendus vitae illum, sunt eligendi. Laboriosam voluptate nemo ullam quaerat, modi tempora ad? Lorem ipsum dolor sit amet
          </p>

          <Link href="">
            <button className={style.secondButton}>Saber mais</button>
          </Link>
        </div>
      </div>

      <Partners />
      <Footer />
    </main>
  );
}

export default Plans;
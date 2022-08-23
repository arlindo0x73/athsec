import Header from "../components/Header"
import Menu from '../components/Menu'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import style from "./styles/others.module.css"
import Link from "next/link"
import Image from "next/image"

const partners = () => {
  return (
    <main>
      <section className={style.bannerPartner}>
        <Header title="Parceiros" />
        <Menu />
        <div className={style.firstContainer}>
          <div className="container">
            <div className="row py-5">
              <div className="col-md-6 mt-5 text-light">
                <h1 className={style.title}>Torne-se um parceiro da ATHSec hoje</h1>
                <Link href="/contacts" passHref>
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
            <div className={`col-md-6 ${style.imagePartner}`}>
              <Image src="/Icons/1d.jpg" width="564" height="564" alt="" />
            </div>

            <div className="col-md-5 py-5">
              <h1 className="fw-bold mb-5">Programa de parceiros - CDWPP</h1>
              <div className={style.texts}>
                <p>
                  Como um parceiro Cyber Defense WorkStation - ATHSec, você pode ter certeza de que
                  está oferecendo a segurança mais eficaz que protege totalmente seus negócios.
                  Acreditamos que somente a inovação pode nos diferenciar dos demais.
                  Ao trabalhar com nosso ecossistema de parceiros, podemos abordar
                  coletivamente seus desafios para oferecer soluções eficazes
                  em Relação a Seguraça e Proteção de Dados.
                </p>

                <p>
                  Saiba mais sobre nosso programa de parceiros, preencha o formulário de contato
                  e um membro de nossa equipe entrará em contato para discutir suas necessidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Partners />
      <Footer />
    </main>
  );
}

export default partners;
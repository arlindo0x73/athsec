import Header from "../components/Header"
import Menu from '../components/Menu'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import style from "./styles/others.module.css"
import Link from "next/link"

const contacts = () => {
  return (
    <main>
      <Header title="Contactos" />

      <section className={style.sectionBlue}>
        <Menu />
        <div className={style.firstContainer}>
          <div className="container">
            <div className="row py-5">
              <div className="col-md-6 mt-5 text-light">
                <h1 className={style.title}>Fale conosco e faça um Orçamento </h1>
                <p className={style.texts}>
                  Nossos especialistas estão prontos para adaptar nossas soluções de serviços de segurança para atender às necessidades de sua organização.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={style.smallInfoWhithImage}>
        <div className="container text-center">
          <div className="row mb-5">
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="62" viewBox="0 0 50 62" fill="#141E2E">
                    <path d="M25 0C11.1944 0 0 11.1944 0 25V44.4444C0 49.0556 3.72222 52.7778 8.33333 52.7778H16.6667V30.5556H5.55556V25C5.55556 14.25 14.25 5.55556 25 5.55556C35.75 5.55556 44.4444 14.25 44.4444 25V30.5556H33.3333V52.7778H44.4444V55.5556H25V61.1111H41.6667C46.2778 61.1111 50 57.3889 50 52.7778V25C50 11.1944 38.8056 0 25 0Z" fill="#000" />
                  </svg>
                </div>
                <div className="col-md-6">
                  <h2>CONTACTOS</h2>
                  <p>+258 82 091 3596</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="49" height="61" viewBox="0 0 49 61" fill="#141E2E">
                    <path d="M24.5 0.708313L0.125 11.5416V27.7916C0.125 42.8229 10.525 56.8791 24.5 60.2916C38.475 56.8791 48.875 42.8229 48.875 27.7916V11.5416L24.5 0.708313ZM19.0833 44.0416L8.25 33.2083L12.0687 29.3896L19.0833 36.3771L36.9312 18.5291L40.75 22.375L19.0833 44.0416Z" fill="#000" />
                  </svg>
                </div>
                <div className="col-md-6">
                  <h2>CYBER SECURITY</h2>
                  <p>soluções e serviços de segurança cibernética</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="62" viewBox="0 0 50 62" fill="#141E2E">
                    <path d="M25 0C11.1944 0 0 11.1944 0 25V44.4444C0 49.0556 3.72222 52.7778 8.33333 52.7778H16.6667V30.5556H5.55556V25C5.55556 14.25 14.25 5.55556 25 5.55556C35.75 5.55556 44.4444 14.25 44.4444 25V30.5556H33.3333V52.7778H44.4444V55.5556H25V61.1111H41.6667C46.2778 61.1111 50 57.3889 50 52.7778V25C50 11.1944 38.8056 0 25 0Z" fill="#000" />
                  </svg>
                </div>
                <div className="col-md-6">
                  <h2>CONTACTOS</h2>
                  <p>info@athsec.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.calendly}>
        <div className="calendly-inline-widget" data-url="https://calendly.com/athsec/consulting" style={{ minWidth: "320px", height: "630px" }}></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </div>

      <div className={style.sectionBluepartner}>
        <Partners />
        <Footer />
      </div>
    </main>
  )
}

export default contacts

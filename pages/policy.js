import React from 'react'
import Header from "../components/Header"
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import style from "./styles/others.module.css"

const policy = () => {
  return (
    <main>
      <Header title="Políticas de privacidade" />
      <Menu />
      <section>
        <div className={style.content}>
          <div>
            <h1 className={style.titlePolicy}>
              Políticas de Privacidade
            </h1>
            <p className={style.texts}>
              A sua privacidade é importante para nós. A política de privacidade da  ATHSec -
              Information Security Consulting respeita a sua privacidade em relação a qualquer informação sua que possamos coletar.
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe
              fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu
              conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
            </p>

            <p className={style.texts}>
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado.
              Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos,
              bem como acesso, divulgação, cópia, uso ou modificação não autorizada.
            </p>

            <p className={style.texts}>
              Para quaisquer dúvidas ou preocupações sobre a política de privacidade, envie um e-mail para: <strong>privacy@athsec.org</strong>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default policy
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
              Título principal
            </h1>
            <h2 className={style.subTitlePolicy}>
              Segundo título
            </h2>
            <p className={style.texts}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deserunt temporibus tempora,
              culpa quod quos assumenda rerum voluptates animi vitae totam labore qui ipsam!
              Animi ea ab asperiores sapiente quisquam.
            </p>

            <p className={style.texts}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti doloribus velit animi atque,
              provident voluptatum quidem harum. Quisquam iste fuga id incidunt aliquam suscipit aspernatur, accusamus itaque quidem eos!
            </p>

            <p className={style.texts}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, est quaerat? Saepe assumenda inventore autem
              dolorum debitis. Sed suscipit, velit exercitationem incidunt qui dignissimos eius molestiae, cupiditate quaerat labore nostrum!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default policy
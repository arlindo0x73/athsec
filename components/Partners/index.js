import React from 'react'
import style from './partners.module.css'

const index = () => {
  return (
    <div id="partners" className={style.partners}>
      <p className={style.partnersInfo}>Nossos parceiros</p>
      <span></span>
      <div className={style.partnersImages}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
          <img draggable="false" src="/Icons/partner1.png" width={90} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
          <img draggable="false" src="/Icons/partner2.png" width={50} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
          <img draggable="false" src="/Icons/partner3.png" width={90} />
        </div>
      </div>
    </div>
  )
}

export default index
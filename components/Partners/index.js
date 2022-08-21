import React from 'react'
import style from './partners.module.css'

const index = () => {
  return (
    <div id="partners" className={style.partners}>
      <p className={style.partnersInfo}>Nossos parceiros</p>
      <span></span>
      <div className={style.partnersImages}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
          <img draggable="false" src="/Icons/partner2.png" width={50} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
          <img draggable="false" src="/Icons/partner3.png" width={90} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
          <img draggable="false" src="/Icons/fortinet-logo.svg" width={90} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
          <img draggable="false" src="/Icons/horizontal-red-navy.png" width={90} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
          <img draggable="false" src="/Icons/idrive-logo-1x.png" width={90} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
          <img draggable="false" src="/Icons/Kaspersky_logotype_black.png" width={90} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
          <img draggable="false" src="/Icons/solustic.png" width={90} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
          <img draggable="false" src="/Icons/Splunk-Corp-Logo-K-rgb.png" width={90} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
          <img draggable="false" src="/Icons/Logo_Color_Small.png" width={90} />
        </div>
      </div>
    </div>
  )
}

export default index

import React from 'react'
import style from "./comment.module.css"

const Comment = ({ image, author, job, text }) => {
  return (
    <div className={style.content}>
      <img src={image} className="rounded-circle" alt="..."/>

      <div>
        <h2>{author}</h2>
        <h3>{job}</h3>
        <p className={style.text}>
          {text}
        </p>
      </div>
    </div>
  )
}

export default Comment
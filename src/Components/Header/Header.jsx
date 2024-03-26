import React from 'react'
import "./Header.css"

export default function Header(props) {
  return (
    <div className="header-container">
      <h1>{props.header}</h1>
      <img src={props.imgUrl} alt="logo" />
    </div>
  )
}

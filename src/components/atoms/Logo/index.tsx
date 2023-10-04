/* eslint-disable @next/next/no-img-element */
import React from "react"

const Logo = (): JSX.Element => {
  return (
    <img
      src="./img/logo.webp"
      alt="Logo do site"
      srcSet="./img/logo.webp"
      className="w-185"
    />
  )
}

export default Logo 

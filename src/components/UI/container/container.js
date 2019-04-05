import React from "react"
import PropsTypes from "prop-types"

import style from "./container.module.css"

const Container = ({ children }) => {
  return <div className={style.container}>{children}</div>
}

Container.propTypes = {
  children: PropsTypes.node,
}

export default Container

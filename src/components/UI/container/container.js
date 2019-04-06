import React from "react"
import PropsTypes from "prop-types"
import styled from "styled-components"

const Container = ({ children, width }) => {
  const Container = styled.div`
    max-width: ${width}px;
    margin: 0 auto;
    padding: 0 15px 0;
    flex: 1;
  `
  return <Container>{children}</Container>
}

Container.propTypes = {
  children: PropsTypes.node,
}

Container.defaultProps = {
  width: 1140,
}

export default Container

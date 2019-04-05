import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const MasonryLayout = ({ columns, gap, children }) => {
  const Masonary = styled.div`
    column-count: ${columns};
    column-gap: ${gap}px;

    @media (max-width: 768px) {
      column-count: ${columns - 1};
    }

    @media (max-width: 568px) {
      column-count: ${columns - 2};
      column-gap: ${gap / 2}px;
    }
  `

  return <Masonary>{children}</Masonary>
}

MasonryLayout.propTypes = {
  columns: PropTypes.number.isRequired,
  gap: PropTypes.number.isRequired,
  children: PropTypes.node,
}

MasonryLayout.defaultProps = {
  columns: 4,
  gap: 30,
}

export default MasonryLayout

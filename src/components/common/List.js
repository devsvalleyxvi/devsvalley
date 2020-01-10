import React from "react"
import PropTypes from "prop-types"

const List = ({ collection, ordered, itemProps, ...rest }) => {
  const Tag = ordered ? "ol" : "ul"
  return (
    <Tag {...rest}>
      {collection.map((item, index) => (
        <li key={index} {...itemProps}>
          {item}
        </li>
      ))}
    </Tag>
  )
}

List.propTypes = {
  itemProps: PropTypes.object,
}

List.defaultProps = {
  collection: [],
  ordered: false,
}

export default List

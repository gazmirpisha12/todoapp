import React from 'react'

function Item({ title, category }) {
  return (
    <div className="item-container">
    <div>
      <span className="item-label">Name:</span>
      {title}
    </div>
    <div>
      <span className="item-label">Category:</span>
      {category}
    </div>
  </div>
  )
}

export default Item
import React from "react";
import './TabsStyle.css'

export const ButtonTab = ({item, active, clickTabButton}) => {
  return (
    <button
      className={`tablinks ${item.id === active ? 'active' : ''}`}
      onClick={clickTabButton}
      data-id={item.id}
    >
      {item.title}
    </button>
  )
}

import React from 'react'

export default function TosoItem({ itemProp }) {
  return (
    <li>
    <input type="checkbox" />
    {itemProp.title}
  </li>
  )
}

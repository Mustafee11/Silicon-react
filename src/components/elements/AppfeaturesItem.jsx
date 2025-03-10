import React from 'react'

function AppfeaturesItem({title,imgsrc,description, className}) {
  console.log(imgsrc)
  return (
    <li className={className}>
        <h2>{title}</h2>
        <img src={imgsrc} alt={title} />
        <p>{description}</p>
    </li>
  )
}

export default AppfeaturesItem
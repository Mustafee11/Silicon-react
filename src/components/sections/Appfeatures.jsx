import React, { useState } from 'react'
import { DarkModeContext } from '../../contexts/DarkModeContext'
import AppfeaturesArray from '../elements/AppfeaturesArray'
import AppfeaturesItem from '../elements/AppfeaturesItem'

function Appfeatures() {
  const {darkmode} = useState(DarkModeContext)
  return (
    <section id="app-features-section">
    <div className="container">
     <div className="img-column">
      <img src="/images/app-features-iphone.svg" alt=""></img>
     </div>
      <div className="section-title">
        <h1>App Features</h1>
        <p className="section-paragrah">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
       </div>
       

       <div className='features-columns'>
        <div className='column-1'>
        <ul>
          {AppfeaturesArray.slice(0, 3).map((feature,index) =>
           <AppfeaturesItem
            key={index}
            title={feature.title}
            imgsrc={darkmode ? feature.imgsrc.replace('.svg','-dark.svg') : feature.imgsrc}
            description={feature.description}
            className={feature.className}

           
           />
          ) 
          }
        </ul>
        </div>
        <div className='column-2'>
        <ul>
          {AppfeaturesArray.slice(3).map((feature,index) =>
           <AppfeaturesItem
            key={index}
            title={feature.title}
            imgsrc={darkmode ? feature.imgsrc.replace('.svg','-dark.svg') : feature.imgsrc}
            description={feature.description}
            className={feature.className}

           
           />
          ) 
          }
        </ul>
        </div>
       </div>
       </div>
      </section>
  )
}

export default Appfeatures
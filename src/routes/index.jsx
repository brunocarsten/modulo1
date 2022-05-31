import React, { useState, useEffect, lazy, Suspense } from 'react'
import { useLocation } from 'react-router-dom'

import { Routes, Route } from 'react-router-dom'

import { Start } from '../views/start'
import { Welcome } from '../views/welcome'
import { Map } from '../views/map'
import { PopupAcerto } from '../views/acerto'
import { PopupErro } from '../views/erro'
import { PopupContagem } from '../views/contagem'
import { Main } from '../views/main'
import { Modulo2 } from '../views/modulo 2'
import { Modulo3 } from '../views/modulo 3'
import { Modulo4 } from '../views/modulo 4'
import { Modulo5 } from '../views/modulo 5'

export default () => {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransistionStage] = useState('fadeIn')

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage('fadeOut')
  }, [location, displayLocation])

  return (
    <>
      <div
        className={`${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === 'fadeOut') {
            setTransistionStage('fadeIn')
            setDisplayLocation(location)
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route exact path="/" element={<Start />} />
          <Route exact path="/boas-vindas" element={<Welcome />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/mapa" element={<Map />} />
          <Route exact path="/acerto" element={<PopupAcerto />} />
          <Route exact path="/erro" element={<PopupErro />} />
          <Route exact path="/contagem" element={<PopupContagem />} />
          <Route exact path="/modulo_2" element={<Modulo2 />} />
          <Route exact path="/modulo_3" element={<Modulo3 />} />
          <Route exact path="/modulo_4" element={<Modulo4 />} />
          <Route exact path="/modulo_5" element={<Modulo5 />} />
        </Routes>
      </div>
    </>
  )
}

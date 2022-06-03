import { useContext, useEffect, createRef, useState, useLayoutEffect } from 'react'

import { Header } from '../components/layout/Header'
import { NavButton } from '../components/layout/NavButton'
import { Step } from '../components/layout/Step'
import { ProgressContext } from '../context/progress'

import '../styles/mapa.scoped.scss'

import image from '../assets/fundo_rio_completo.webp'
import barco from '../assets/barco.png'

import imagem_1 from '../assets/1.png'
import imagem_2 from '../assets/2.png'
import imagem_3 from '../assets/3.png'
import imagem_4 from '../assets/4.png'
import imagem_5 from '../assets/5.png'
import imagem_6 from '../assets/6.png'
import imagem_7 from '../assets/7.png'
import imagem_8 from '../assets/8.png'

export const Map = () => {
  const { state } = useContext(ProgressContext)
  const { step } = state
  const stepRef = createRef()

  const [disabled, setDisabled] = useState(true)
  const [location, setLocation] = useState(`pergunta_${step}`)
  const [loading, setLoading] = useState(true)

  const handleLocation = (index) => {
    setTimeout(() => {
      setDisabled(false)
      setLocation(`pergunta_${index}`)
    }, 1000)
  }

  const scrollToElement = () => {
    setTimeout(async () => {
      if (stepRef.current) await stepRef.current.nextSibling.scrollIntoView({ block: 'start', behavior: 'smooth' })
      handleLocation(step + 1)
    }, 1000)
  }

  useLayoutEffect(() => {
    setInterval(() => {
      setLoading(false)
    }, 3000)
  }, [])

  useEffect(() => {
    if (!loading) {
      scrollToElement()
    }
  }, [loading])

  const stepStyle = [
    { position: { top: '25%', left: '69%' }, image: imagem_1 },
    { position: { top: '23.5%', left: '42%' }, image: imagem_2 },
    { position: { top: '34.2%', left: '28.5%' }, image: imagem_3 },
    { position: { top: '45.2%', left: '51%' }, image: imagem_4 },
    { position: { top: '51%', left: '77.4%' }, image: imagem_5 },
    { position: { top: '60.7%', left: '66%' }, image: imagem_6 },
    { position: { top: '60.3%', left: '40.1%' }, image: imagem_7 },
    { position: { top: '77.5%', left: '38.2%' }, image: imagem_8 }
  ]

  const renderBoat = () => {
    return (
      <div className={`barco ${location}`}>
        <img src={barco} alt="" />
      </div>
    )
  }

  return (
    <>
      <Header css={{ position: 'fixed', top: '0', left: '0', zIndex: '999999', background: 'white' }} />

      {loading && (
        <div
          style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <p>carregando...</p>
        </div>
      )}
      {!loading && (
        <>
          <div className="mapa" style={{ width: '100%' }}>
            <img src={image} alt="" style={{ width: '100%', height: 'auto' }} loading="lazy" />

            {stepStyle.map(({ position, image }, i) => {
              return (
                <Step
                  key={i}
                  ref={stepRef}
                  className={`number ${i < step ? 'done' : ''}`}
                  src={image}
                  style={position}
                  index={i + 1}
                />
              )
            })}
            {renderBoat()}
          </div>
          <div className="entrar" style={{ position: 'fixed', left: '10%', bottom: '6%' }}>
            <NavButton
              className={disabled ? 'button disabled' : 'button'}
              disabled={disabled}
              label="ENTRAR NA COMUNIDADE"
              url="/main"
              style={{ width: 264, background: '#FF9955', color: '#FFF', maxWidth: '100%' }}
            >
              ENTRAR NA COMUNIDADE
            </NavButton>
          </div>
        </>
      )}
    </>
  )
}

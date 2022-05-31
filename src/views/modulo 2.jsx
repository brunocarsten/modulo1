import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { NavButton } from '../components/layout/NavButton'
import { useRef } from 'react'

import '../styles/modulo 2/cartas.scoped.scss'

import baixo from '../assets/modulo 2/cartas baixo.png'
import bkg from '../assets/modulo 2/carta bkg.png'
import rei from '../assets/modulo 2/rei.png'
import as from '../assets/modulo 2/as.png'
import dois from '../assets/modulo 2/dois.png'
import tres from '../assets/modulo 2/tres.png'

const style = {
  title: {
    color: '#0E3F02',
    fontWeight: 'bold',
    fontSize: 25,
    textTransform: 'uppercase',
    paddingTop: 40,
    paddingBottom: 27,
    margin: 0
  },
  main: {
    width: 824,
    maxWidth: '100%',
    background: '#F6D55C',
    minHeight: 440,
    borderRadius: 26,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  flip: {
    backgroundColor: 'transparent',
    width: 127,
    height: 181,
    perspective: 1000
  }
}

export const Modulo2 = (link) => {
  const reiRef = useRef()
  const asRef = useRef()
  const doisRef = useRef()
  const tresRef = useRef()

  const randomRei = Math.floor(Math.random() * (4 - 0)) + 0;
  const randomAs = Math.floor(Math.random() * (4 - 0)) + 0;
  const randomDois = Math.floor(Math.random() * (4 - 0)) + 0;
  const randomTres = Math.floor(Math.random() * (4 - 0)) + 0;

  function flipCard(ref) {
    if (document.querySelectorAll('.flip-card.active').length == 0) {
        ref.current.classList.add('active')
        document.querySelector('.button').classList.add('active')
    }
  }
  return (
    <>
      <Header></Header>
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 83px)' }}>
          <div className="popup" style={style.main}>
            <h1 style={style.title}>CARTAS</h1>
            <div
              className="cartas"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '82%',
                padding: '0px 9%'
              }}
            >
              <div ref={reiRef} className="flip-card" style={{order: randomRei, ...style.flip}} onClick={() => {flipCard(reiRef)}}>
                <div
                  className="flip-card-inner"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.8s',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="flip-card-front" style={style.card}>
                    <img src={bkg} alt="" style={{ width: 127, height: 181 }} />
                  </div>
                  <div className="flip-card-back" style={style.card}>
                    <img src={rei} alt="" style={{ width: 127, height: 181 }} />
                  </div>
                </div>
              </div>
              <div ref={asRef} className="flip-card" style={{order: randomAs, ...style.flip}} onClick={() => {flipCard(asRef)}}>
                <div
                  className="flip-card-inner"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.8s',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="flip-card-front" style={style.card}>
                    <img src={bkg} alt="" style={{ width: 127, height: 181 }} />
                  </div>
                  <div className="flip-card-back" style={style.card}>
                    <img src={as} alt="" style={{ width: 127, height: 181 }} />
                  </div>
                </div>
              </div>
              <div ref={doisRef} className="flip-card" style={{order: randomDois, ...style.flip}} onClick={() => {flipCard(doisRef)}}>
                <div
                  className="flip-card-inner"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.8s',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="flip-card-front" style={style.card}>
                    <img src={bkg} alt="" style={{ width: 127, height: 181 }} />
                  </div>
                  <div className="flip-card-back" style={style.card}>
                    <img src={dois} alt="" style={{ width: 127, height: 181 }} />
                  </div>
                </div>
              </div>
              <div ref={tresRef} className="flip-card" style={{order: randomTres, ...style.flip}} onClick={() => {flipCard(tresRef)}}>
                <div
                  className="flip-card-inner"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.8s',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="flip-card-front" style={style.card}>
                    <img src={bkg} alt="" style={{ width: 127, height: 181 }} />
                  </div>
                  <div className="flip-card-back" style={style.card}>
                    <img src={tres} alt="" style={{ width: 127, height: 181 }} />
                  </div>
                </div>
              </div>
            </div>
            <NavButton
              label="AVANÇAR"
              url={link}
              style={{
                width: 404,
                marginTop: 27,
                background: '#3DC2EA',
                color: '#FFF',
                maxWidth: '100%',
                borderRadius: 30,
                opacity: 0,
                transition: 'all 0.3s'
              }}
            >
              AVANÇAR
            </NavButton>
            <div className="bottom" style={{ marginTop: 'auto', height: 73 }}>
              <img src={baixo} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

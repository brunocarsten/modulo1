import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { NavButton } from '../components/layout/NavButton'

import imgcontent from '../assets/1.png'
import imgdir from '../assets/popup amarelo dir.png'
import imgesq from '../assets/popup amarelo esq.png'
import pontos from '../assets/pontos.png'
import zero from '../assets/popup 0.png'

const style = {
  img: {
    paddingBottom: 15
  },
  title: {
    color: '#0E3F02',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 0
  },
  text: {
    color: '#0E3F02',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 0,
    paddingBottom: 20
  },
  main: {
    width: 544,
    maxWidth: '100%',
    background: '#F6D55C',
    minHeight: 289,
    borderRadius: 26,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden'
  },
  bkg: {
    height: 289
  },
  pontos: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 30
  },
  content: {
    padding: '30px 8px 20px 8px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
}

export const PopupAcerto = () => {
  let link = '/mapa'
  function handleAnswer() {
    const itemsDone = JSON.parse(localStorage.getItem('progress'))
    if (itemsDone) {
      if (itemsDone.step == 8) {
        link = '/contagem'
      }
    }
  }
  return(
  <>
    <Header></Header>
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 83px)' }}>
        <div className="popup" style={style.main}>
          <div className="bkgesq" style={style.bkg}>
            <img src={imgesq} alt="" />
          </div>
          <div className="content" style={style.content}>
            <div className="numeros" style={style.img}>
              <div className="pontos" style={style.pontos}>
                <div>
                  <img
                    src={imgcontent}
                    alt=""
                    style={{
                      height: 55,
                      filter:
                        'brightness(0) saturate(100%) invert(21%) sepia(12%) saturate(3223%) hue-rotate(64deg) brightness(88%) contrast(102%)'
                    }}
                  />
                  <img src={zero} alt="" />
                </div>
                <div className="word">
                  <img src={pontos} alt="" />
                </div>
              </div>
            </div>
            <h1 style={style.title}>Muito bem! Resposta correta!</h1>
            <p style={style.text}>Siga sua jornada em defesa dos povos tradicionais.</p>
            <NavButton
              onLoad = {handleAnswer()}
              label="AVANÇAR"
              url={link}
              style={{ width: 264, marginTop: 20, background: '#FF9955', color: '#FFF', maxWidth: '100%' }}
            >
              AVANÇAR
            </NavButton>
          </div>
          <div className="bkgdir" style={style.bkg}>
            <img src={imgdir} alt="" />
          </div>
        </div>
      </div>
    </Container>
  </>
  )
}


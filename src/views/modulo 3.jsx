import { Popup } from '../components/layout/Popup'
import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { NavButton } from '../components/layout/NavButton'


import imgdir from '../assets/popup amarelo dir.png'
import imgesq from '../assets/popup amarelo esq.png'
import fundo from '../assets/modulo 3/fundo seta.png'
import seta from '../assets/modulo 3/seta.png'
import roleta from '../assets/modulo 3/roleta.png'

const style = {
    main: {
      width: 824,
      maxWidth: '100%',
      background: '#F6D55C',
      minHeight: 440,
      borderRadius: 26,
      display: 'flex',
      alignItems: 'flex-start',
      position: 'relative',
      justifyContent: 'space-between',
      overflow: 'hidden'
    },
    bkg: {
      height: 440
    },
    content: {
        padding: '26px 8px 30px 8px',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
}

export const Modulo3 = (link) => {
  const random = 45*(Math.floor(Math.random() * (8 - 1)) + 1);

  function rodaRoleta() {
    document.querySelector('.button').classList.add('active');
    document.querySelector('.roda').style.transform = 'rotate('+random+'deg)';
  }

  return (
    <>
      <Header></Header>
      <Container>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 83px)'}}>
              <div className="popup" style={style.main}>
                  <div className="bkgesq" style={style.bkg}>
                      <img src={imgesq} alt="" style={style.bkg}/>
                  </div>
                  <div className="content" style={style.content}>
                      <div className="roleta" style={{paddingTop: 22.5}}>
                        <div className="seta" style={{position: 'relative'}}>
                          <img src={seta} alt="" style={{position: 'absolute', top: '-20px', left: "50%", transform: 'translateX(-50%)', zIndex: '3'}}/>
                          <img src={fundo} alt="" style={{position: 'absolute', top: '-20px', left: "50%", transform: 'translateX(-50%)', zIndex: "1"}}/>
                        </div>
                        <img src={roleta} className="roda" alt="" style={{position: 'relative', zIndex: '2', transition: "all 2s ease-out"}} />
                      </div>
                      <NavButton
                      label="AVANÇAR"
                      url={link}
                      style={{ width: 170, background: '#3DC2EA', color: '#FFF', maxWidth: '100%', position: 'absolute', bottom: 30, right: 114, opacity: 0, transition: 'all .3s' }}
                      >
                      AVANÇAR
                      </NavButton>
                  </div>
                  <div className="bkgdir" style={style.bkg} onLoad={() => {rodaRoleta()}}>
                      <img src={imgdir} alt="" style={style.bkg}/>
                  </div>
              </div>
          </div>
      </Container>
    </>
  )
}
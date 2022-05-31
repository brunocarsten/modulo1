
import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { NavButton } from '../components/layout/NavButton'

import '../styles/modulo 5/prancheta.scoped.scss'

import prancheta from '../assets/modulo 5/prancheta.png'
import check from '../assets/modulo 5/check.png'
import checkbox from '../assets/modulo 5/checkbox.png'

export const Modulo5 = (link) => {
  
  const style = {
    pergunta: {
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      paddingBottom: 15
    },
    text: {
      background: 'transparent', 
      color: '#0076BE', 
      maxWidth: '100%', 
      textAlign: 'left', 
      font: 'normal normal bold 16px/18px PT Sans Pro', 
      justifyContent: 'flex-start'
    },
    checkbox: {
      position: 'relative', 
      width: 32, 
      height: 32, 
      marginRight: 22
    },
    check: {
      position: 'absolute', 
      top: -14, 
      left: 0, 
      transition: 'all .3s', 
      opacity: 0
    }
  }

  return (
    <>
      <div className="welcome">
        <Header hasBackground={false} />
        <Container style={{ width: '85%', height: 'calc(100vh - 83px)', textAlign: 'center', position: 'relative', zIndex: 10}}>
            <div className="perguntas" style={{background: 'url('+prancheta+') no-repeat bottom center', minHeight: 614, height: '100%', display: 'flex'}}>
                <div style={{width: 404, maxWidth: '100%', margin: 'auto auto 0 auto'}}>
                  <div className="pergunta" style={style.pergunta}>
                    <div style={style.checkbox}>
                      <img src={checkbox} alt="" />
                      <img className="check" src={check} alt="" style={style.check}/>
                    </div>
                    <NavButton
                      label="Estudos prévios sobre a comunidade ou o povo a ser atendido"
                      url=""
                      style={style.text}
                    >
                      Estudos prévios sobre a comunidade ou o povo a ser atendido
                    </NavButton>
                  </div>
                
                  <div className="pergunta" style={style.pergunta}>
                    <div style={style.checkbox}>
                      <img src={checkbox} alt="" />
                      <img className="check" src={check} alt="" style={style.check}/>
                    </div>
                    <NavButton
                      label="Estudos de costumes, tradições e religião local"
                      url=""
                      style={style.text}
                    >
                      Estudos de costumes, tradições e religião local
                    </NavButton>
                  </div>
                
                  <div className="pergunta" style={style.pergunta}>
                    <div style={style.checkbox}>
                      <img src={checkbox} alt="" />
                      <img className="check" src={check} alt="" style={style.check}/>
                    </div>
                    <NavButton
                      label="Contato com o órgão público auxiliar"
                      url=""
                      style={style.text}
                    >
                      Contato com o órgão público auxiliar
                    </NavButton>
                  </div>
                
                  <div className="pergunta" style={style.pergunta}>
                    <div style={style.checkbox}>
                      <img src={checkbox} alt="" />
                      <img className="check" src={check} alt="" style={style.check}/>
                    </div>
                    <NavButton
                      label="Contato com a liderança local"
                      url=""
                      style={style.text}
                    >
                      Contato com a liderança local
                    </NavButton>
                  </div>
                
                  <div className="pergunta" style={style.pergunta}>
                    <div style={style.checkbox}>
                      <img src={checkbox} alt="" />
                      <img className="check" src={check} alt="" style={style.check}/>
                    </div>
                    <NavButton
                      label="Reunião com a comunidade ou com o povo local"
                      url=""
                      style={style.text}
                    >
                      Reunião com a comunidade ou com o povo local
                    </NavButton>
                  </div>
                
                  <div className="pergunta" style={style.pergunta}>
                    <div style={style.checkbox}>
                      <img src={checkbox} alt="" />
                      <img className="check" src={check} alt="" style={style.check}/>
                    </div>
                    <NavButton
                      label="Cadastro das famílias"
                      url=""
                      style={style.text}
                    >
                      Cadastro das famílias
                    </NavButton>
                  </div>
                
                  <div className="pergunta" style={style.pergunta}>
                    <div style={style.checkbox}>
                      <img src={checkbox} alt="" />
                      <img className="check" src={check} alt="" style={style.check}/>
                    </div>
                    <NavButton
                      label="Atendimento às famílias"
                      url=""
                      style={style.text}
                    >
                      Atendimento às famílias
                    </NavButton>
                  </div>
                
                  <div className="pergunta" style={style.pergunta}>
                    <div style={style.checkbox}>
                      <img src={checkbox} alt="" />
                      <img className="check" src={check} alt="" style={style.check}/>
                    </div>
                    <NavButton
                      label="Brincadeiras e atividades"
                      url=""
                      style={style.text}
                    >
                      Brincadeiras e atividades
                    </NavButton>
                  </div>
                </div>
            </div>
          
        </Container>
      </div>
    </>
  )
}

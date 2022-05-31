
import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { NavButton } from '../components/layout/NavButton'

import brincadeiras from '../assets/modulo 4/brincadeiras.png'

export const Modulo4 = (link) => {
  
  const style = {
    content: {
      paddingBottom: 60,
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap'
    }
  }

  return (
    <>
      <div className="welcome">
        <Header hasBackground={false} />
        <Container style={{ width: '60%', height: 'calc(100vh - 83px)', paddingTop: 30, textAlign: 'center' }}>
            <img src={brincadeiras} alt="" style={{ maxWidth: '100%'}}/>
            <div className="perguntas" style={{paddingTop: 40, display: 'flex', rowGap: 10, columnGap: 15, justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap', margin: '0 auto', maxWidth: 550}}>
                <NavButton
                    label="BRINCADEIRA 1"
                    url={link}
                    style={{ width: 264, background: '#00773E', color: '#FFF', maxWidth: '100%', transition: 'all .3s', height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 30, fontSize: 13}}
                    >
                    BRINCADEIRA 1
                </NavButton>
                <NavButton
                    label="BRINCADEIRA 2"
                    url={link}
                    style={{ width: 264, background: '#00773E', color: '#FFF', maxWidth: '100%', transition: 'all .3s', height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 30, fontSize: 13}}
                    >
                    BRINCADEIRA 2
                </NavButton>
                <NavButton
                    label="BRINCADEIRA 3"
                    url={link}
                    style={{ width: 264, background: '#00773E', color: '#FFF', maxWidth: '100%', transition: 'all .3s', height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 30, fontSize: 13}}
                    >
                    BRINCADEIRA 3
                </NavButton>
                <NavButton
                    label="BRINCADEIRA 4"
                    url={link}
                    style={{ width: 264, background: '#00773E', color: '#FFF', maxWidth: '100%', transition: 'all .3s', height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 30, fontSize: 13}}
                    >
                    BRINCADEIRA 4
                </NavButton>
                <NavButton
                    label="BRINCADEIRA 5"
                    url={link}
                    style={{ width: 264, background: '#00773E', color: '#FFF', maxWidth: '100%', transition: 'all .3s', height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 30, fontSize: 13}}
                    >
                    BRINCADEIRA 5
                </NavButton>
                <NavButton
                    label="BRINCADEIRA 6"
                    url={link}
                    style={{ width: 264, background: '#00773E', color: '#FFF', maxWidth: '100%', transition: 'all .3s', height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 30, fontSize: 13}}
                    >
                    BRINCADEIRA 6
                </NavButton>
                <NavButton
                    label="BRINCADEIRA 7"
                    url={link}
                    style={{ width: 264, background: '#00773E', color: '#FFF', maxWidth: '100%', transition: 'all .3s', height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 30, fontSize: 13}}
                    >
                    BRINCADEIRA 7
                </NavButton>
                <NavButton
                    label="BRINCADEIRA 8"
                    url={link}
                    style={{ width: 264, background: '#00773E', color: '#FFF', maxWidth: '100%', transition: 'all .3s', height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 30, fontSize: 13}}
                    >
                    BRINCADEIRA 8
                </NavButton>
            </div>
          
        </Container>
      </div>
    </>
  )
}

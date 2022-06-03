import '../styles/welcome.scoped.scss'

import { useState } from 'react'

import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { Button } from '../components/layout/Button'
import { NavButton } from '../components/layout/NavButton'

import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'

export const Welcome = () => {
  const [step, setStep] = useState(1)

  const handleStep = () => {
    setStep(2)
  }

  const handleContent = () => {
    const Component = () => {
      if (step === 1) {
        return (
          <>
            <div className="info">
              <h1 className="title">BOAS-VINDAS!</h1>
              <p>
                Olá! Chegou o momento de você verificar o que aprendeu até aqui. A proposta é simular o seu dia a dia
                real na defesa dos direitos dos povos tradicionais
              </p>
              <p>
                Para isso, desenvolvemos um divertido jogo, no qual você treina suas habilidades e, ao mesmo tempo,
                testa seus conhecimentos na forma de um quiz.
              </p>
              <p>
                Durante o percurso, por meio de um pequeno barco, você deverá levar quatro profissionais do Programa
                Criança Feliz para visitar comunidades formadas por povos tradicionais.
              </p>

              <p>Para isso, deverá responder corretamente as 8 questões sobre o conteúdo apresentado no Módulo 1.</p>

              <p>Boa sorte!</p>
            </div>
            <Button
              onClick={handleStep}
              label="COMEÇAR"
              style={{ width: 300, marginTop: 66, background: '#FF9955', color: '#FFF' }}
            />
          </>
        )
      } else {
        return (
          <>
            <div className="info">
              <h1 className="title">REGRAS DO JOGO</h1>
              <ul>
                <li>
                  <img src={image1} alt="1" />
                  <p>
                    Você precisa dirigir a embarcação, ao chegar em cada checkpoint, será apresentada uma pergunta de
                    múltipla escolha. Você deve acertá-la para a continuação no jogo.
                  </p>
                </li>

                <li>
                  <img src={image2} alt="2" />
                  <p>Em caso de resposta incorreta, deverá tentar novamente até que responda à questão corretamente.</p>
                </li>

                <li>
                  <img src={image3} alt="3" />
                  <p>Para concluir o jogo, você deverá responder às 8 perguntas apresentadas.</p>
                </li>
              </ul>
            </div>
            <NavButton
              url="/mapa"
              label="COMEÇAR"
              style={{ width: 300, marginTop: 66, background: '#FF9955', color: '#FFF' }}
            />
          </>
        )
      }
    }

    return <Component />
  }

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
        <Container style={{ width: '60%' }}>
          <div style={style.content}>{handleContent()}</div>
        </Container>
      </div>
    </>
  )
}

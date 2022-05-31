import '../styles/main.scoped.scss'
import { useContext } from 'react'

import { Header } from '../components/layout/Header'
import { Container } from '../components/layout/Container'
import { Question } from '../components/layout/Question'
import { ProgressContext } from '../context/progress'

import { questions } from '../config'

export const Main = () => {
  const { state } = useContext(ProgressContext)
  const { step } = state

  return (
    <>
      <Header />
      <Container>
        <div className="question">
          <article>
            {questions.map((item) => {
              if (item.index === step) {
                return <Question src={item.image} key={item.index} bkg="#0E3F02" item={item} />
              }
            })}
          </article>
        </div>
      </Container>
    </>
  )
}

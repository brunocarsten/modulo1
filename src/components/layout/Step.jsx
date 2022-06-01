import { forwardRef, useContext } from 'react'
import { ProgressContext } from '../../context/progress'

export const Step = forwardRef(({ ...props }, ref) => {
  const { state } = useContext(ProgressContext)
  const { step } = state

  return (
    <article ref={props.index + 1 === step ? ref : null} {...props}>
      <img src={props.src} alt="" />
    </article>
  )
})

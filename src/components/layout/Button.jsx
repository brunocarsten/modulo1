import '../styles/button.scoped.scss'

export const Button = ({ label, ...props }) => {
  return (
    <button className="button" {...props}>
      {label}
    </button>
  )
}

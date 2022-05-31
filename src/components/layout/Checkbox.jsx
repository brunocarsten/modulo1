import '../styles/checkbox.scss'
export const Checkbox = ({ ...props }) => {
  return (
    <>
      <label style={{display: 'flex', alignItems: 'flex-start', cursor: 'pointer'}}>
        <input type="radio" {...props} />
      {props.item.text}</label>
    </>
  )
}

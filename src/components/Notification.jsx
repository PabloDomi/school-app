
// eslint-disable-next-line react/prop-types
const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='error' style = {{ color: "#DC3815" }}>
      {message}
    </div>
  )
}

export default Notification
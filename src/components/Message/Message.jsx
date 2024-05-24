/* eslint-disable react/prop-types */
import "./Message.css"

const Message = ({message}) => {
  return (
      <div className="message">{ message }</div>
  )
}

export default Message
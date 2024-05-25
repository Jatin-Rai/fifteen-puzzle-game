/* eslint-disable react/prop-types */
import "./Message.css"

// Message component to display a message on the screen
// Props:
// - message: The message text to display
const Message = ({ message }) => {
  return (
    <div className="message">{message}</div>
  );
};

export default Message;

/* eslint-disable react/prop-types */
import './Button.css'

// Button component to render a clickable button
// Props:
// - action: Function to execute when the button is clicked
// - title: Text to display on the button
const Button = ({ action, title }) =>
    <div className='button-wrapper'>
        <button onClick={action}>{title}</button>
    </div>;

export default Button;

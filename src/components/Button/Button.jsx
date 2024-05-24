/* eslint-disable react/prop-types */
import './Button.css'

const Button = ({ action, title }) =>
    <div className='button-wrapper'>
        <button onClick={action}>{title}</button>
    </div>

export default Button
import './Overlay.css'

// Overlay component representing the overlay elements on the game board
// Props:
// - size: The number of overlay elements to render
const Overlay = ({ size }) =>
    new Array(size)
        .fill() // Create an array with 'size' number of elements
        .map((_, i) => <div key={i} className="overlay" />); // Map each element to a div with a class of "overlay"

export default Overlay;

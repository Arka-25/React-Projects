import './Navbar.css'
import logo from '../assets/logo.jpg';
const Navbar = () => {
  return (
    <div className="nav">
       <img className="img1" src={logo} alt="React logo" />
         <ul className="list">
        <li>Home</li>
        <li>About</li>
        <li>service</li>
        <li>Carrer</li>
        </ul>
        
    </div>
  )
}
export default Navbar
import './Footer.css'
import logo1 from '../assets/logo1.png'
const Footer = () => {
  return (
    <footer className='Footer'>
     <img className="logo1" src={logo1} alt="Code of react" />
     <p className='copyright'>© 2025 React Project. All rights reserved.</p>
     <ul className="Footerlist">
        <li>Home</li>
        <li>About</li>
        <li>service</li>
        <li>Carrer</li>
        </ul>
</footer>
  )
}
export default Footer 
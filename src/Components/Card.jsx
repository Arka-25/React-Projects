import './Card.css'
import code from '../assets/code.jpg';
import Tiger from '../assets/Tiger.jpg';
import Amex from '../assets/Amex.jpg';
const Card = () => {
  return (
    <>
    <div className="Parentdiv">
     <div className='card'>
      <img className="img2" src={code} alt="Code of react" />
      <h1 className="heading">CODES</h1>
      <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className="button1">Click Here</button>
    </div>
    <div className="card1">
      <img className="img3" src={Tiger} alt="Second card photo"></img>
      <h1 className="heading1">Animals</h1>
      <p className="Para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis magnam</p>
      <button className="button2">Click Here</button>
    </div>
    <div className='card2'>
     <img className="img4" src={Amex} alt="Third card photo"></img>
     <h1 className="heading3">Corporate world</h1>
     <p className='para3'>American Express (Amex) is a leading corporate financial services company, offering innovative payment solutions</p>
     <button className='Button4'>Click Here</button>
    </div>
    </div>
    
    </>
    
  )
}
export default Card

import './Sidebar.css';
import logo from '../assets/sidebar/Logomark.svg';
import home from '../assets/sidebar/home.svg';
import three from '../assets/sidebar/three.svg';
import four from '../assets/sidebar/four.svg';
import five from '../assets/sidebar/five.svg';
import six from '../assets/sidebar/six.svg';
import seven from '../assets/sidebar/seven.svg';
import bone from '../assets/sidebar/bone.svg';
import btwo from '../assets/sidebar/btwo.svg';

function Sidebar() {
    return (
      <div className="sidebar">
        <div className="topIcons">
        <div className="mb-4">
          <i className=""><img src={logo} alt="logo"></img>
          </i>
        </div>
        <div className="mb-4">
          <i className=""><img src={home} alt="logo"></img>
          </i>
        </div>
        <div className="mb-4">
          <i className=""><img src={three} alt="logo"></img>
          </i>
        </div>
        <div className="mb-4">
          <i className=""><img src={four} alt="logo"></img>
          </i>
        </div>
        <div className="mb-4">
          <i className=""><img src={five} alt="logo"></img>
          </i>
        </div>
        <div className="mb-4">
          <i className=""><img src={six} alt="logo"></img>
          </i>
        </div>
        <div className="mb-4">
          <i className=""><img src={seven} alt="logo"></img>
          </i>
        </div>
        
        </div>
        <div className='bottomIcons'>
        <div className="mb-4">
        <i className=""><img src={bone} alt="logo"></img>          </i>

        </div>
        <div className="mb-4">
        <i className=""><img src={btwo} alt="logo"></img>          </i>

        </div>
        </div>
      </div>
    );
  }
  
  export default Sidebar;
  
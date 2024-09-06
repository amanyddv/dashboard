import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './ServicesNew.css';
import ConfigForm from '../components/configForm';


function ServicesNew() {
  return (<div className="dashboard">
    <div ><Sidebar/></div>
    <div><Header/> 
    <ConfigForm/> 
    </div>
    
    
    </div>  );
}

export default ServicesNew;

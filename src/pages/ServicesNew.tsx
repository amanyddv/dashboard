import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ConfigForm from '../components/ConfigForm';
import './ServicesNew.css';

function ServicesNew() {
  return (<div className="dashboard">
    <div ><Sidebar/></div>
    <div><Header/> 
    <ConfigForm/> 
    </div>
    </div>  );
}

export default ServicesNew;


import './App.css'

import { Link } from 'react-router-dom'

function App() {

  return (
    <div className="page">
      <Link to="/services/new">
        <button className="">
          Go to Services New
        </button>
      </Link>
    </div>
  )
}

export default App

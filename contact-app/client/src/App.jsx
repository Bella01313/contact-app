import { Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Signin from './pages/authentication/Signin'
import Signup from './pages/authentication/Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
function App () {
  return (
   <Router>
    <Routes>
       {/* Authentication pages */}
       <Route path='/register' element={<Signup />} />
       <Route path='/login' element={<Signin />} />
       <Route path='/home' element= {<Home/>}/>
    </Routes>
   </Router>
  
  )
}

export default App
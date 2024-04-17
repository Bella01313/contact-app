import { Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Signin from './pages/authentication/Signin'
import Signup from './pages/authentication/Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import Update from './pages/Update';
import MainPage from './pages/MainPage';
import Create from './pages/Create';
import More from './pages/More';
const App = () =>{
  const userToken = localStorage.getItem('token');
  return (
   <Router>
    <Routes>
       {/* Authentication pages */}
       <Route path='/' element={<Signup />} />
       <Route path='/login' element={!userToken ? <Signin /> : <Navigate replace to={'/'} />} />
       {/* <Route path='/home' element= {<Home/>}/> */}
        {/* Other pages  */}
        <Route path='/' element={<MainPage />}>
        <Route path='/home' element={<Home />} />
          <Route path='/update/:contactId' element={<Update />} />
          <Route path='/add' element={<Create />} />
          <Route path='/more/:contactId' element={<More />} />
        </Route>
    </Routes>
   </Router>
  
  )
}

export default App;
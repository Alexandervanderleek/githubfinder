import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import {GithubProvider} from './context/github/GithubContext'
import {AlertProvider} from './context/alert/AlertContext';
import Alert from './Components/layout/alert';
import User from './pages/User';
function App() {
  return (
    <GithubProvider>
    <AlertProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar>

        </Navbar>
        
        <main className='container mx-auto px-3 pb-12'>
          <Alert></Alert>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/user/:login' element={<User/>}></Route>
            <Route path='/notfound' element={<NotFound/>}></Route>
            <Route path='/*' element={<NotFound/>}></Route>
            
          </Routes>
        </main>

        <Footer/>

      </div>
      
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;

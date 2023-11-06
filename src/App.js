
import './App.css';
import React, { createContext, useRef, useState } from 'react';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import Header from './components/Header';
import Home from './pages/home';
import Footer from './components/Footer';
import jwt_decode from "jwt-decode";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // redirect,
  // useNavigate ,
  Link
} from 'react-router-dom';

export const RefContext = createContext(null)
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn')) ;

  // const [verified, setVerified] = useState(false);
  // const [verifiedUser, setVerifiedUser] = useState(null);
  const ref = useRef(null);


  const Login = (item) => {

    
    // const decode = jwt_decode(process.env.REACT_APP_JWT)
    
    // setVerifiedUser(decode);
    // // console.log('verified user is' ,verifiedUser);
    // console.log(item);
    // if (verifiedUser.email === item.email && verifiedUser.password === item.password) {
    //   // setVerified(true);
    //   localStorage.setItem('isLoggedIn', true);
    //   setErr('');
    // }
    // else if (item.email === '' || item.email === '') {
    //   setErr('Missing email or password');
    // }
    // else if (verifiedUser.email !== item.email && verifiedUser.password !== item.password) {
    //   setErr('Unauthorized');
    // }

      const user = JSON.parse(localStorage.getItem('user'));
      // const isLoggedIn = localStorage.getItem('isLoggedIn')
      // if (user && user.email === item.email && user.password === item.password) {
      //   const jwtToken = `${item.email}-${item.password}`;
      //   localStorage.setItem('token', jwtToken);
      //   // alert('Login successful.');
      //   localStorage.setItem('isLoggedIn', true);
      // } else {
      //   alert('Email or password is incorrect.');
      // }
      if (user && user.email === item.email && user.password === item.password) {
        localStorage.setItem('isLoggedIn', true);
        setIsLoggedIn(true);
        const jwtToken = `${item.email}-${item.password}`;
        localStorage.setItem('token', jwtToken);
      }
      else {
        alert('incorect');
      }
  }

  const handleContactClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const Logout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }



  return (
    <div className="App">
      {
        isLoggedIn  ?

          <Router>
            <RefContext.Provider value={{ref}}>
            <Header Logout={Logout} onContactClicked = {handleContactClick} />
            <Routes>
              <Route path='/jwt-token-project' element={(
                <Home ref = {ref} />
              )} />
            </Routes>

            <Footer/>
            </RefContext.Provider>
          </Router> :
          <Router>
            <Routes>
              <Route path='/jwt-token-project' element={(
                <SignIn Login={Login} 
                // Checked = {} 
                />
              )} />

              <Route path='/sign-up' element={(
                <Signup />
              )} />
            </Routes>
          </Router>

      }





      {/* <Signup/> */}


    </div>
  );
}

export default App;

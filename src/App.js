import logo from './logo.svg';
import classes from './App.module.css';
// import { EasybaseProvider, useEasybase } from 'easybase-react';
// import {initializeApp} from 'firebase/app';
// import Firebase from 'firebase'
import Home from './components/Home';
import Header from './components/Header/Header';
import GoogleLogin from 'react-google-login';

function App() {

  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <div className="App">
      <div className={classes.header}>
        <Header />
      </div>

      <div className={classes.home}>
        <Home />
      </div>
        {/* <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_TOKEN}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        /> */}
    </div>
  );
}

export default App;

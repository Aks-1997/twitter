import logo from './logo.svg';
import './App.css';
import { EasybaseProvider, useEasybase } from 'easybase-react';
// import Firebase from 'firebase';
import config from './config';
import GoogleLogin from 'react-google-login';

function App() {
  // Firebase.initializeApp(config.firebase);
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <GoogleLogin
          clientId="476092438228-q8saqudafpjmvgvragkp69qmglfudauu.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </header>
    </div>
  );
}

export default App;

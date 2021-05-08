import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Login from './components/Login'
import {CookiesProvider} from 'react-cookie';
import { Floor1 } from "./Pages/Floor1";
import { Floor2 } from "./Pages/Floor2";
import { Floor3 } from "./Pages/Floor3";
import { Floor4 } from "./Pages/Floor4";
import { Floor5 } from "./Pages/Floor5";
import { Floor6 } from "./Pages/Floor6";
import { Register } from "./Pages/Register";
import { Dashboard } from "./Pages/Dashboard";
import { Maintenance } from "./Pages/Maintenance";


function Router() {
   
  return(
    <CookiesProvider>
    <BrowserRouter>

    <Route exact path = "/" component = {Login}/>
    <Route exact path="/App" component={App} />
    <Route exact path="/App/floor1" component={Floor1} />
    <Route exact path="/App/maintenance" component={Maintenance} />
    <Route exact path="/register" component={Register} />


    </BrowserRouter>
    </CookiesProvider>
  )

}


ReactDOM.render(
  <React.StrictMode>
    <Router>
      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

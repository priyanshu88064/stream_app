import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="streamapp.us.auth0.com"
    clientId="FeFSkgO5alTnWhI4qI0VZWYH0GGhhsa2"
    authorizationParams={{
      redirect_uri:window.location.origin
    }}
  >
    <Home />
  </Auth0Provider>
);


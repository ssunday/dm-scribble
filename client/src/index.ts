import { createElement } from 'react';
import { render } from 'react-dom';
import Main from './Main';
import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: process.env.COGNITO_REGION,
    userPoolId: process.env.COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.COGNITO_APP_CLIENT_ID,
  },
});

render(createElement(Main), document.getElementById('app-root'));

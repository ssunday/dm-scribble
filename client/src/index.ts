import { createElement } from 'react';
import { render } from 'react-dom';
import AuthenticatedMain, { Main } from './Main';
import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: process.env.COGNITO_REGION,
    userPoolId: process.env.COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.COGNITO_APP_CLIENT_ID,
  },
});

const main = process.env.SKIP_COGNITO === 'true' ? Main : AuthenticatedMain;

render(createElement(main), document.getElementById('app-root'));

# Client

React + TypeScript

Auth via AWS Amplify/Cognito since I didn't care about the stock UI of it. Yet, anyway.

## Requirements

- Node 14.5.0
- Cognito dev environment setup and creds put into `.env`, or skipping all authentication via `SKIP_COGNITO=true`

## Setup

- `cp .example.env .env`
- `npm install`
- `npm install start`

Visit on [http://localhost:8080](http://localhost:8080)

## Linting

- To see issues: `npm run lint`
- To autofix issues: `npm run lint:fix`

## Testing

- Run: `npm run test`
- Watch: `npm run test:watch`

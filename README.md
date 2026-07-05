# Referral Dashboard

A React dashboard where users log-in and manage their referrals — check stats, view referral details, share their referral link/code, and browse through their referral history with search, sort, and pagination.

Built as a frontend assessment project to practice API integration, auth flows, and building a real, usable UI instead of just static components.

## What it does

- Login with JWT-based auth (token kept in cookies, routes protected based on it)
- Dashboard with an overview of key metrics and a service summary
- Full referral list with search, sort, and pagination
- Referral details page for a closer look at individual records
- Copy referral link / referral code with one click
- Custom 404 page for anything outside the defined routes
- Responsive layout — works on desktop, tablet, and mobile

## Tech stack

- **React** – UI
- **React Router DOM** – routing, including protected routes
- **Axios** – API calls
- **js-cookie** – storing the JWT
- **Vite** – dev server / build
- Plain CSS3 for styling (no UI library, kept it simple)

## Project structure

```
src/
├── components/
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── Overview.jsx
│   ├── ProtectedRoute.jsx
│   ├── ReferralTable.jsx
│   ├── ServiceSummary.jsx
│   └── ShareReferral.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   ├── NotFound.jsx
│   └── ReferralDetails.jsx
├── services/
│   └── api.js
├── App.jsx
├── main.jsx
└── index.css
```

## Running it locally

```bash
git clone <repository-url>
cd referral-dashboard
npm install
npm run dev
```

## How auth works

1. User submits email + password on the login page.
2. Credentials go to the auth API (`POST /auth/signin`).
3. On success, the API returns a JWT.
4. The token is saved in a cookie.
5. `ProtectedRoute` checks for a valid token before letting you into dashboard pages — no token, no access.
6. Logging out clears the cookie and sends you back to login.

## API endpoints used

**Login**
```
POST /auth/signin
```
Returns a JWT on success.

**Dashboard data**
```
GET /referrals
```
Returns overview metrics, service summary, referral link/code, and the referral list.


## Author

**Mounika Yerramsetti**

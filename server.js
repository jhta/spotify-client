const express = require('express');
const next = require('next');
const request = require('request');
const rs = require('randomstring');

//config const
const config = require('./config');

//middlewares
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const SpotifyAPI = require('./utils/spotify');

const port = 3000;
const enviroment = process.env.NODE_ENV !== 'production';

const app = next({ enviroment });
const handle = app.getRequestHandler();
const stateKey = 'spotify_auth_state';

app.prepare()
  .then(() => {

    const server = express();
    server.use(cookieParser());
    server.use(morgan('dev'));
    server.use(session({
      secret: 'my super secret key',
      resave: false,
      saveUninitialized: true
    }));


    server.get('/auth', (req, res) => {
      const state = rs.generate(16);
      res.cookie(stateKey, state);
      res.redirect(SpotifyAPI.getAuthURL(config.spotify, state));
    })


    server.get('/callback', (req, res) => {
      const { code, state } = req.query;
      const { cookies } = req;
      const storedState = cookies ? cookies[stateKey] : null;

      if (!state || state !== storedState) {
        return app.render(req, res, '/', { error: true, message: 'state mismatch' })
      }

      res.clearCookie(stateKey);
      SpotifyAPI.getTokens(code, config.spotify, (err, tokens) => {
        req.session.token = tokens.access_token;
        res.cookie('access_token', tokens.access_token);
        return app
          .render(req, res,  '/')
      });
    });


    server.get('*', (req, res) => !req.session.token ?
      app.render(req, res, '/login')
      :
      handle(req, res)
    );


    server.listen(port, (err) => {
      if (err) throw err
      console.log(`app localhost:${port}`)
    })
  })

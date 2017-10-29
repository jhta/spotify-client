const spotify = {
  response_type: 'code',
  client_id: '0a9d08a622a842adb4802fc5039b380a', // Your client id
  client_secret: '3fc7be02e2fd4f1cbdd25a08d66ec33f', // Your secret
  redirect_uri: 'http://localhost:3000/callback', // Your redirect uri
  scope: 'user-read-private user-read-email'
};
const loginEndpoint = 'https://accounts.spotify.com/authorize?';

module.exports = {
  loginEndpoint: loginEndpoint,
  spotify: spotify
};

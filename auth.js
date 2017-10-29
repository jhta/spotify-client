export const isLogged = () => !!localStorage.getItem('access_token');

export const logOut = () => localStorage.removeItem('access_token');

export const persitsSession = token => localStorage.setItem('access_token', token);

export const getToken = () => localStorage.getItem('access_token');

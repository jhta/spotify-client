const clientStorage = (action = 'get', token = null) => {
  switch(action) {
    case 'add':
      localStorage.removeItem('access_token');
      return localStorage.setItem('access_token', token);
    case 'remove':
      return localStorage.removeItem('access_token');
    default:
      return localStorage.getItem('access_token');
  }
}

export const isLogged = () => !!clientStorage('get');
export const logOut = () => clientStorage('remove');
export const persitsToken = token => clientStorage('add', token);
export const getToken = () => clientStorage('get');

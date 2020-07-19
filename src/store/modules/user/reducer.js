export default function phones(state = {}, action) {
  switch (action.type) {
    case 'SET_USER':
      sessionStorage.setItem('user', JSON.stringify(action.user));
      return action.user;
    default:
      return state;
  }
}

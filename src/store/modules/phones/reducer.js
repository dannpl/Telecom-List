export default function phones(state = [], action) {
  switch (action.type) {
    case 'SET_PHONES':
      return [...action.phones];
    default:
      return state;
  }
}

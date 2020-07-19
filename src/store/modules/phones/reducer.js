export default function phones(state = [], action) {
  switch (action.type) {
    case 'SET_PHONES':
      return [...action.phones];
    case 'CHANGE_STATUS':
      const phone = state.find((item) => item.id === action.phone.id);

      return [
        ...state.map((data) => {
          if (data.id === phone.id) {
            return action.phone;
          } else return data;
        }),
      ];

    default:
      return state;
  }
}

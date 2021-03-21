export const initialState = {
  games: [],
  user: '',
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_GAMES':
      return {
        ...state,
        games: [...state.games, action.item],
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;

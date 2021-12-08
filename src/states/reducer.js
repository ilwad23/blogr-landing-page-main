export const initialState = {
  toggle: true,
  onToggle: "open",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      let newToggle = !state.toggle;
      let newOnToggle = newToggle ? "open" : "close";
      return {
        ...state,
        toggle: newToggle,
        onToggle: newOnToggle,
      };

    default:
      return {
        ...state,
      };
  }
};
export default reducer;

//data layer logic

export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_T0_BASKET":
      //logic for adding basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //logic for removing from basket

      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      // console.log(index);

      if (index >= 0) {
        newBasket.splice(index, 1);
        console.log(newBasket);
      } else {
        console.warn(
          `cannot remove product of id ${action.id} because it donesnot exist`
        );
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};
export default reducer;

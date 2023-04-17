const photosReducer = (state = {}, action) => {
  console.log("Masuk sini", action.type);
  switch (action.type) {
    case "SET_PHOTOS":
      console.log("Line 5");
      return {
        ...state,
        photos: action.payload,
      };
    default:
      return state;
  }
};

export default photosReducer;

import { configureStore } from "@reduxjs/toolkit";
import themeModeReducer from "./themeMode/reducer";
const store = configureStore({
  reducer: {
    themeModeReducer: themeModeReducer,
  },
});

export default store;

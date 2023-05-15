import { configureStore } from "@reduxjs/toolkit";
import Planets_Reducer from "../Reducers/Planets_Reducer";
// import secondReducer from "../reducers/secondReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, Planets_Reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

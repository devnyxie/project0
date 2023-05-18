import { configureStore } from "@reduxjs/toolkit";
// import secondReducer from "../reducers/secondReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import Reducer from "../Reducers/Reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["planets_data"], // Specify the reducer(s) you want to persist
};

const persistedReducer = persistReducer(persistConfig, Reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

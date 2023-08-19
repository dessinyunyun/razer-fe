import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, Middleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import { createLogger } from "redux-logger";

const logger = createLogger();
const saga = createSagaMiddleware();

const reducer = combineReducers({
  workorderReducers,
  departmentReducers,
  employeeReducers,
  hotelsReducers,
  addressReducers,
  addAddressReducers,
  facilitiesReducers,
  facilitiesHistoryReducers,

  bankReducers,
  vendorReducers,
  stockReducers,
  listOrderReducers,
  fintechReducers,
  accountReducers,
  transactionReducers,
  adminRestoReducers,
  restomenureducers,
  orderrestoreducers,
  galleryReducers,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      // .concat(logger)
      .concat(saga),
});

saga.run(rootSaga);

export default store;

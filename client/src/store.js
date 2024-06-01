// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { bloodGroupRegistration, contactUser, volunteerRegistration } from "./reducers/userReducer";
// // import { registerRiderReducer, loginRiderReducer, getAllRidersReducer, getRiderByIdReducer, updateRiderByIdReducer, addRiderReducer} from './reducers/riderReducer';

// // import {querycontact} from './reducers/queryReducer';
// // import { loginDriverReducer, registerDriverReducer, getDriverByIdReducer, updateDriverByIdReducer, getAllDriversReducer, addDriverReducer } from './reducers/driverReducer';
// // import { loginAdminReducer } from './reducers/adminReducer';
// // import {bookRideReducer} from './reducers/rideReducer';

// // let currentRider = localStorage.getItem('currentRider') ? JSON.parse(localStorage.getItem('currentRider')) : null;
// // let currentDriver = localStorage.getItem('currentDriver') ? JSON.parse(localStorage.getItem('currentDriver')) : null
// // let currentAdmin = localStorage.getItem('currentAdmin') ? JSON.parse(localStorage.getItem('currentAdmin')) : null



// const rootReducer = combineReducers({
//   //Contact
//   contactUser,
//   bloodGroupRegistration,
//   volunteerRegistration
//   //Rider
//   // registerRiderReducer,
//   // loginRiderReducer,
//   // getAllRidersReducer,
//   // getRiderByIdReducer,
//   // updateRiderByIdReducer,
//   // addRiderReducer,

//   //Driver
//   // registerDriverReducer,
//   // loginDriverReducer,
//   // getDriverByIdReducer,
//   // updateDriverByIdReducer,
//   // getAllDriversReducer,
//   // addDriverReducer,
//   //Contact
//   // querycontact,

//   //Admin
//   // loginAdminReducer,

//   //Rides
//   // bookRideReducer,
// });

// const initialState = {
//   //   loginRiderReducer : {
//   //     currentRider
//   //   },
//   //   loginDriverReducer : {
//   //     currentDriver
//   // },
//   // loginAdminReducer : {
//   //   currentAdmin
//   // },
// };

// const middleware = [thunk];

// const composeEnhancers = composeWithDevTools({
//   // Specify options if needed
// });

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeEnhancers(applyMiddleware(...middleware))
// );

// export default store;

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {thunk} from "redux-thunk"; // corrected import
import { bloodGroupRegistration, contactUser, volunteerRegistration } from "./reducers/userReducer";

const rootReducer = combineReducers({
  contactUser,
  bloodGroupRegistration,
  volunteerRegistration
});

const initialState = {};

const middleware = [thunk];

// Check if the Redux DevTools Extension is installed, otherwise fallback to a regular compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;

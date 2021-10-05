import "./App.css";
import React from "react";
import { LandingScreen } from "./screens/LandingScreen";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { authReducer } from "./store/reducers/auth.js";
import { drawerReducer } from "./store/reducers/drawer";
/////////////////////////////////////////////////////////////////
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBzYjPMMeI94kScNnZN9_XEQMalP1iJGI",
  authDomain: "shop-app-c577e.firebaseapp.com",
  databaseURL: "https://shop-app-c577e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shop-app-c577e",
  storageBucket: "shop-app-c577e.appspot.com",
  messagingSenderId: "485395790123",
  appId: "1:485395790123:web:cb50d4eced9b58f6e9ad6e",
  measurementId: "G-887YMYERVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
	const rootReducer = combineReducers({
		auth: authReducer,
		drawer: drawerReducer
	});

	const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

	return (
		<Provider store={store}>
			<LandingScreen />
		</Provider>
	);
}
export default App;

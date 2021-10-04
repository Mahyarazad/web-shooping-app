import "./App.css";
import React from "react";
import { LandingScreen } from "./screens/LandingScreen";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { authReducer } from "./store/reducers/auth.js";
import { drawerReducer } from "./store/reducers/drawer";

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

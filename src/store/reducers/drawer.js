import { TOGGLE_DRAWER, CLOSE_DRAWER } from "../actions/drawer";

const initialState = {
	drawer: false,
	hamburgerState: {
		lineOne: "lineOne",
		lineTwo: "lineTwo",
		lineThree: "lineThree",
	},
};
export const drawerReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_DRAWER:
			return {
				drawer: !state.drawer,
				hamburgerState: {
					lineOne: !state.drawer ? "lineOne" : "lineOneActive",
					lineTwo: !state.drawer ? "lineTwo" : "lineTwoActive",
					lineThree: !state.drawer ? "lineThree" : "lineThreeActive",
				},
			};
		case CLOSE_DRAWER:
			return { ...state, drawer: false };
		default:
			return state;
	}
};

export const TOGGLE_DRAWER = "TOGGLE_DRAWER";
export const CLOSE_DRAWER = "CLOSE_DRAWER";

export const toggleDrawer = () => {
	return { type: TOGGLE_DRAWER }
};

export const closeDrawer = () => {
	return { type: CLOSE_DRAWER }
};

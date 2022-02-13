import { useReducer, createContext, useEffect } from "react";
import axios from "axios";

// initial state
const intialState = {
	user: null,
};

//create context
const Context = createContext();

//root reducer
const rootReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			return { ...state, user: action.payload };
		case "LOGOUT":
			return { ...state, user: null };
		default:
			return state;
	}
};

//context provider
const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(rootReducer, intialState);

	//when we refresh the page the data stored in the state will get lost.So, for saving that we need
	//store the data in the browser's local storage and when the user refreshes the page then we can load the
	//data from the local storage
	//This code loads data from the brower's local storage. we set data in storage from the page which called the api
	useEffect(() => {
		dispatch({
			type: "LOGIN",
			payload: JSON.parse(window.localStorage.getItem("user")),
		});
	}, []);

	return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export { Context, Provider };

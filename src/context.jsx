//create a context (warehose)
//provider
//cosumer /useContext
//https://jsonplaceholder.typicode.com/photos
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();

const intialState = {
  name: "",
  image: "",
  services: [],
};
const API = "https://jsonplaceholder.typicode.com/photos";
const AppProvider = ({ children }) => {
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Fullstack Devloper",
        image: "./img/hero.svg",
      },
    });
  };
  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Harendar Pundir",
        image: "./img/about.jpg",
      },
    });
  };
  //to get api data

  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICE", payload: data });
    } catch (error) {
      console.log("error");
    }
  };

  /*   to call the api */
  useEffect(() => {
    getServices(API);
  }, []);
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };

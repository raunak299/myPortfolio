import React, { useContext, useReducer } from "react";
import reducer from "../reducers/global";

const GlobalContext = React.createContext();

const initialState = {
  isSidebarOpen: false,
  isNavbarFixed: false,
  isThemeChanged:
    localStorage.getItem("ThemeChangedStatus") === "true" ? true : false,
};
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const closeSidebar = () => {
    dispatch({ type: "CLOSE_SIDEBAR" });
  };
  const openSidebar = () => {
    dispatch({ type: "OPEN_SIDEBAR" });
  };
  const changeTheme = () => {
    dispatch({ type: "CHANGE_THEME" });
  };
  return (
    <GlobalContext.Provider
      value={{ ...state, closeSidebar, openSidebar, changeTheme }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

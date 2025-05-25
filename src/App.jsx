import { useReducer, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import "./App.css";
import Page from "./Page";
import { movieContext, ThemeContext } from "./context/index.js";
import { cartReducer, initalState } from "./reducers/CartReducers";
function App() {
  const [state, dispatch] = useReducer(cartReducer, initalState);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <movieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </movieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

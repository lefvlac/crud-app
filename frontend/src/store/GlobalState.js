import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

//Provider
export const GlobalProvider = (props) => {
  const [employers, setEmployers] = useState([]);
  const [selectedEmployer, setSelectedEmployer] = useState(null);
  const addEmployer = (employer) => {
    setEmployers([...employers, employer]);
  };

  return (
    <GlobalContext.Provider
      value={{
        employers,
        setEmployers,
        addEmployer,
        selectedEmployer,
        setSelectedEmployer,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

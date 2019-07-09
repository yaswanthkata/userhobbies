import React from "react";
import "./App.scss";
import UserHobbies from "./components/UserHobbies/UserHobbies";

const App: React.FC = () => {
  return (
    <div className="App">
      <UserHobbies />
    </div>
  );
};

export default App;

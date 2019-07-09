import React from "react";
import "./App.scss";
import UserHobbies from "./components/UserHobbies/UserHobbies";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <UserHobbies />
    </div>
  );
};

export default App;

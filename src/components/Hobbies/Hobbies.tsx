import React, { useState } from "react";
import { Hobby } from "../../types";
import HobbyTableRow from "./HobbyTableRow";
import "./Hobbies.scss";

interface HobbiesProps {
  hobbies: Hobby[];
  onAdd(hobby: Hobby): void;
  onRemove(id: number): void;
}

const Hobbies = ({ hobbies, onAdd, onRemove }: HobbiesProps) => {
  const [hobbyName, setHobbyName] = useState("");
  const [year, setYear] = useState("");
  const [passion, setPassion] = useState("");

  const addHobby = () => {
    if (
      hobbies.find(hobby => hobby.name === hobbyName) ||
      hobbyName.trim() === ""
    ) {
      alert("Hobby already exists");
      return;
    }
    const newHobby = {
      id: 0,
      name: hobbyName,
      passion: parseInt(passion),
      year: parseInt(year),
      userId: 0
    };

    onAdd(newHobby);
    setHobbyName("");
    setYear("");
    setPassion("");
  };

  const removeHobby = (hobby: Hobby) => {
    onRemove(hobby.id);
  };

  return (
    <>
      <div className="hobby-form">
        <select
          className="passion-dropdown"
          value={passion}
          onChange={({ target: { value } }) => {
            setPassion(value);
          }}
        >
          <option value="" disabled>
            Select passion level
          </option>
          <option value={1}>Low</option>
          <option value={2}>Medium</option>
          <option value={3}>High</option>
          <option value={4}>Very High</option>
        </select>
        <input
          type="text"
          required
          className="input-hobby"
          value={hobbyName}
          placeholder="Enter user hobby"
          onChange={({ target: { value } }) => setHobbyName(value)}
        />
        <input
          value={year}
          className="input-year"
          placeholder="Enter year"
          max="2019"
          type="number"
          onChange={({
            target: { value }
          }: React.ChangeEvent<HTMLInputElement>) => setYear(value)}
        />
        <button className="btn btn-green" onClick={addHobby}>
          Add Hobby
        </button>
      </div>
      <div className="hobby-list">
        {hobbies.length === 0 ? (
          "No hobbies"
        ) : (
          <table>
            <colgroup>
              <col width="25%" />
              <col width="45%" />
              <col width="25%" />
              <col width="5%" />
            </colgroup>
            <tbody>
              {hobbies.map(hobby => (
                <HobbyTableRow
                  key={hobby.id}
                  hobby={hobby}
                  onRemove={removeHobby}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
export default Hobbies;

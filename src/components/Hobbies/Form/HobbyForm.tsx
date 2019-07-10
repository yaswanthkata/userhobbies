import * as React from "react";
import { useState } from "react";
import { Hobby } from "../../../types";
import './HobbyForm.scss';
interface IHobbyFormProps {
  onAdd(hobby: Hobby): void;
}

const HobbyForm: React.FunctionComponent<IHobbyFormProps> = ({ onAdd }) => {
  const [hobbyName, setHobbyName] = useState("");
  const [year, setYear] = useState("");
  const [passion, setPassion] = useState("");
  const [formValid, setFormValid] = useState(false);
  const addHobby = () => {
    if (!hobbyName || hobbyName.trim().length === 0) {
      setFormValid(false);
    }

    const newHobby = {
      id: 0,
      name: hobbyName,
      passion: parseInt(passion),
      year: parseInt(year),
      userId: 0
    };

    onAdd(newHobby);
    resetForm();
  };

  const onHobbyNameChange = (value: string) => {
    setHobbyName(value);
    setFormValid(value.trim().length !== 0);
  };

  const resetForm = () => {
    setHobbyName("");
    setYear("");
    setPassion("");
  };

  return (
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
        onChange={({ target: { value } }) => onHobbyNameChange(value)}
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
      <button
        className="btn btn-green"
        disabled={!formValid}
        onClick={addHobby}
      >
        Add Hobby
      </button>
    </div>
  );
};

export default HobbyForm;

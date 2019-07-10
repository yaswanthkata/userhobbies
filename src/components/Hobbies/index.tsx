import React from "react";
import { Hobby } from "../../types";
import HobbyForm from "./Form/HobbyForm";
import HobbiesTable from "./Table/HobbiesTable";
import './Hobbies.scss';
interface HobbiesProps {
  hobbies: Hobby[];
  onAdd(hobby: Hobby): void;
  onRemove(id: number): void;
}

const Hobbies = ({ hobbies, onAdd, onRemove }: HobbiesProps) => {
  const addHobby = (hobby: Hobby) => {
    if (hobbies.find(h => h.name.toLowerCase() === hobby.name.toLowerCase())) {
      alert("Hobby already exists");
      return;
    }

    onAdd(hobby);
  };

  return (
    <>
      <HobbyForm onAdd={addHobby} />
      <div className="hobby-list">
        {hobbies.length === 0 ? (
          "No hobbies"
        ) : (
          <HobbiesTable onRemove={onRemove} hobbies={hobbies} />
        )}
      </div>
    </>
  );
};
export default Hobbies;

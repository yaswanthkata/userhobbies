import React from "react";
import { Hobby } from "../../types";

interface IHobbyTableRowProps {
  hobby: Hobby;
  onRemove(hobby: Hobby): void;
}

const HobbyTableRow = ({ hobby, onRemove }: IHobbyTableRowProps) => {
  const getPassion = (level: number) => {
    switch (level) {
      case 1:
        return "Low";
      case 2:
        return "Medium";
      case 3:
        return "High";
      case 4:
        return "Very High";
      default:
        return "";
    }
  };
  return (
    <tr>
      <td>{hobby.passion && "Passion : " + getPassion(hobby.passion)}</td>
      <td>
        <h2>{hobby.name}</h2>
      </td>
      <td>{"Since " + hobby.year}</td>
      <td>
        <button
          className="btn btn-red"
          onClick={() =>
            window.confirm("Are you sure you wish to delete the hobby?") &&
            onRemove(hobby)
          }
        >
          {" "}
          <i className="fa fa-trash" aria-hidden="true" />
        </button>
      </td>
    </tr>
  );
};

export default HobbyTableRow;

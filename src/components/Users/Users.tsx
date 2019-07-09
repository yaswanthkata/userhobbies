import React, { useState } from "react";
import { User } from "../../types";
import "./Users.scss";
import { UserItem } from "./UserItem";
interface UserProps {
  users: User[];
  onAdd(name: string): void;
  selectedUserId?: number;
  onSelect(user: User): void;
}
export const Users = ({
  users,
  selectedUserId,
  onAdd,
  onSelect
}: UserProps) => {
  const [userName, setUserName] = useState("");

  const addUser = () => {
    if (users.find(user => user.name === userName)) {
      alert("User already exists");
      return;
    }
    onAdd(userName);
    setUserName("");
  };

  const onUserSelectionChanged = (user: User) => {
    onSelect(user);
  };

  return (
    <div>
      <div className="user-form">
        <input
          type="text"
          placeholder="Enter user name"
          value={userName}
          onChange={({
            target: { value }
          }: React.ChangeEvent<HTMLInputElement>) => setUserName(value)}
        />
        <button className="btn btn-green" onClick={addUser}>
          Add user
        </button>
      </div>
      {users.length === 0 ? (
        "No users"
      ) : (
        <ul className="users-list">
          {users.map((user: User) => (
            <li
              key={user.id}
              onClick={() => onUserSelectionChanged(user)}
              className={user.id === selectedUserId ? "selected" : ""}
            >
            <UserItem {...user}/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;

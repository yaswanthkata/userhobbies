import React from "react";
import { User } from "../../types";
import "./Users.scss";
import UserListItem from "./UserListItem/UserListItem";
import UserAddForm from "./UserAddForm/UserAddForm";

interface UserProps {
  users: User[];
  onAdd(name: string): void;
  selectedUserId?: number;
  selectUser(user: User): void;
}
export const Users = ({
  users,
  selectedUserId,
  onAdd,
  selectUser
}: UserProps) => {

  const addUser = (userName: string) => {
    if (users.find(user => user.name === userName)) {
      window.alert("User already exists");
      return;
    }
    onAdd(userName);
  };

  const onUserSelectionChanged = (user: User) => {
    selectUser(user);
  };

  return (
    <div>
      <UserAddForm onAdd={addUser} />
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
              <UserListItem {...user} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;

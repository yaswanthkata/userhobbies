import React from "react";
import { User } from "../../../types";
import "./UsersList.scss";

export interface IUsersListProps {
  users: User[];
  selectedUserId?: number;
  selectUser(user: User): void;
}
export const UsersList = ({ users, selectedUserId, selectUser }: IUsersListProps) => {
  const onUserSelectionChanged = (user: User) => {
    selectUser(user);
  };

  return (
    <ul className="users-list">
      {users.map((user: User) => (
        <li
          key={user.id}
          onClick={() => onUserSelectionChanged(user)}
          className={user.id === selectedUserId ? "selected" : ""}
        >
          <div>
            <img src={"https://i.pravatar.cc/50?img=" + user.id} alt="avatar" />
            <h3 className="user-title"> {user.name}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;

import React from "react";
import { User } from "../../types";
import UserAddForm from "./Form/UserAddForm";
import UsersList from "./List/UsersList";

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
    if (
      users.find(user => user.name.toLowerCase() === userName.toLowerCase())
    ) {
      window.alert("User already exists");
      return;
    }
    onAdd(userName);
  };

  return (
    <div>
      <UserAddForm onAdd={addUser} />
      {users.length === 0 ? (
        "No users"
      ) : (
        <UsersList
          users={users}
          selectedUserId={selectedUserId}
          selectUser={selectUser}
        />
      )}
    </div>
  );
};

export default Users;

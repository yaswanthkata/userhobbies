import * as React from "react";

export interface IUserProps {
  id: number;
  name: string;
}

export function UserItem({ id, name }: IUserProps) {
  return (
    <div>
      <img src={"https://i.pravatar.cc/50?img=" + id} alt="avatar" />
      <h3 className="user-title"> {name}</h3>
    </div>
  );
}

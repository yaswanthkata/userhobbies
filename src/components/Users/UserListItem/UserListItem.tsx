import * as React from "react";

interface IUserListItemProps {
  id: number;
  name: string;
}

const UserListItem: React.FunctionComponent<IUserListItemProps> = ({
  id,
  name
}: IUserListItemProps) => {
  return (
    <div>
      <img src={"https://i.pravatar.cc/50?img=" + id} alt="avatar" />
      <h3 className="user-title"> {name}</h3>
    </div>
  );
};

export default UserListItem;

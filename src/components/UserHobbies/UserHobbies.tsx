import * as React from "react";
import { connect } from "react-redux";
import { User, Hobby } from "../../types";
import { Users } from "../Users";
import Hobbies from "../Hobbies/Hobbies";
import { Dispatch } from "redux";
import { fetchUsers, createUser } from "../../store/actions/users";
import "./UserHobbies.scss";
import {
  createHobby,
  deleteHobby,
  fetchHobbies
} from "../../store/actions/hobbies";

export interface IUserHobbiesProps {
  users: User[];
  hobbies: Hobby[];
  fetchUsers: typeof fetchUsers;
  fetchHobbies: typeof fetchHobbies;
  addUser: typeof createUser;
  removeHobby: typeof deleteHobby;
  addHobby: typeof createHobby;
}

export interface IUserHobbiesState {
  selectedUserId: number;
}
// Container component connecting to the store
class UserHobbies extends React.Component<IUserHobbiesProps,IUserHobbiesState> {
  constructor(props: IUserHobbiesProps) {
    super(props);
    this.state = {
      selectedUserId: -1
    };
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  onAddHobby = (hobby: Hobby) => {
    hobby.userId = this.state.selectedUserId;
    this.props.addHobby(hobby);
  };

  selectUser = (user: User) => {
    this.setState({ selectedUserId: user.id });
    this.props.fetchHobbies(user.id);
  };

  public render() {
    const { users, hobbies, removeHobby, addUser } = this.props;
    const { selectedUserId } = this.state;
    return (
      <div className="user-hobbies-container">
        <div className="users-column">
          <Users
            users={users}
            selectedUserId={selectedUserId}
            onAdd={addUser}
            selectUser={this.selectUser}
          />
        </div>
        <div className="hobbies-column">
          {selectedUserId > -1 && (
            <Hobbies
              onRemove={removeHobby}
              onAdd={this.onAddHobby}
              hobbies={hobbies}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store: any) => ({
  users: store.users.users,
  hobbies: store.hobbies.hobbies
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addUser: (username: string) => dispatch(createUser(username)),
  removeHobby: (id: number) => dispatch(deleteHobby(id)),
  addHobby: (hobby: Hobby) => dispatch(createHobby(hobby)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchHobbies: (userId: number) => dispatch(fetchHobbies(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHobbies);
